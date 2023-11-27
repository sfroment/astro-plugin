import * as esbuild from 'esbuild'

await esbuild.build({
  minify: false,
  format: 'esm',
  platform: 'node',
  target: 'node18',
  sourcemap: false,
  sourcesContent: false,
  bundle: false,
  external: undefined,
  entryPoints: [ './src/index.ts' ],
  outdir: 'dist',
  outExtension: {}
})
