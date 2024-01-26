import { GlobalEnv } from "@repo/utils/GlobalEnv";

const nextJest = require("next/jest");

GlobalEnv.loadEnvVariables();

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testTimeout: 60000,
  testEnvironment: "node",
  collectCoverage: false,
  forceExit: true,
  coverageReporters: ["json", "html"],
  collectCoverageFrom: ["**/*.{ts,tsx}", "!**/node_modules/**"],
  // We can set this if we need to run synchronous tests
  // maxWorkers: 1
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
// noinspection JSCheckFunctionSignatures
module.exports = createJestConfig(customJestConfig);
