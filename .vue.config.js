const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname),
    configureWebpack: {
      devtool: 'source-map'
    }
  }