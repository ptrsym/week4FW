const express = require('express');
const routes = require('./routes');
const path = require('path');
const app = express();
const http = require('http').Server(app);
const bodyParser = require('body-parser');

// //handles url post requests
// app.use(express.urlencoded({ extended: true}));

app.use (bodyParser.json());

app.use(express.static(path.join(__dirname, '../dist/week4tut/browser')));

// catchall to handle serverside loading
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/week4tut/browser/index.html'));
  });


//mount the routes file
app.use(routes);

let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Server listening on: "+ host +" port: " + port);
});

