var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, response => {

    //sets the encoding of the incoming stream
    response.setEncoding("utf8");

    //invoke this when receiving a data chunk
    response.on('data', data => {
      console.log(`Chunk received: ${data}\n`);
    });

    response.on('end', () => {
      console.log('End of stream');
    });


  });

}

getAndPrintHTMLChunks();