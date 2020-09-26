var date = moment().format('dddd[,] MMMM Do');
var time = $("#currentDay");
time.text(date);

var timeblock = $(".container");
timeblock.append("9");
for (var i = 10; i < 18 ; i++){
    timeblock.append("<hr\>"+ i);
}