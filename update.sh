#! /bin/bash

set -e

HERE=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$HERE"

echo "Updating repo from Github"
git pull

echo "Updating docker images"
docker-compose pull

echo "Launching updated services"
docker-compose up -d

echo "Done!"
