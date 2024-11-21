import { reactRouter } from '@react-router/dev/vite';
import { cloudflareDevProxy } from '@react-router/dev/vite/cloudflare';
import { getLoadContext } from './load-context';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    cloudflareDevProxy({ getLoadContext }),
    reactRouter(),
    tsconfigPaths(),
  ],
  ssr: { resolve: { conditions: ['workerd', 'worker', 'browser'] } },
  resolve: { mainFields: ['browser', 'module', 'main'] },
});
