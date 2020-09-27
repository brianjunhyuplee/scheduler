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

// colors the contents by time
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
//sets the context to the local storage
for (var i = 0; i<allContents.length ; i++){
    localStorage;
}


$("#btn9").on("click", function() {
    var str = $("#input9").val();
    localStorage.setItem('contents9',$('#contents9'));
    
    //console.log(localStorage);
  });

  $("#btn10").on("click", function() {
    var str = $("#input10").val();
    localStorage.setItem('contents10',$('#contents10'));
    //console.log(localStorage);
  });

  $("#btn11").on("click", function() {
    var str = $("#input11").val();
    localStorage.setItem('contents11',str);
    ////console.log(localStorage);
  });

  $("#btn12").on("click", function() {
    var str = $("#input12").val();
    localStorage.setItem('contents12',str);
    ////console.log(localStorage);
  });

  $("#btn13").on("click", function() {
    var str = $("#input13").val();
    alocalStorage.setItem('contents13',str);
    //console.log(localStorage);
  });

  $("#btn14").on("click", function() {
    var str = $("#input14").val();
    alocalStorage.setItem('contents14',str);
    //console.log(localStorage);
  });

  $("#btn15").on("click", function() {
    var str = $("#input15").val();
    alocalStorage.setItem('contents15',str);
    //console.log(localStorage);
  });

  $("#btn16").on("click", function() {
    var str = $("#input16").val();
    alocalStorage.setItem('contents16',str);
    //console.log(localStorage);
  });

  $("#btn17").on("click", function() {
    var str = $("#input17").val();
    alocalStorage.setItem('contents17',str);
    //console.log(localStorage);
  });
console.log(localStorage);

});
