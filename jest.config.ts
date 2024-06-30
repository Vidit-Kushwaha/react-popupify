import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    '^.+\\.svg$': 'jest-transformer-svg',
  },
  collectCoverage: true,
  coverageReporters: ['lcov', 'text'],
  coverageDirectory: './coverage'
}
export default config
