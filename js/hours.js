$(document).ready(function(){

  var date = new Date();
  var day = date.getDay();
  var hour = date.getHours();

  var openMT = hour >= 9 && hour < 19 && day > 0 && day < 5 ? true : false;
  var openFS = hour >= 9 && hour < 21 && day > 3 && day < 6  ? true : false;

  if(openMT){
    $('#open-close').html('<b>Open</b>').css('color', '#4be74b');
  }else if(openFS){
    $('#open-close').html('<b>Open</b>').css('color', '#4be74b');
  }else{
    $('#open-close').html('<b>Closed</b>').css('color', '#fb260e');
  }

});
