module.exports = {
  extends: [ "config:base" ],
  branchPrefix: "gh-actions-renovate/",
  hostRules: [
    {
      hostType: 'docker',
      username: process.env.DOCKER_HUB_USER,
      password: process.env.DOCKER_HUB_PASSWORD,
    },
  ],
};