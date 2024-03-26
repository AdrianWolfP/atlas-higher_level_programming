#!/usr/bin/node
let counter = 0;
const ARGV = process.argv;
const num = parseInt(ARGV[2]);

if (isNaN(num)) {
    console.log('missing number of occurrences'); skipping
} else {
    while (counter < num) {
        console.log('C is fun');
        counter++;
    }
}