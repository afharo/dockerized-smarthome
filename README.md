# Dockerized Smarthome

This repo is essentially listing all the services I want to run in my smarthome server in a docker-compose format.

## Services

Listing all the services included so far in the [docker-compose](./docker-compose.yml), a small note of why/what I'm going to use it for, and some installations notes in case any further step is needed.

### Zigbee2MQTT

**URL:** <https://www.zigbee2mqtt.io/>

**Why:** So far I've been a HomeKit hard user, and I'm looking forward for Matter and Thread to keep making live easier and cheaper for me.

However, there is a moment in the HomeKit user where you wonder _what if there was a communication layer that is more or less standard, so
I can rely on different brands and vendors without buying hubs for each one of them?_.

It looks like Z2M is the answer for Zigbee-based devices.

**Installation:** Copy the [configuration.base.yaml](./data/zigbee2mqtt/configuration.base.yaml) to `data/zigbee2mqtt/configuration.yaml`

```bash
cp data/zigbee2mqtt/configuration.base.yaml data/zigbee2mqtt/configuration.yaml
```

And make sure the `ttyUSB0` still matches the name associated to your Zigbee dongle (`sudo dmesg` can help with figuring it out). This check needs to happen in `configuration.yaml` and `docker-compose.yml`.

### Mosquitto

**URL:** <https://mosquitto.org>

**Why:** Simply because I need an MQTT server for Zigbee2MQTT and it's the suggested one by Zigbee2MQTT docs.

### Home Assistant

**URL:** <https://www.home-assistant.io/>

**Why:** While I'm a hard HomeKit user for now (we'll see if Matter will change that), I want to start exploring HA to see what all the fuzz is about. It also helps me bridge Z2M devices to HomeKit. However, I'm still in exploration phase... I might use [`homebridge-z2m`](https://github.com/itavero/homebridge-z2m) in the future instead.

### Duplicati

**URL:** <https://www.duplicati.com>

**Why:** We all need a backup! All the services in this project generate a lot of files worth of creating backups of: secrets, pairing tokens, autogenerated configurations (from UI actions), and DBs. The idea is to back up the entire `/data` directory.

**Installation:** Once the container is running, open `http://host:8200` in your browser to set up (or restore) the backups. If restoring a previous backup, make sure the affected service is stopped before restoring the files.

DISCLAIMER: Duplicati dropped support for the architecture `linux/arm/v7` because the managing the underlying libraries and dependencies in this architecture was too complex. If running on a Raspberry Pi, make sure it's running a 64 bits OS.

### Homebridge

**URL**: <https://homebridge.io>

**Why:** As a HomeKit user, there are devices that would make a great addition to my automations, but they are not officially supported by this platform. I've been using this project for a long while, and I've already found out Home Assistant cannot fully replace it.

**Installation:** Copy the [homebridge.base.env](./data/homebridge/homebridge.base.env) to `./data/homebridge/homebridge.env`

```bash
cp ./data/homebridge/homebridge.base.env ./data/homebridge/homebridge.env
```

And set the environment variables as needed.

DISCLAIMER: I'm using a private Docker image for the time being. So other folks might not be able to run it. I'll try to anonymize the other project, so I can make it public, and so the Docker image.
