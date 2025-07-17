module.exports = {
  extends: [ "config:recommended" ],
  branchPrefix: "gh-actions-renovate/",
  repositories: [ "afharo/dockerized-smarthome", "afharo/matterbridge-xiaomi-roborock" ],
  hostRules: [
    {
      hostType: "docker",
      matchHost: "docker.io",
      username: process.env.DOCKER_HUB_USER,
      password: process.env.DOCKER_HUB_PASSWORD,
    },
    {
      hostType: "docker",
      matchHost: "hub.docker.com",
      username: process.env.DOCKER_HUB_USER,
      password: process.env.DOCKER_HUB_PASSWORD,
    },
  ],
};
