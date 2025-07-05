import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  stub: false,
  entries: [
    'src/index',
    'src/config',
    'src/types',
    'src/commands.ts',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
  externals: [
    '@typescript-eslint/utils',
  ],
})
