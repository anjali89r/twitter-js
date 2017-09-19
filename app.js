const express = require( 'express' );
const app = express(); // creates an instance of an express application
const volleyball = require('volleyball');

const chalk = require('chalk');
app.use(volleyball);

// app.use(function (req, res, next) {
//   console.log('Request Type:', chalk.blue(req.method));
//   //console.log('Request URL:', req.url);
//   console.log('Request URL:', chalk.blue(req.originalUrl));
//   console.log('Request status code: ' + res.statusCode)
//   next();
// })
// app.use('/special/', function(req, res, next){
//   console.log("you have reached special place");
//   next();
// })
app.get('/', function(req, res){
  res.send('Welcome!');
})

app.get('/specia', function(req, res){
  res.send('Welcome to news!');
})














app.listen(3000, function(){
  console.log("listening to 3000");
})
