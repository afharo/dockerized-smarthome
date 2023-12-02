module.exports = {
  extends: [ "config:recommended" ],
  branchPrefix: "gh-actions-renovate/",
  includePaths: [ "../../" ],
  hostRules: [
    {
      hostType: 'docker',
      username: process.env.DOCKER_HUB_USER,
      password: process.env.DOCKER_HUB_PASSWORD,
    },
  ],
};