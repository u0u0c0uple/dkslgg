module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/mocks/**",
  ],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  coveragePathIgnorePatterns: [],
  setupFilesAfterEnv: ["<rootDir>/config/jest/setupTests.js"],
  testEnvironment: "jest-environment-jsdom",
  modulePaths: ["<rootDir>/src"],
  transform: {
    "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.cjs",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)":
      "<rootDir>/config/jest/fileTransform.cjs",
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
    // ignore antd
    "/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$",
  ],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    // identity-obj-proxy 설치 필요
    "^.+\\.module\\.(css|sass|scss|tff|png)$": "identity-obj-proxy",
    // svg mocking
    "^.+\\.svg$": "<rootDir>/src/__mocks__/svgrMock.js",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^components/(.*)": "<rootDir>/src/components/$1",
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.next/",
    "<rootDir>/cypress/",
  ],
  moduleFileExtensions: [
    // https://jestjs.io/docs/configuration#modulefileextensions-arraystring
    "tsx",
    "ts",
    "web.js",
    "js",
    "web.ts",
    "web.tsx",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  testMatch: ["<rootDir>/src/__tests__/*.test.(js|jsx|ts|tsx)"],
  resetMocks: true,
};