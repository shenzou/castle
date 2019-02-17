var http = require('http');
var url = require('url');
var fs = require('fs');
var dt = require('./module1');
var express = require('express');
var app = express();

app.use(express.static('static'));

http.createServer(function (req, res) {
  var path = url.parse(req.url).pathname;
  switch (path) {
    case '/index.html':
      fs.readFile(__dirname + path, function (err, data) {
        if (err) {
          response.writeHead(404);
          response.write(error);
          response.end();
        }
        else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(data);
          res.end();
        }
      });
      break;
    case '/static/crs.min.js':
      fs.readFile(__dirname + path, function (err, data) {
        if (err) {
          response.writeHead(404);
          response.write(error);
          response.end();
        }
        else {
          res.writeHead(200, { 'Content-Type': 'text/javascript' });
          res.write(data);
          res.end();
        }
      });
      break;
    case '/static/display.js':
      fs.readFile(__dirname + path, function (err, data) {
        if (err) {
          response.writeHead(404);
          response.write(error);
          response.end();
        }
        else {
          res.writeHead(200, { 'Content-Type': 'text/javascript' });
          res.write(data);
          res.end();
        }
      });
      break;
    case '/static/style.css':
      fs.readFile(__dirname + path, function (err, data) {
        if (err) {
          response.writeHead(404);
          response.write(error);
          response.end();
        }
        else {
          res.writeHead(200, { 'Content-Type': 'text/css' });
          res.write(data);
          res.end();
        }
      });
      break;
    case '/static/externalFiles/hostels.json':
      fs.readFile(__dirname + path, function (err, data) {
        if (err) {
          response.writeHead(404);
          response.write(error);
          response.end();
        }
        else {
          res.writeHead(200, { 'Content-Type': 'text/json' });
          res.write(data);
          res.end();
        }
      });
      break;
    case '/static/images/bar.jpg':
      fs.readFile(__dirname + path, function (err, data) {
        if (err) {
          response.writeHead(404);
          response.write(error);
          response.end();
        }
        else {
          res.writeHead(200, { 'Content-Type': 'image/jpeg' });
          res.write(data);
          res.end();
        }
      });
      break;
    default:
      fs.readFile(__dirname + "/dontexist.html", function (err, data) {
        if (err) {
          response.writeHead(404);
          response.write(err);
          response.end();
        }
        else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write(data);
          res.end();
        }
      });
      break;
  }

}).listen(8080);


