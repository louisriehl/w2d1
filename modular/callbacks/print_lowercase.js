var getHTML = require("../https-functions");

function lowerCase (html) {
  var low = html.toString().toLowerCase();
  console.log(low);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getHTML(requestOptions, lowerCase);