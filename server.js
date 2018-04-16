import { read } from "fs";

'use strict';

var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
     var pathname = url.parse(request.url).pathname;
     console.log("Request for " + pathname + " received.");
     route(handle, pathname, response, request);

     request.setEncoding("utf8");

     request.addListener("data", function(postDataChunk) {
       postData += postDataChunk;
       console.log("Received POST data chunk '"+ postDataChunk + "'.");
     });

     request.addListener("end", function() {
      route(handle, pathname, response, postData);
     });

    }

     response.writeHead(200, { "Content-Type": "text/plain" });
     var content = route(handle, pathname)
     response.write("Hello World");
     response.end(); 
  }
  
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
exports.upload = upload;

function start() {
  console.log("Request handler 'start' was called.");
}

function upload() {
  console.log("Request handler 'upload' was called.");
}