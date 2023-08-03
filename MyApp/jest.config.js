/** @type {import('jest').Config} */

module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  collectCoverage: true,
  collectCoverageFrom: [
    "**/**/*.js",
    "!babel.config.js",
    "!jest.config.js",
    "!App.js",
    "!coverage/**",
  ],
};
