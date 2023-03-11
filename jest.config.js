/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  bail: true,
  detectLeaks: true,
  detectOpenHandles: true,
  maxConcurrency: 32,
  maxWorkers: '100%',

  // Directories
  cacheDirectory: '<rootDir>/.cache',
  coverageDirectory: '<rootDir>/coverage',

  testMatch: [
    "<rootDir>/tests/**/?(*.)+(spec|test).[tj]s?(x)",
    "<rootDir>/src/?(*.)+(spec|test).[tj]s?(x)"
  ],
};
