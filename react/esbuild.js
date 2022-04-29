const esbuild = require('esbuild');
const cssModulesPlugin = require('esbuild-css-modules-plugin');
const { notify } = require('node-notifier');
let watch = !!process.argv.slice(2)[0];

esbuild.build({
  entryPoints: ['src/index.jsx'],
  bundle: true,
  outdir: './dist',
  loader: { '.js': 'jsx' },
  sourcemap: true,
  plugins: [cssModulesPlugin()],
  watch: watch ? {
    onRebuild(error, result) {
      if (error) {
        notify({
          title: 'Esbuild error',
          message: error.message,
          sound: 'Pop',
          timeout: 3
        });
        console.error('watch build failed:', error);
      } else {
        console.log('watch build succeeded');
      }
    }
  } : false,
}).catch(() => process.exit(1))