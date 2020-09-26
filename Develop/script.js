var date = moment().format('dddd[,] MMMM Do');
var time = $("#currentDay");
time.text(date);

var timeblock = $(".container");
timeblock.append("9 AM");
for (var i = 10; i < 18 ; i++){
    if(i < 13){
        if (i !=12)
        timeblock.append("<hr\>"+ i + " AM");
        else
        timeblock.append("<hr\>"+ i + " PM")
    }
    else{
        timeblock.append("<hr\>" + (i-12) + " PM");
    }
}