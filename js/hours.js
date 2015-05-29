$(document).ready(function () {
  //Date variables
  var date = new Date(),
			day = date.getDay(),
 			hour = date.getHours();

  //Logic variables
  var openMT = hour > 8 && hour < 19 && day > 0 && day < 5 ? true : false,
  		openFS = hour > 8 && hour < 21 && day > 3 && day < 6  ? true : false,
	 		closedMT = hour > 18 && day > 0 && day < 5 ? true : false,
	 		closedFS = hour > 20 && day > 3 && day < 6 ? true : false;

  //Tags
  var openBox = $('ul:last-child li:first-child'),
			open = $('<b>Open</b>').css('color', '#4be74b'),
			closed = $('<b>Closed</b>').css('color', '#fb260e');

  //Checks the day/hour; If open, displays "Open", else displays "Closed"
  if (openMT || openFS) {
    openBox.html(open);
		//Inserts a message with either openFor or closedFor
  	//into the title attr of a tooltip when openBox is hovered
    $(openBox).on('mouseover', function(){
			if (openFor === 1) {
				$(this).prop('title', 'We\'re open for another hour');
			} else {
      	$(this).prop('title', 'We\'re open for another ' + openFor + ' hours');
			}
    })
  } else {
    openBox.html(closed);
    $(openBox).on('mouseover', function(){
			if (closedFor === 1) {
      	$(this).prop('title', 'We\'ll be closed for another hour');
			} else {
				$(this).prop('title', 'We\'ll be closed for another' + closedFor + ' hour(s)');
			}
    })
  }

	//Returns hours left till close
	var openFor = (function () {
		var x = 0;
		if (openMT) {
			x = 19 - hour;
		} else if (openFS) {
			x = 21 - hour;
		}
		return x;
	})();

	//Return hours left till open
	var closedFor = (function () {
		var x = 0;
		if (closedMT || closedFS) {
			if (hour === 0) {
				x = 9;
			} else {
				x = 33 - hour;
			}
		} else { //if Sunday
			if (hour === 0) {
				x = 33;
			} else {
				x = 57 - hour;
			}
		}
	})();

});
