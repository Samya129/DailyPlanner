
$("#currentDay").text(luxon.DateTime.local().toLocaleString({
    weekday: "long",
    month: "long",
    day: "2-digit",
})
);   


//time block for present, past and future. 
let currentTime = luxon.DateTime.local().toLocaleString({

hour: "2-digit",
});

console.log(currentTime);
        
function PPF(){


    
}
   



//get element by id for jQuery
//var dt = DateTime.local( month, day, year);
//$("#currentDay").text(dt);
var timeBlock = $(".time-block");
var hour = $(".hour");
var timeBlock = $(".time-block");
var saveBtn = $(".saveBtn");


//var agenda = [];

//init()

function init(){
    // Get stored agenda from localStorage
  // Parsing the JSON string to an object
  var storedAgenda = JSON.parse(localStorage.getItem("agenda"));

  // If agenda were retrieved from localStorage, update the agenda array to it
  if (storedAgenda !== null) {
    agenda = storedAgenda;
  }

  // Render agenda to the DOM
  //renderAgenda();
}
//for timeBlock ( var i= 0; i< timeBlock; i++){
    //year.month.day.hour.minute.