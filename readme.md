[![Build Status](https://github.com/ChrLipp/homeassistant/actions/workflows/main.yml/badge.svg)](https://travis-ci.org/ChrLipp/ha-config)

# My Home Assistant installation

## Integrations (add manual, not covered through code)

- Goggle cast
- [HACS (Home Assistant Community Store)](https://github.com/hacs/integration)
- SamsungTV Smart (see HACS)
- Govee

##  HACS

- Integrationen
    - [automower](https://github.com/walthowd/ha-automower)
    - [Govee](https://github.com/LaggAt/hacs-govee)
    - [Local Tuya](https://github.com/rospogrigio/localtuya)
    - [SamsungTV Smart](https://github.com/ollo69/ha-samsungtv-smart)
- Frontend
    - [Atomic Calendar Revive](https://github.com/marksie1988/atomic-calendar-revive)
    - [Fan Control Entity Row](https://github.com/finity69x2/fan-control-entity-row)
    - [Google Dark Theme](https://github.com/JuanMTech/google_dark_theme)
    - [Time Picker Card](https://github.com/GeorgeSG/lovelace-time-picker-card)

##  Custom components

- [BMV](https://www.bmv.at/service/muellabfuhrtermine.html)
  Custom integration of BMV waste service.

##  Known problems (way to much)

- Login from Web sometimes doesn't work (plugin, theme)
  403 401 https://poettelsdorf.duckdns.org:8123/api/camera_proxy_stream/camera.miki?token=90456fee3bd9b10d12e94110a3c5e9fda7fe31461b64336a362a74d1012528b0
  Mehrfach, führt zum Aussperren
- Presence detection
- Switch to Local Tuya

## Fixed

- Migrated to Diskstation
