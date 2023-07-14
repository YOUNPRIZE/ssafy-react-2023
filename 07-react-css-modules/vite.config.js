import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { env } from 'node:process';

const isDevMode = env.NODE_ENV?.includes('development');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // 개발 소스맵 설정
    devSourcemap: isDevMode,
    // 모듈 설정
    // 참고: https://vitejs.dev/config/shared-options.html#css-modules
    modules: {
      // scopeBehaviour: 'local'
      generateScopedName: isDevMode
        ? '[local]_[hash:base64:2]'
        : '[hash:base64:6]',
    },
  },
});
