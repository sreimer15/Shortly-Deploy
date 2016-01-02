var app = require('./server.js');

var port = process.env.PORT || 4568;
 // process.env.PORT = 4568
// app.set('port', (process.env.PORT || 4568));

app.listen(port, function(){
  console.log('Server now listening on port ' + port);
});



