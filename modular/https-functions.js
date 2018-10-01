var https = require('https');
var chunks = [];

module.exports = function getHTML (options, callback) {

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
};