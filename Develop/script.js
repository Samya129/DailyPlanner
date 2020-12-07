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
