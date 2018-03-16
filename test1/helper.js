'use strict';

// Throw error
var mockError = () => {
  throw 'Error: Filesystem appears corrupted, or file does not exist'
}

// Mock error due to filesystem
var readFile = (filename) => {
  mockError();
}

module.exports.mockError = mockError;
module.exports.readFile = readFile;
