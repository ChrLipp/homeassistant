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

- Goggle cast
- HACS
    - SamsungTV Smart
    - Govee

##  Custom components

- Custom integration of "Burgenländischer Müllverband" ([BMV](https://www.bmv.at/service/muellabfuhrtermine.html)) waste service.

##  Open issues and known problems

- Fix Miki GPS
- Rewire the ventilation system

## Fixed

- Send Telegram updates messages to different chats
- Update notification for HACS
- Different times for covers down
- Get rid of uninitialised warning for waste_bmv sensors
- Fixed version warning for waste_bmv
- Get rid of unknown warning for template cover