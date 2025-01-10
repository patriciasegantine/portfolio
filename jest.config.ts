import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest', // Usar ts-jest como preset
  testEnvironment: 'jsdom', // Ambiente de testes no navegador (útil para React)
  transform: {
    '^.+\\.(ts|tsx)$': '@swc/jest', // Usar SWC para compilar TS/TSX
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Arquivo de setup de testes
  moduleNameMapper: {
    // Mapeando o alias @ para a pasta src
    '^@/(.*)$': '<rootDir>/src/$1', // Adapte isso conforme o seu projeto
  },
};

export default config;
