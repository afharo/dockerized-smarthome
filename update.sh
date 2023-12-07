#! /bin/bash

set -e

HERE=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$HERE"

# Default variable values
should_pull=false

# Function to display script usage
usage() {
 echo "Usage: $0 [OPTIONS]"
 echo "Options:"
 echo " -h, --help      Display this help message"
 echo " -p, --pull      Pulls all docker images"
}

# Function to handle options and arguments
handle_options() {
  while [ $# -gt 0 ]; do
    case $1 in
      -h | --help)
        usage
        exit 0
        ;;
      -p | --pull)
        should_pull=true
        ;;
      *)
        echo "Invalid option: $1" >&2
        usage
        exit 1
        ;;
    esac
    shift
  done
}

# Main script execution
handle_options "$@"

echo "Updating repo from Github"
git pull

if [ "$should_pull" = true ]; then
  echo "Updating docker images"
  docker-compose pull
fi

echo "Launching updated services"
docker-compose up -d

echo "Clean up Docker images and unused resources"
docker image prune -af
docker system prune -af

echo "Done!"
