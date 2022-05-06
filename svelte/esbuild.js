const esbuild = require('esbuild');
const sveltePlugin = require('esbuild-svelte');
const { notify } = require('node-notifier');
let watch = !!process.argv.slice(2)[0];

esbuild.build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outdir: './dist',
  sourcemap: true,
  plugins: [sveltePlugin()],
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