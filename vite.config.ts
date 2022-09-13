import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'

function _resolve(dir: string) {
  return path.resolve(__dirname, dir)
}

export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      localEnabled: true,
      supportTs: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: _resolve('src'),
      },
    ],
  },
})
