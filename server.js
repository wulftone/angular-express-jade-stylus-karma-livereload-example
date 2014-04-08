(function() {
  var app, express, port;

  express = require('express');

  app = express();

  app.use(express["static"](__dirname + '/app'));

  port = 4000;

  app.listen(port);

  console.log('Server started at http://localhost:' + port);

}).call(this);
