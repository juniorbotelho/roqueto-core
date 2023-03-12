const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.base.json");

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest/presets/js-with-ts",
  testEnvironment: "node",
  bail: false,
  detectLeaks: true,
  detectOpenHandles: true,
  maxConcurrency: 32,
  maxWorkers: "100%",
  cacheDirectory: "<rootDir>/.cache",
  coverageDirectory: "<rootDir>/coverage",
  testMatch: [
    "<rootDir>/tests/**/?(*.)+(spec|test).[tj]s?(x)",
    "<rootDir>/src/?(*.)+(spec|test).[tj]s?(x)",
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
};
