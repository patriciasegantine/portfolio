import { Config } from '@swc/core'

const config: Config = {
  jsc: {
    target: 'es2021',
    parser: {
      syntax: 'typescript',
      tsx: true, // Para suportar JSX/TSX
    },
    transform: {
      react: {
        runtime: 'automatic', // Usar JSX transform (React 17+)
      },
    },
  },
  module: {
    type: 'commonjs', // Usar CommonJS para os módulos
  },
};

export default config;
