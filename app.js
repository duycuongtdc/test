var express = require('express');
var app = express();

app.set('views', `${__dirname}/./views`);
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', {})
});
app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});