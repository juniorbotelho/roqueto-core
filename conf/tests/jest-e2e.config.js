const config = require("../../jest.config");

module.exports = Object.assign({
  rootDir: "../../",
  onlyChanged: true,

  displayName: {
    name: "End2End",
    color: "blue",
  },
  testMatch: [
    "<rootDir>/tests/**/?(*.)+(e2e).[tj]s?(x)",
    "<rootDir>/src/?(*.)+(e2e).[tj]s?(x)"
  ],
}, config);
