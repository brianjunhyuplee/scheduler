$(document).ready(function(){
    var date = moment().format('dddd[,] MMMM Do');
var day = $("#currentDay");
day.text(date);
time = moment().hour();
//alert (time==15);
var container = $(".container");
// var btn9 = $("#btn9");
// var btn10 = $("#btn10");
// var btn11 = $("#btn11");
// var btn12 = $("#btn12");
// var btn13 = $("#btn13");
// var btn14 = $("#btn14");
// var btn15 = $("#btn15");
// var btn16 = $("#btn16");
// var btn17 = $("#btn17");
var allContents = [$("#contents9"),$("#contents10"),$("#contents11"),$("#contents12"),$("#contents13"),$("#contents14"),$("#contents15"),$("#contents16"),$("#contents17")];
alert(allContents.length);
for (var i = 0; i<allContents.length ; i++){
    if (time >(i+9)){
        allContents[i].css("background-color","gray");
    }
    else if (time < (i+9)){
        allContents[i].css("background-color","green");
    }
    else{
        allContents[i].css("background-color","red");
       
    }
}

$("#btn9").on("click", function() {
    alert("I've been clicked!");
  });

  $("#btn10").on("click", function() {
    alert("I've been clicked!");
  });

  $("#btn11").on("click", function() {
    alert("I've been clicked!");
  });

  $("#btn12").on("click", function() {
    alert("I've been clicked!");
  });

  $("#btn13").on("click", function() {
    alert("I've been clicked!");
  });

  $("#btn14").on("click", function() {
    alert("I've been clicked!");
  });

  $("#btn15").on("click", function() {
    alert("I've been clicked!");
  });

  $("#btn16").on("click", function() {
    alert("I've been clicked!");
  });

  $("#btn17").on("click", function() {
    alert("I've been clicked!");
  });


});
