var express = require('express');
var path = require('path');
var app = express();
app.set('view engine', 'pug');

var index = require('./routes/index')
const port = 3000;

app.use('/agendas', index)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
