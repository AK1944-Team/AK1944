import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: [
    "@testing-library/jest-dom",
    "<rootDir>/jest.setup.js",
  ],

  testEnvironment: "jest-fixed-jsdom",

  testEnvironmentOptions: {
    customExportConditions: [""],
  },

  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
  ],

  transform: {
    "^.+\\.(ts|tsx|js|jsx|mjs)$": "ts-jest",
  },

  transformIgnorePatterns: [
    "node_modules/(?!(msw|until-async)/)"
  ],

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },

  extensionsToTreatAsEsm: [".ts", ".tsx"],

  verbose: false,
};

export default createJestConfig(customJestConfig);
