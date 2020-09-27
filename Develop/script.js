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
console.log(JSON.parse(localStorage.getItem('contents9'))===!null);
console.log(localStorage.getItem('contents9'));
if(localStorage.getItem('contents9')!==null){
    $("#input9").text(JSON.parse(localStorage.getItem('contents9')));
}
if(localStorage.getItem('contents10')!==null){
    $("#input10").text(JSON.parse(localStorage.getItem('contents10')));
}
if(localStorage.getItem('contents11')!==null){
    $("#input11").text(JSON.parse(localStorage.getItem('contents11')));
}
if(localStorage.getItem('contents12')!==null){
    $("#input12").text(JSON.parse(localStorage.getItem('contents12')));
}
if(localStorage.getItem('contents13')!==null){
    $("#input13").text(JSON.parse(localStorage.getItem('contents13')));
}
if(localStorage.getItem('contents14')!==null){
    $("#input14").text(JSON.parse(localStorage.getItem('contents14')));
}
if(localStorage.getItem('contents15')!==null){
    $("#input15").text(JSON.parse(localStorage.getItem('contents15')));
}
if(localStorage.getItem('contents16')!==null){
    $("#input16").text(JSON.parse(localStorage.getItem('contents16')));
}
if(localStorage.getItem('contents17')!==null){
    $("#input17").text(JSON.parse(localStorage.getItem('contents17')));
}




$("#btn9").on("click", function() {
    var str = JSON.stringify($("#input9").val());
    localStorage.setItem('contents9',str);
  });

  $("#btn10").on("click", function() {
    var str = JSON.stringify($("#input10").val());
    localStorage.setItem('contents10',str);
    //console.log(localStorage);
  });

  $("#btn11").on("click", function() {
    var str = JSON.stringify($("#input11").val());
    localStorage.setItem('contents11',str);
    ////console.log(localStorage);
  });

  $("#btn12").on("click", function() {
    var str = JSON.stringify($("#input12").val());
    console.log(str);
    localStorage.setItem('contents12',str);
    ////console.log(localStorage);
  });

  $("#btn13").on("click", function() {
    var str = JSON.stringify($("#input13").val());
    localStorage.setItem('contents13',str);
    //console.log(localStorage);
  });

  $("#btn14").on("click", function() {
    var str = JSON.stringify($("#input14").val());
    localStorage.setItem('contents14',str);
    //console.log(localStorage);
  });

  $("#btn15").on("click", function() {
    var str = JSON.stringify($("#input15").val());
    localStorage.setItem('contents15',str);
    //console.log(localStorage);
  });

  $("#btn16").on("click", function() {
    var str = JSON.stringify($("#input16").val());
    localStorage.setItem('contents16',str);
    //console.log(localStorage);
  });

  $("#btn17").on("click", function() {
    var str = JSON.stringify($("#input17").val());
    localStorage.setItem('contents17',str);
    //console.log(localStorage);
  });
console.log(localStorage);

});
