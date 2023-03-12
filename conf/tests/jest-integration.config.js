const config = require("../../jest.config");

module.exports = Object.assign({
  rootDir: "../../",
  onlyChanged: true,

  displayName: {
    name: "Integration",
    color: "pink",
  },
  testMatch: [
    "<rootDir>/tests/**/?(*.)+(test).[tj]s?(x)",
    "<rootDir>/src/?(*.)+(test).[tj]s?(x)"
  ],
}, config);
