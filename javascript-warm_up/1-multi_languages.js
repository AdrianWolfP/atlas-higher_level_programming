#!/usr/bin/node
const argv = require('process').argv;

if (argv.length < 3) {
  console.log('C is fun');
  console.log('Python is cool');
  console.log('JavaScript is amazing');
} else if (argv.length === 3) {
  console.log('Argument found');
} else {
  console.log('Argument found');
}
