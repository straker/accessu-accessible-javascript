const vuePlugin = require("esbuild-plugin-vue3");

module.exports = function (config) {
  config.set({
    singleRun: true,
    frameworks: ['mocha', 'chai'],
    browsers: ['ChromeHeadless'],
    files: [
      { pattern: 'src/assets/**/*.*', included: false, served: true },
      { pattern: 'src/**/*.spec.js', type: 'module' }
    ],
    preprocessors: {
      "**/*.spec.js": ["esbuild"],
    },
    proxies: {
      '/src': '/base/src',
    },
    reporters: ['spec'],
    esbuild: {
      plugins: [vuePlugin()]
    },
    client: {
      mocha: {
        timeout: 4000,
        reporter: 'html'
      }
    }
  });
};