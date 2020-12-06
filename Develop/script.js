var timeBlock = $(".time-block");

//for timeBlock ( var i= 0; i< timeBlock; i++){
   


//get element by id for jQuery
//var dt = DateTime.local( month, day, year);
//$("#currentDay").text(dt);

//year.month.day.hour.minute.
$("#currentDay").text(luxon.DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }));

var hour = $(".hour");
var timeBlock = $(".time-block");
var saveBtn = $(".saveBtn");
var 

var agenda = [];

init()

function init(){
    // Get stored agenda from localStorage
  // Parsing the JSON string to an object
  var storedAgenda = JSON.parse(localStorage.getItem("agenda"));

  // If agenda were retrieved from localStorage, update the agenda array to it
  if (storedAgenda !== null) {
    agenda = storedAgenda;
  }

  // Render todos to the DOM
  renderAgenda();
}
