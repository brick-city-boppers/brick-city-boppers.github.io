// Load required modules
const http    = require("http");              // http server core module
const https   = require("https");     // https server core module
const fs = require("fs");
var express = require("express");           // web framework external module
let forceSsl = require('express-force-ssl');
var serveStatic = require('serve-static');  // serve static files
let socketIo = require("socket.io");        // web socket external module
let request = require('request');
let configs = require('./configs.js');
let env = require('node-env-file');
env(__dirname + '/.env');

const HTTP_PORT = 80;
const HTTPS_PORT = 443;
let rest = [];
let dir1, dir2;

let prod = parseInt(process.env.PROD);

if (prod) {
    console.log('Production Enabled');
} else {
    console.log("Development Enabled");
}

// Set process name
process.title = "node-easyrtc";

// Setup and configure Express http server. Expect a subfolder called "static" to be the web root.
var app = express();
//app.use(forceSsl);
app.use(serveStatic('static', {'index': __dirname + '/index.html'}));
app.use('/dist', express.static(__dirname + "/dist/", {dotfiles:'allow'}));
app.use(express.static(__dirname + "/dist/", {dotfiles:'allow'}));


let httpServer = http.createServer(app);

let options, socketServer, secureServer;

if (prod) { 
    options = {
        key:  fs.readFileSync(configs.https.key),
        cert: fs.readFileSync(configs.https.cert)
    }

    secureServer = https.createServer( options, app);
    socketServer = socketIo.listen(secureServer, {"log level":1});
} else {
    socketServer = socketIo.listen(httpServer, {"log level":1});
}



//listen on PORT
if (prod) {
    secureServer.listen(HTTPS_PORT, function () {
        console.log(`setup HTTPS Server`);
    });
}

httpServer.listen(HTTP_PORT, function() {
    console.log(`Setup HTTP Server`);
});
