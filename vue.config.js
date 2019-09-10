const path = require('path')
module.exports = {
  devServer: {
    proxy: "http://r7ggdy.natappfree.cc/yutang/public/index.php/api/"
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, "./src/scss/variables.scss"),
        path.resolve(__dirname, "./src/scss/mixin.scss")
      ]
    }
  },
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  },
}