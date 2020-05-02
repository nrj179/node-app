const fs = require('fs');

// const data = new Uint8Array(Buffer.from('Hello Node.js'));
// fs.writeFile('message.txt', data, (err) => {
//   if (err) throw err;
//   console.log('The file has been saved!');
// });

fs.writeFile('greeting.txt', 'Hello world:', err => {
  if (err) {
    console.log("error occured")
  }
});