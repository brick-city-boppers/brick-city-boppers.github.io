const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, '/dist'),
    configureWebpack: {
      devtool: 'source-map',
      externals: {
        Email: 'Email',
        Moment: 'Moment'
      }
    }
  }