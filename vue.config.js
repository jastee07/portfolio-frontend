
var host = process.env.APP_URL ? process.env.APP_URL : 'http://localhost:8080'

module.exports = {
    devServer: {
      host: host
    }
  }