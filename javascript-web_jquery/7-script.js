$(document).ready(function () {
    const url = 'http://swapi-api.hbtn.io/api/people/5/?format=json';
    $.get(url, function (name) {
      $('#character').text(name.name);
  });
});