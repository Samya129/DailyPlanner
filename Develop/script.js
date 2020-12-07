//Date 
$("#currentDay").text(luxon.DateTime.local().toLocaleString({
    weekday: "long",
    month: "long",
    day: "2-digit",
})
);   
//console.log(currentTime);
//time block for present, past and future.        
function timePpF(){

}; 
//For each time block for each color
$(".time-block").each(function(){
  let presentHour = parseInt($(this).attr("id"));

  //console.log(presentHour) //referring to each time block hour

  //console.log(this)
  if(formattedHour > presentHour){
    $(this).addClass("past");
    //console.log("past? You there?")
  } else if (presentHour === formattedHour){
    $(this).addClass("present");
  } else { (presentHour < formattedHour)
    $(this).addClass("future");
}
});

var saveBtn = $(".saveBtn")
saveBtn.on("click", function() {
  //alert("This works?")
  
  let timeSchedule = $(this).siblings(".hour").text();
  let text = $(this).siblings("#Text").val();
  console.log(timeSchedule);
  console.log(text);
  
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