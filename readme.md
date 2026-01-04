[![Build Status](https://github.com/ChrLipp/homeassistant/actions/workflows/main.yml/badge.svg)](https://github.com/ChrLipp/homeassistant/actions/workflows/main.yml)

# My Home Assistant installation

##  HACS

- [HACS (Home Assistant Community Store)](https://github.com/hacs/integration)
  - Integrations
    - [Govee](https://github.com/LaggAt/hacs-govee)
    - [Husqvarna Automower](https://github.com/Thomas55555/husqvarna_automower)
    - [iPhone Device Tracker](https://github.com/mudape/iphonedetect)
    - [Local Tuya](https://github.com/rospogrigio/localtuya)
    - [SamsungTV Smart](https://github.com/ollo69/ha-samsungtv-smart)
    - [Waste BMV](https://github.com/ChrLipp/waste_at_bmv)
    - [Xiaomi Cloud Map Extractor](https://github.com/PiotrMachowski/Home-Assistant-custom-components-Xiaomi-Cloud-Map-Extractor)
  - Frontend
    - [Atomic Calendar Revive](https://github.com/marksie1988/atomic-calendar-revive)
    - [Fan Percent Button Row](https://github.com/finity69x2/fan-percent-button-row)
    - [Google Dark Theme](https://github.com/JuanMTech/google_dark_theme)
	- [Horizon Card](https://github.com/rejuvenate/lovelace-horizon-card)
	- [Simple Vacuum Card](https://github.com/benct/lovelace-xiaomi-vacuum-card)
    - [Time Picker Card](https://github.com/GeorgeSG/lovelace-time-picker-card)

## Integrations (add manual, not covered through code)

- Goggle
    - cast
	- Calendar
- Fritz
- Generic camera, see `automower.yaml`

##  Open issues and known problems

- Govee: As a general rule you need to increase the polling interval by 10 seconds for every govee device connected. So if you have 1 device it should be 10, 2 devices will be 20
- Migrate LocalTuya to ESPhome
- Integrate electricity costs
- Husquarna Automower map
- Switch from Google Cast to Onkyo integration
- Repair temperature sensors

## Fixed

- Tried to fix fence ghost execution
