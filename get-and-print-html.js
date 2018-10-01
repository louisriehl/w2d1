var https = require('https');
var chunks = [];

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, response => {

    response.setEncoding('utf8');

    // var clock = 0;

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

getAndPrintHTML();