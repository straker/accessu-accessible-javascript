import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const testEnv = process.env.TEST_ENV;

const config = {
  plugins: [
    svelte()
  ],
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
  }
}

if (testEnv === 'integration') {
  config.test = {
    ...config.test,
    include: ['__tests__/**']
  };
}

export default defineConfig(config)