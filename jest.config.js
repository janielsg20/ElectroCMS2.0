module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@electrocms/core$': '<rootDir>/packages/core/src',
    '^@electrocms/editor-puck$': '<rootDir>/packages/editor-puck/src',
  },
  testMatch: ['**/packages/**/*.test.ts'],
};
