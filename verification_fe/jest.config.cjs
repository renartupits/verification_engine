module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.app.json"
    }
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
