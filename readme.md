[![Build Status](https://travis-ci.org/ChrLipp/ha-config.svg?branch=master)](https://travis-ci.org/ChrLipp/ha-config)

# My Home Assistant installation

## Integrations
- Goggle cast
- [HACS (Home Assistant Community Store)](https://github.com/hacs/integration)
- Philips Hue
- Met.no
- Homekit

## Add-ons
- [Duck DNS](https://github.com/home-assistant/hassio-addons/tree/master/duckdns)
- [File editor](https://github.com/home-assistant/hassio-addons/tree/master/configurator)
- [AdGuard](https://github.com/hassio-addons/addon-adguard-home)
- [SSH & Web Terminal](https://github.com/hassio-addons/addon-ssh)
- [Samba share](https://github.com/home-assistant/hassio-addons/tree/master/samba)
- [ESP Home](https://esphome.io/)

##  HACS
- [automower](https://github.com/walthowd/ha-automower)
- [Custom header](https://github.com/maykar/custom-header)
- [Samsungtv Custom](https://github.com/roberodin/ha-samsungtv-custom)

##  Custom components
- [BMV](https://www.bmv.at/service/muellabfuhrtermine.html)
  Custom integration of BMV waste service.

##  Known problems (way to much)

- Elias switch restart turns off the light
- Login from Web sometimes doesn't work (plugin, theme)
  403 401 https://poettelsdorf.duckdns.org:8123/api/camera_proxy_stream/camera.miki?token=90456fee3bd9b10d12e94110a3c5e9fda7fe31461b64336a362a74d1012528b0
  Mehrfach, führt zum Aussperren
- Hue light turns on itself during the night
- Presence detection

## Fixed

- Update notification shows only the first update
- Stecker Anna-Mavie
- Automower status is empty
