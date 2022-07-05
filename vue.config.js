const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
   devServer: {
    proxy: {
      '/V1': {
          target: 'https://www.expat.com',
          changeOrigin: true,
          pathRewrite: {
              '^/V1': ''
          }
      }
    }
  }
})
