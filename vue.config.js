const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/travel_cut_vue/' : '/',
  configureWebpack: {
    performance: {
      hints: 'error', 
      maxAssetSize: 40000000,
      maxEntrypointSize: 50000000
    }
  }
})
