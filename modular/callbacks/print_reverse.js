var getHTML = require('../https-functions');

function reverse (html) {
  var reverse = html.toString().split('').reverse().join("");
  console.log(reverse);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

getHTML(requestOptions, reverse);