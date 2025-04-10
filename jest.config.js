module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'mjs'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx|mjs)$': 'ts-jest',
  },
  extensionsToTreatAsEsm: ['.jsx', '.ts', '.tsx'],
};
