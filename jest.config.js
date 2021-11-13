const pack = require('./package');

process.env.TZ = 'UTC';

module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.spec.js'],
  transform: {
    '^.+\\.jsx?$': './jest.transform.js',
  },
  collectCoverage: true,
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageReporters: ['text-summary', 'html'],
  setupFiles: ['./jest.init.js'],
  verbose: true,
  displayName: pack.name,
  name: pack.name,
};
