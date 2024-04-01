#!/usr/bin/node
const request = require('request');
const movieId = process.argv[2];
const apiUrl = `https://swapi-api.hbtn.io/api/films/${movieId}/`;

request.get(apiUrl, (err, response, body) => {
 if (err) {
    console.error(err);
 }  else if (response.statusCode === 200) {
    const movieData = JSON.parse(body);
    const movieTitle = movieData.title;
    console.log(movieTitle);
 } else {
    console.error(`Error: Unexpected status code: ${response.statusCode}`);
 }
});