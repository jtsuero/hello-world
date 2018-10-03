var http = require("http");
var server = http.createServer();

server.on("request", function (req, res) {
  //console.log("we are hitting this");
  res.write("hello world");
  res.write("guess who's back");
  res.end();
});

server.listen(8000);

