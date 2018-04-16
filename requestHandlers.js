'use strict';

var exec = require("child_process").exec;
var querystring = require("querystring");
  fs = require("fs");
  formidable = require("formidable");

var formidable = require('formidable'),
  http = require('http'),
  sys = require('sys');

  http.createServer(function(req,res) {
    if (req.url === '/upload' && req.method.toLowerCase() == 'post') {
      // parse a file upload
      var form = new formidable.IncomingForm();
      form.parse(req, function(error, fields, files) {
        console.log("about to parse");
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('received upload:\n\n');
        res.end(sys.inspect({fields: fields, files: files}));
      });
      }

    // show a file upload form
    res.writeHead(200, { 'content-type': 'text/html' });
    res.end(
      '<form action="/upload" enctype="multipart/form-data" ' +
      'method="post">' +
      '<input type="text" name="title"><br>' +
      '<input type="file" name="upload" multiple="multiple"><br>' +
      '<input type="submit" value="Upload">' +
      '</form>'
    );
  }).listen(8888);

function start(response, postData) {
  console.log("Request handler 'start' was called.");

  var body = '<html>' +
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; ' +
    'charset=UTF-8" />' +
    '</head>' +
    '<body>' +
    '<form action="/upload" method="post">' +
    '<textarea name="text" rows="20" cols="60"></textarea>' +
    '<input type="submit" value="Submit text" />'+
    '</form>'+
    '</body>'+
    '</html>';

  exec("find /",
  { timeout: 10000, maxBuffer: 20000*1024},
  function (error, stdout,stderr) {
    
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("You've sent: " + postData);
    response.end();

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(stdout);
    response.end();
  });
}
  return content;


  function sleep(milliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + milliSeconds);
  }

  sleep(10000);
  return "Hello Start";


function upload(response, request) {
  console.log("Request handler 'upload' was called.");
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("You've sent: " + querystring.parse(postData).text);
  response.end();
}

function show(response) {
  console.log("Request handler 'show' was called.");
  response.writeHead(200, {"Content-Type": "image/png"});
  fs.createReadStream("/tmp/test.png").pipe(response);
}
fs.rename(files.upload.path, "/tmp/text.png", function(error) {
  if (error) {
    fs.unlink("/tmp/text.png");
    rs.rename(files.upload.path, "/tmp/text.png");
  }
});


exports.start = start;
exports.upload = upload;
exports.show = show;