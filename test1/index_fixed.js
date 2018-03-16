'use strict';

//get a filename from user
var filename = process.argv[2],
    mockError = require('./helper.js').mockError,
    readFile = require('./helper.js').readFile;

// readFile throws due to an unknown error with filesystem
try {
  readFile(filename);
} catch (e) {
  console.log('Error reading ' + e + '. Error logged.');
}
// try/catch is very common pattern in OOP languages. If it is gonna be an error it will not break the whole app.

console.log('The rest of your program worked');
