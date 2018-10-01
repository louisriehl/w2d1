const https = require('https');
var chunks = [];

function getAndPrintHTML (options) {

  https.get(options, response => {

    response.setEncoding('utf8');

    // add a new key based off a number and add the data from the chunk to it
    response.on('data', data => {
      chunks.push(data);
    });

    response.on('end', () => {
      console.log("End of stream, logging chunks.\n" + chunks);
    });

    // console.log(chunks);


  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);