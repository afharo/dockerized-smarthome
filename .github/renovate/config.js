module.exports = {
  extends: [ "config:recommended" ],
  branchPrefix: "gh-actions-renovate/",
  repositories: [ "afharo/dockerized-smarthome" ],
  hostRules: [
    {
      hostType: "docker",
      username: process.env.DOCKER_HUB_USER,
      password: process.env.DOCKER_HUB_PASSWORD,
    },

    // Explicitly declaring the GH docker registry to avoid using the default "token-based authentication" (that's failing)
    {
      hostType: "docker",
      matchHost: "ghcr.io",
    },
  ],
};