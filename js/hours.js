$(document).ready(function() {
  var date = new Date();
  var day = date.getDay();
  var hour = date.getHours();

	if(day > 0 && day < 5){
    if(hour >= 9 && hour < 19){
      $('#open-close').html('<p>Open</p>').css('color', '#4be74b');
    }
  }else if(day > 5 && day < 7){
    if(hour >= 9 && hour < 21){
      $('#open-close').html('<p>Open</p>').css('color', '#4be74b');
    }
  }else{
    $('#open-close').html('<p>Closed</p>').css('color', '#fb260e');
  }

});
