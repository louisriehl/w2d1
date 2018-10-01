var getHtml = require('../https-functions');

var upperCase = function(html) {
  var up = html.toString().toUpperCase();
  console.log(up);
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

getHtml(requestOptions, upperCase);