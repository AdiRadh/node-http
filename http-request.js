var http = require('http');

var options = {
  host: 'localhost:8080',
  path: '/',
  port: '8080',
  //customer headers:
  headers: {'custom': 'Custom Header Demo works'}
};

callback = function(response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    console.log(str);
  });
}

var req = http.request(options, callback);
req.end();