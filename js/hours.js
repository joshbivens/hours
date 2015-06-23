$(document).ready(function() {
  //Date variables
  var date = new Date(),
      day = date.getDay(),
      hour = date.getHours(),
      minutes = date.getMinutes(),
      minFrom60 = 60 - minutes;

  //Logic variables
  var openMT = (8 < hour && hour < 18) && (0 < day && day < 5) ? true : false,
      openFS = (8 < hour && hour < 20) && (day === 5 || day === 6) ? true : false,
      closedMT = (hour > 17 || hour < 9) && (0 < day && day < 5) ? true : false,
      closedFS = (hour > 19 || hour < 9) && (day === 5 || day === 6) ? true : false;
  //Sun - 0
  //Mon - 1
  //Tue - 2
  //Wed - 3
  //Thu - 4
  //Fri - 5
  //Sat - 6

  //Tags
  var openBox = $('ul:last-child li:first-child'),
      open = $('<b><u>Open</u></b>').css('color', '#4be74b'),
      closed = $('<b><u>Closed</u></b>').css('color', '#fb260e');

  //Checks the day/hour; If open, displays "Open", else displays "Closed"
  if (openMT || openFS) {
    openBox.html(open);
    //Inserts a message with either openFor or closedFor
    //into the title attr of a tooltip when openBox is hovered
    $(openBox).on('mouseover', function() {
      if (openFor === 0) {
        $(this).prop('title', 'We\'re open for ' + minFrom60 + ' more minutes');
      } else if(openFor === 1) {
        $(this).prop('title', 'We\'re open for another 1 hour and ' + minFrom60 + ' minutes');
      } else {
        $(this).prop('title', 'We\'re open for another ' + openFor + ' hours and ' + minFrom60 + ' minutes');
      }
    })
   } else {
    openBox.html(closed);
    $(openBox).on('mouseover', function() {
      if (closedFor === 0) {
        $(this).prop('title', 'We\'ll be closed for another ' + minFrom60 + ' minutes');
      } else if (closedFor === 1) {
        $(this).prop('title', 'We\'ll be closed for another 1 hour and ' + minFrom60 + ' minutes');
      } else {
        $(this).prop('title', 'We\'ll be closed for another ' + closedFor + ' hours and ' + minFrom60 + ' minutes');
      }
    })
  }
  //Returns hours left till close
  var openFor = (function() {
    var x = 0;
    if (openMT) {
      x = 17 - hour;
    } else if (openFS) {
      x = 19 - hour;
    }
    return x;
  })();

  //Return hours left till open
  var closedFor = (function() {
    var x = 0;
    if (closedMT || closedFS) {
      if(hour === 0){
        x = 9;
      }else if(hour > 0 && hour < 17){
        x = 8 - hour;
      }else if(hour > 17){
        x = 33 - hour;
      }
    } else { //if Sunday
      if(hour === 0){
        x = 33;
      }else if(hour > 0 && hour < 24){
        x = 33 - hour;
      }
    }
    return x;
  })();

});
