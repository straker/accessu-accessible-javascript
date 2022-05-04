const { defaults } = require('jest-config');
const testEnv = process.env.TEST_ENV;

let config = {
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js'
  ],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy'
  },
  preset: 'jest-puppeteer'
};

if (testEnv === 'unit') {
  config = {
    ...config,
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: [
      ...defaults.testPathIgnorePatterns,
      '<rootDir>/__tests__/'
    ]
  }
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