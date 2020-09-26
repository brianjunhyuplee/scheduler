$(document).ready(function(){
    var date = moment().format('dddd[,] MMMM Do');
var time = $("#currentDay");
time.text(date);

var container = $(".container");
// container.append('<div class = "row"><div class = "col-1" id = "time">'+9+" AM"+'</div><div class = "col-10" id = "contents"><textarea></textarea><div class = "col-1"><button id = "saveButton">save</button></div></div>');
// container.append('<div class = "row"><div class = "col-1" id = "time">'+10+" AM"+'</div><div class = "col-10" id = "contents"><textarea></textarea><div class = "col-1"><button id = "saveButton">save</button></div></div>');
// container.append('<div class = "row"><div class = "col-1" id = "time">'+11+" AM"+'</div><div class = "col-10" id = "contents"><textarea></textarea><div class = "col-1"><button id = "saveButton">save</button></div></div>');
// container.append('<div class = "row"><div class = "col-1" id = "time">'+12+" PM"+'</div><div class = "col-10" id = "contents"><textarea></textarea><div class = "col-1"><button id = "saveButton">save</button></div></div>');
// container.append('<div class = "row"><div class = "col-1" id = "time">'+1+" PM"+'</div><div class = "col-10" id = "contents"><textarea></textarea><div class = "col-1"><button id = "saveButton">save</button></div></div>');
// container.append('<div class = "row"><div class = "col-1" id = "time">'+2+" PM"+'</div><div class = "col-10" id = "contents"><textarea></textarea><div class = "col-1"><button id = "saveButton">save</button></div></div>');
// container.append('<div class = "row"><div class = "col-1" id = "time">'+3+" PM"+'</div><div class = "col-10" id = "contents"><textarea></textarea><div class = "col-1"><button id = "saveButton">save</button></div></div>');
// container.append('<div class = "row"><div class = "col-1" id = "time">'+4+" PM"+'</div><div class = "col-10" id = "contents"><textarea></textarea><div class = "col-1"><button id = "saveButton">save</button></div></div>');
// container.append('<div class = "row"><div class = "col-1" id = "time">'+5+" PM"+'</div><div class = "col-10" id = "contents"><textarea></textarea><div class = "col-1"><button id = "saveButton">save</button></div></div>');

for (var i = 9; i < 18; i++){
   if(i<12){
        container.append('<div class = "row"><div class = "col-1" id = "time">'+i+" AM"+'</div><div class = "col-10" id = "contents"><textarea></textarea><div class = "col-1"><button id = "saveButton">save</button></div></div>');
    }
    if(i==12){
       container.append('<div class = "row"><div class = "col-1" id = "time">'+i+" PM"+'</div><div class = "col-10" id = "contents"><textarea></textarea><div class = "col-1"><button id = "saveButton">save</button></div></div>');
   }
    if(i>12){
       container.append('<div class = "row"><div class = "col-1" id = "time">'+(i-12)+" PM"+'</div><div class = "col-10" id = "contents"><textarea></textarea><div class = "col-1"><button id = "saveButton">save</button></div></div>');
    }
}


});
