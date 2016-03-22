var app = require('./server');
var port = process.env.PORT || 3000;
var stdout = process.stdout;

app.listen(port, function(err) {
  if (err) {
    console.error(err);
  }

  stdout.write('Listening on port ' + port);
});
