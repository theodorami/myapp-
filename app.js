var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hi Armin und Tino');
});



app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!');
});