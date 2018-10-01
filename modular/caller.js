var getHTML = require("./https-functions.js");


var printHTML = function(html) {
  console.log("The html to print is: " + html);
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions, printHTML);