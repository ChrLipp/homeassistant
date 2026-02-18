[![Build Status](https://github.com/ChrLipp/homeassistant/actions/workflows/main.yml/badge.svg)](https://github.com/ChrLipp/homeassistant/actions/workflows/main.yml)

# My Home Assistant installation

##  HACS

HA needs the following integrations and frontend components. They are not included in this repository, so you have to install them manually.

- [HACS (Home Assistant Community Store)](https://github.com/hacs/integration)
  - Integrations
    - [iPhone Device Tracker](https://github.com/mudape/iphonedetect)
    - [Local Tuya](https://github.com/rospogrigio/localtuya)
    - [Waste BMV](https://github.com/ChrLipp/waste_at_bmv)
    - [Xiaomi Cloud Map Extractor](https://github.com/PiotrMachowski/Home-Assistant-custom-components-Xiaomi-Cloud-Map-Extractor)
  - Frontend
    - [Atomic Calendar Revive](https://github.com/marksie1988/atomic-calendar-revive)
    - [Fan Percent Button Row](https://github.com/finity69x2/fan-percent-button-row)
	- [Horizon Card](https://github.com/rejuvenate/lovelace-horizon-card)
	- [Simple Vacuum Card](https://github.com/benct/lovelace-xiaomi-vacuum-card)
    - [Time Picker Card](https://github.com/GeorgeSG/lovelace-time-picker-card)

## Integrate KI

- [Home Assistant MCP Server](https://homeassistant-ai.github.io/ha-mcp/).
  I choose Claude Desktop with [Home Assistant Agent Skills](https://github.com/homeassistant-ai/skills)

##  Open issues and known problems

- Govee: As a general rule you need to increase the polling interval by 10 seconds for every govee device connected. So if you have 1 device it should be 10, 2 devices will be 20
  - [Govee](https://github.com/LaggAt/hacs-govee)
- Migrate LocalTuya to ESPhome
- Integrate electricity costs
- Switch from Google Cast to Onkyo integration
- Repair temperature sensors
- Automate cover Elias
- Samsung TV
  - [SamsungTV Smart](https://github.com/ollo69/ha-samsungtv-smart)
- Homekit for family

## Fixed

- Removed HACS Frontend Code from GIT repository
- Google Kalender angebunden, Automatisierung für tägliche Benachrichtigung
