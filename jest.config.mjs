// jest.config.mjs
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: ['src/**/*.ts(x)'],
  coverageReporters : ['lcov', 'text', 'text-summary', 'cobertura'],
  coverageThreshold: {
      global: {
          statements: 100,
          branches: 100,
          functions: 100,
          lines: 100
      }
  }
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);