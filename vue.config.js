const path = require('path');
module.exports = {
  outputDir: 'docs',
  configureWebpack: {
    devServer: {
      // open: true,
      // 代理
      // proxy: {
      //   '/netease-api': {
      //     target: 'http://localhost:3000',
      //     pathRewrite: {
      //       '/netease-api': ''
      //     },
      //     changeOrigin: true,
      //     secure: false
      //   }
      // }
    },
    resolve: {
      // 别名
      alias: {
        '@': path.resolve(__dirname, './src'),
        assets: path.resolve(__dirname, './src/assets'),
        components: path.resolve(__dirname, './src/components'),
        style: path.resolve(__dirname, './src/style'),
        utils: path.resolve(__dirname, './src/utils'),
        views: path.resolve(__dirname, './src/views'),
        network: path.resolve(__dirname, './src/network'),
      }
    }
  }
  
};