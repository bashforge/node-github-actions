// jest.config.js
export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    extensionsToTreatAsEsm: ['.ts'],
    globals: {
      'ts-jest': {
        useESM: true,
      },
    },
    testPathIgnorePatterns: [
      '/node_modules/',
      '/dist/'
    ],
  };
  