const esbuild = require('esbuild');
const cssModulesPlugin = require('esbuild-css-modules-plugin');

esbuild.build({
  entryPoints: ['src/index.jsx'],
  bundle: true,
  outdir: './dist',
  loader: { '.js': 'jsx' },
  plugins: [cssModulesPlugin()],
}).catch(() => process.exit(1))