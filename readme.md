[![Build Status](https://travis-ci.org/ChrLipp/ha-config.svg?branch=master)](https://travis-ci.org/ChrLipp/ha-config)

# My Home Assistant installation

## Integrations
- Goggle cast
- HACS (Home Assistant Community Store)
- Philips Hue
- Met.no
- Homekit

## Add-ons
- Duck DNS
- File editor
- AdGuard
- SSH & Web Terminal
- Samba share
- ESP Home

##  HACS
- [automower](https://github.com/walthowd/ha-automower)
- [Custom header](https://github.com/maykar/custom-header)
- [Samsungtv Custom](https://github.com/roberodin/ha-samsungtv-custom)

##  Custom components
- [BMV](https://www.bmv.at/service/muellabfuhrtermine.html)
  Custom integration of BMV waste service.

##  Known problems (way to much)

- Custom header is fetched from  /custom_components/custom-header/custom-header.js and returns 404
- Elias switch restart turns off the light
- Update notification shows only the first update
- Automower status is empty
- Login from Web sometimes doesn't work (plugin, theme)
- Stecker Anna-Mavie
- Hue light turns on itself during the night


## Fixed

- Backup automation shows stupid filename: https://community.home-assistant.io/t/automatic-backup-name/184621
- DNS Loop
- HACS is empty
- Migrated from Pi-hole to AdGuard