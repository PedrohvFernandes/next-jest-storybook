import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}', // Inclui todos os arquivos da pasta src
    '!**/node_modules/**', // Exclui node_modules
    '!**/.next/**', // Exclui a pasta .next
    '!**/out/**', // Exclui pasta de build caso exista
    '!**/*.d.ts', // Exclui arquivos de definição de tipo
    '!**/*.stories.{js,jsx,ts,tsx}', // Exclui arquivos de definição de tipo
  ],
  coverageDirectory: 'coverage', // pasta onde o report de coverage será gerado
}

export default createJestConfig(config)
