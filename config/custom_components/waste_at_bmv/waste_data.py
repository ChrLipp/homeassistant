import logging
import ssl

from bs4 import BeautifulSoup
from datetime import date, datetime, timedelta
from homeassistant.util import Throttle
from urllib import request, parse

_LOGGER = logging.getLogger(__name__)
MIN_TIME_BETWEEN_UPDATES = timedelta(days=1)

# Fetches and provides the waste data.
class WasteData:

    def __init__(self, ort, strasse, hausnummer):
        _LOGGER.debug("WasteSensor ctor")
        self.restmuell = None
        self.gelberSack = None
        self.papier = None
        self.ort = ort
        self.strasse = strasse
        self.hausnummer = hausnummer
        
        # setup non verifying context
        self.ctx = ssl.create_default_context()
        self.ctx.check_hostname = False
        self.ctx.verify_mode = ssl.CERT_NONE

    # Checks if the given string is a valid date in the future (or today).
    def parse_date(self, date_string):
        result: date = None
        if ', ' in date_string:
            parts = date_string.split(', ')
            parsed_date = datetime.strptime(parts[1], '%d.%m.%Y').date()
            if parsed_date >= date.today():
                result = parsed_date
        return result

    # Select all table columns with a date in the future.
    def get_text_from_tds(self, elements):
        result = list()
        for element in elements:
            parsed_date = self.parse_date(element.text)
            if parsed_date is not None:
                result.append(parsed_date)
        return result

    # Calls the servlet with the given parameters.
    def get_servlet(self, parms):
        # build URI on given parameters
        servlet_url = 'https://webudb.udb.at/WasteManagementUDB/WasteManagementServlet'
        querystring = parse.urlencode(parms)
        
        # execute request
        u = request.urlopen(servlet_url + '?' + querystring, context=self.ctx)
        resp = u.read()

        soup = BeautifulSoup(resp, 'html.parser')
        return soup

    # Fetches the waste data
    def fetch_data(self):
        # call 1, get session id
        params1 = {
            'SubmitAction': 'wasteDisposalServices'
        }
        doc = self.get_servlet(params1)
        session = doc.select('form #SessionId')[0]

        # call 2, set city
        paramsMap = {
            'SubmitAction': 'citiesEvent',
            'InFrameMode': 'TRUE',
            'Ort': self.ort,
            'Strasse': self.strasse,
            'Hausnummer': self.hausnummer,
            'ApplicationName': 'com.athos.kd.udb.CheckAbfuhrTermineParameterBusinessCase',
            session['name']: session['value']
        }
        doc = self.get_servlet(paramsMap)

        # call 3, fetch dates
        paramsMap['SubmitAction'] = 'forward'
        doc = self.get_servlet(paramsMap)
        
        # parses the dates from the html
        restmuellSelection = doc.find("table", {"name": "RestmuellTermineLIST"}).select('td')
        self.restmuell = self.get_text_from_tds(restmuellSelection)
        gelberSackSelection = doc.find("table", {"name": "DSDTermineLIST"}).select('td')
        self.gelberSack = self.get_text_from_tds(gelberSackSelection)
        papierSelection = doc.find("table", {"name": "PapierTermineLIST"}).select('td')
        self.papier = self.get_text_from_tds(papierSelection)

    @Throttle(MIN_TIME_BETWEEN_UPDATES)
    def update(self):
        self.force_update()

    def force_update(self):
        _LOGGER.info("Updating waste dates using remote API")
        self.fetch_data()
