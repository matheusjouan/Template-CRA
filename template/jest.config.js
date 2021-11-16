/* eslint-disable no-undef */
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules'],
  setupFilesAfterEnv: ['<rootDir>/src/tests/setupTest.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
};
