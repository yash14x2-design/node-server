const http2 = require("node:http2");
const fs = require("fs");


const zlib = require('zlib');


const server = http2.createSecureServer({
  key: fs.readFileSync("./private.pem"),
  cert: fs.readFileSync("./cert.pem"),
});

server.on("error", function (err) {
  console.log(err);
});

server.on("stream", function (stream, headers) {
  stream.respond({
    "content-type": "text/html",
    'Content-Encoding': 'gzip',
    status: 200,
  });

  if (headers[":path"] == "/student") {
    
    
      fs.readFile("index.html",function(error, data){
      if (error) {
        resp.writeHead(404);
        resp.write('Contents you are looking for-not found');
        resp.end();
      }  else {

        
    zlib.gzip(data.toString(), function (_, result) {  // The callback will give you the 
      stream.end(result);                     // result, so just send it.
    });
        
        
      }
    });





    // zlib.gzip(text, function (_, result) {  // The callback will give you the 
    //   stream.end(result);                     // result, so just send it.
    // });
    
    
    
    
  } else {
    stream.end(
      '<h1>Hello world parammm</h1>'
    );
  }
});

server.listen(8000, function () {
    console.log("https://localhost:8000");
  });

