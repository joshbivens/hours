$(document).ready(function () {
  //Date variables
  var date = new Date();
  var day = date.getDay();
  var hour = date.getHours();

  //Logic variables
  var openMT = hour > 8 && hour < 19 && day > 0 && day < 5 ? true : false;
  var openFS = hour > 8 && hour < 21 && day > 3 && day < 6  ? true : false;
	var closedMT = hour > 18 && day > 0 && day < 5 ? true : false;
	var closedFS = hour > 20 && day > 3 && day < 6 ? true : false;

  //Tags
  var openBox = $('ul:last-child li:first-child');
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

	//Returns hours left till close
	var openFor = function () {
		var x = 0;
		if (openMT) {
			x = 19 - hour;
		} else if (openFS) {
			x = 21 - hour;
		}
		return x;
	};

	//Return hours left till open
	var closedFor = function () {
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
	}

});
