#!/usr/bin/node
const argv = require('process').argv;

if (argv.length < 3) {
  console.log('No argument');
} else if (argv.length === 3) {
  console.log('Arguments found');
} else {
  console.log('Arguments found');
}
