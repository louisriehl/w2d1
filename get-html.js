const https = require('https');
var chunks = [];

function getHTML (options, callback) {

  https.get(options, response => {

    response.setEncoding('utf8');

    response.on('data', data => {
      chunks.push(data);
      // console.log("Chunks = " + chunks[0]);
    });

    response.on('end', () => {
      console.log('End of stream. Logging chunks.');
      callback(chunks);
    });

  });
}

var printHTML = function(html) {
  console.log("The html to print is: " + html);
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);