const config = require("../../jest.config");

module.exports = Object.assign({
  rootDir: "../../",
  onlyChanged: true,

  displayName: {
    name: "Unitary",
    color: "yellow",
  },
  testMatch: [
    "<rootDir>/tests/**/?(*.)+(spec).[tj]s?(x)",
    "<rootDir>/src/?(*.)+(spec).[tj]s?(x)"
  ],
}, config);
