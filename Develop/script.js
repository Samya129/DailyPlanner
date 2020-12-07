//Date 
$("#currentDay").text(luxon.DateTime.local().toLocaleString({
    weekday: "long",
    month: "long",
    day: "2-digit",
})
);   
//console.log(currentTime);
//Need a function that can go through all the times in the same smooth way. Not just am but pm as well.       
function timeElement(){
  let correctHour = luxon.DateTime.local().toLocaleString({hour: "2-digit"});
  //
  let fixedHour = parseInt(correctHour[0] + correctHour[1]);

  if(correctHour.indexOf("PM")){
     //console.log(correctHour)
    //add 12 hours so that we will get the right index of time.
   
    fixedHour += 12;
   //console.log(fixedHour);
  }

}; 
//For each time block we need to add color depending on time of day with if/else function for determination.
$(".time-block").each(function(){
  let presentHour = parseInt($(this).attr("id"));
  //console.log(presentHour) 

  //console.log(this)
  if(fixedHour > presentHour){
    $(this).addClass("past");
    //console.log("past? You there?")
  } else if (presentHour === fixedHour){
    $(this).addClass("present");
    //console.log("present? Are you working?")
  } else { (presentHour < fixedHour)
    $(this).addClass("future");
}
});

var saveBtn = $(".saveBtn")
saveBtn.on("click", function() {
  //alert("This works?")
  
  let timeSchedule = $(this).siblings(".hour").text();
  let text = $(this).siblings("#Text").val();
  //console.log(timeSchedule);
  //console.log(text);
  
  localStorage.setItem(timeSchedule, text);
  });

function storedAgenda (){
  $(".hour").each(function(){
    let presentHour = $(this).text();
    let storedAgenda = localStorage.getItem(presentHour);

    if (storedAgenda !== null) {
      $(this).siblings("textarea").val(storedAgenda);
     }
  })
  
}