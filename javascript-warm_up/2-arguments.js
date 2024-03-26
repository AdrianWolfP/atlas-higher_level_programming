#!/usr/bin/node
const argv = require('porcess').argv;

if (argv.length < 3) {
    console.log('No argument');
} else if (argv.length === 3) {
    console.log('Argument found');
} else {
    console.log('Argument found');
}