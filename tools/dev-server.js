const webpackDevServer = require('webpack-dev-server')
const webpack = require('webpack')

const config = require('../webpack.config.js')
const options = {
  contentBase: './dist',
  host: true,
  host: 'localhost',
}

webpackDevServer.addDevServerEntrypoints(config, options)
const complier = webpack(config)
const server = new webpackDevServer(complier, options)

server.listen(5000, 'localhost', () => {
  console.log('dev server listening on port 5000');
})
