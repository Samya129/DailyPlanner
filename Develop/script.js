var timeBlock = $(".time-block");

//for timeBlock ( var i= 0; i< timeBlock; i++){
   


//get element by id for jQuery
//var dt = DateTime.local( month, day, year);
//$("#currentDay").text(dt);

//year.month.day.hour.minute.
$("#currentDay").text(luxon.DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }));
