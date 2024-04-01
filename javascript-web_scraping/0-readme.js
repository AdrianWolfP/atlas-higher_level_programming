#!/usr/bin/node
const fs = require('fs');
const ARGV = process.argv;

fs.readFile(ARGV[2], 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  }
  console.log(data);
});
