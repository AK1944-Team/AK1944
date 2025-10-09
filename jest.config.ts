import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": "babel-jest",
  },

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transformIgnorePatterns: [
    "/node_modules/(?!(@testing-library|msw|nanoid|uuid)/)",
  ],
  clearMocks: true,
};

export default config;
