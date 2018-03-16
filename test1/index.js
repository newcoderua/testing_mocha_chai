'use strict';

//get a filename from user
var filename = process.argv[2],
    mockError = require('./helper.js').mockError,
    readFile = require('./helper.js').readFile;

// readFile throws due to an unknown error with filesystem
readFile(filename);

console.log('The rest of your program did not work');
