$(document).ready(function() {

  var date = new Date(),
      day = date.getDay(),
      hour = date.getHours(),
      minutes = date.getMinutes(),
      minFrom60 = 60 - minutes;

  var openMT = (8 < hour && hour < 18) && (0 < day && day < 5) ? true : false,
      openFS = (8 < hour && hour < 20) && (day === 5 || day === 6) ? true : false,
      closedMT = (hour > 17 || hour < 9) && (0 < day && day < 5) ? true : false,
      closedFS = (hour > 19 || hour < 9) && (day === 5 || day === 6) ? true : false;

  var openBox = $('ul:last-child li:first-child'),
      open = $('<b>Open</b><i class="fa fa-question-circle"></i>').css('color', '#4be74b'),
      closed = $('<b>Closed</b><i class="fa fa-question-circle"></i>').css('color', '#fb260e');

  if (openMT || openFS) {
    openBox.html(open);

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

  var openFor = (function() {
    var x = 0;
    if (openMT) {
      x = 17 - hour;
    } else if (openFS) {
      x = 19 - hour;
    }
    return x;
  })();

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
    } else {
      if(hour === 0){
        x = 33;
      }else if(hour > 0 && hour < 24){
        x = 33 - hour;
      }
    }
    return x;
  })();

});
