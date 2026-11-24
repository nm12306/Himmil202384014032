const { defineConfig } = require('@vue/cli-service')
const apiProxyTarget = process.env.VUE_APP_API_PROXY_TARGET || 'http://localhost:8088'

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: apiProxyTarget,
        changeOrigin: true
      },
      '/uploads': {
        target: apiProxyTarget,
        changeOrigin: true
      }
    }
  }
})
