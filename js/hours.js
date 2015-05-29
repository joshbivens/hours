$(document).ready(function () {
  //Date variables
  var date = new Date();
  var day = date.getDay();
  var hour = date.getHours();

  //Logic variables
  var openMT = hour >= 9 && hour < 19 && day > 0 && day < 5 ? true : false;
  var openFS = hour >= 9 && hour < 21 && day > 3 && day < 6  ? true : false;

  //Tags
  var openBox = $('#openbox');
  var open = $('<b>Open</b>').css('color', '#4be74b');
  var closed = $('<b>Closed</b>').css('color', '#fb260e');

  //Checks the day/hour; If open, displays "Open", else displays "Closed"
  if (openMT) {
    openBox.html(open);
  } else if (openFS) {
    openBox.html(open);
  } else {
    openBox.html(closed);
  }

});
