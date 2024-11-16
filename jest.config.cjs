// jest.config.cjs
module.exports = {
  transform: {
    "^.+\\.js$": "babel-jest", // Transform .js files using babel-jest
    "^.+\\.mjs$": "babel-jest", // Transform .mjs files using babel-jest
  },
  testEnvironment: "node", // Use Node.js as the test environment
  transformIgnorePatterns: ["/node_modules/(?!your-es-module-package/)"], // Allow Jest to transform certain node_modules
};
