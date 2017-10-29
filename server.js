var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var HtmlWebpackPlugin = require('html-webpack-plugin');

var express = require('express')

var app = new express()
var port = 8081
const env = process.env.NODE_ENV || ''

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Request-Headers", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,X-HTTP-Method-Override, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

if(env.trim() == 'production') {
    var config = require('./webpack.production.config')
    var compression = require('compression')
    // compress responses
    app.use(compression())
    app.use("/static", express.static('static',
      {
         maxAge: 24*60*60*60*60
      }
    ))
    app.get("*", function(req, res) {
      res.sendFile(__dirname + '/static/index.html') 
    })

} else {
    var config = require('./webpack.config')
    var compiler = webpack(config)
    app.use(
        webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath })  
    )
    app.use(webpackHotMiddleware(compiler))
    app.get("*", function(req, res) {
      res.sendFile(__dirname + '/index.html') 
    })
}

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
