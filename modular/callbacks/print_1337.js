var getHTML = require('../https-functions');

function to1337 (html) {
  var leet = html.toString();
  leet = leet.replace(/a/g, '4')
  .replace(/e/g, '3')
  .replace(/l/g, '1')
  .replace(/o/g, '0')
  .replace(/s/g, '5')
  .replace(/t/g, '7')
  .replace(/ck/g, 'x')
  .replace(/er/g, '0r')
  .replace(/you/g, 'j00');

  console.log(leet);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

getHTML(requestOptions, to1337);