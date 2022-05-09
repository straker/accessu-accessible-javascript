const { defaults } = require('jest-config');
const testEnv = process.env.TEST_ENV;

let config = {
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js'
  ],
  // support for CSS modules
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy'
  },
  preset: 'jest-puppeteer'
};

// set unit tests to run in JSDOM environment for axe-core
if (testEnv === 'unit') {
  config = {
    ...config,
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: [
      ...defaults.testPathIgnorePatterns,
      '<rootDir>/__tests__/'
    ]
  }
// set integration tests to run jest-puppeteer (`testEnvironment`
// must be empty)
} else if (testEnv === 'integration') {
  config = {
    ...config,
    testPathIgnorePatterns: [
      ...defaults.testPathIgnorePatterns,
      '<rootDir>/src/'
    ]
  }
}

module.exports = config;


