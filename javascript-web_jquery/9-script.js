$(document).ready(function (){
  const url = 'http://hellosalut.stefanbohacek.dev/?lang=fr';
  $.get(url, function (data) {
      const frenchHello = data.hello;
      $('DIV#hhello').text(frenchHello);
  })
});