[![Build Status](https://github.com/ChrLipp/homeassistant/actions/workflows/main.yml/badge.svg)](https://github.com/ChrLipp/homeassistant/actions/workflows/main.yml)

# My Home Assistant installation

##  HACS

- [HACS (Home Assistant Community Store)](https://github.com/hacs/integration)
- Integrations
    - [automower](https://github.com/walthowd/ha-automower)
    - [Govee](https://github.com/LaggAt/hacs-govee)
    - [Local Tuya](https://github.com/rospogrigio/localtuya)
    - [SamsungTV Smart](https://github.com/ollo69/ha-samsungtv-smart)
- Frontend
    - [Atomic Calendar Revive](https://github.com/marksie1988/atomic-calendar-revive)
    - [Fan Control Entity Row](https://github.com/finity69x2/fan-control-entity-row)
    - [Google Dark Theme](https://github.com/JuanMTech/google_dark_theme)
    - [Time Picker Card](https://github.com/GeorgeSG/lovelace-time-picker-card)

## Integrations (add manual, not covered through code)

- Goggle
    - cast
	- Calendar
- HACS
    - Govee
	- LocalTuya
    - SamsungTV Smart
- Fritz 

##  Custom components

- Custom integration of "Burgenländischer Müllverband" ([BMV](https://www.bmv.at/service/muellabfuhrtermine.html)) waste service.

##  Open issues and known problems

- Govee: As a general rule you need to increase the polling interval by 10 seconds for every govee device connected. So if you have 1 device it should be 10, 2 devices will be 20

## Fixed

- Rename plug_02 to plug_toaster
- Turn toaster off after 15 minutes
- Provide names for plugs in GUI
- Update HA to 2022.12.9
- Update HACS
- Update Google Dark Theme
- Update LocalTuya
- Update SamsungTV Smart
- Update GUI Elements
