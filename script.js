//variables for hour,minute,second,and milli second
var hour = 0;
var minute = 0;
var second =0;
var ms = 0;

//timer a boolean variable and when it is true then the timer will run ,other it will not
var timer =false;

//selecting the button element one by one so that the click event should be handled
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

//function for various click event
start.onclick =function(){
    timer = true;
    stopwatch();
}

stop.onclick=function(){
    timer = false;
}

reset.onclick=function(){
//resetting the value and adding it to the html so that it can be show on display
    timer = false;
    hour = 0;
    minute =0;
    second = 0;
    ms =0;
//adding the value in form of 00 thats why  adding the value in the form of string 
    document.getElementById("hours").innerHTML ="00";
    document.getElementById("minute").innerHTML="00";
    document.getElementById("second").innerHTML="00";
    document.getElementById("msecond").innerHTML="00";
}

//for continous running of the timer when timer is false and other function which are changing and 
//adding the variable to the display of the watch
function stopwatch(){
    if(timer == true){
        ms = ms+1;
        //if millisecond reach 100 then reset it to 0 and add 1 in second
        if(ms==100){
            second = second+1;
            ms = 0;
        }
        //if second reach 60 then reset it to 0 and add 1 in minute
        if(second==60){
            minute = minute+1;
            second = 0;
        }
        //if minute reach 60 then reset it to 0 and add 1 in hour
        if(minute==60){
            hour = hour+1;
            minute = 0;
            second = 0;
        }
        //Creating the copies of value so that later it can change into string form
        var hourString = hour;
        var minuteString = minute;
        var secondString = second;
        var mSecond = ms;
        
        //if the values are in single digit then change it into double digit so that it looks good
        if(hour<10){
            hourString = "0"+hourString;
        }
        if(minute<10){
            minuteString = "0"+minuteString;
        }
        if(second<10){
            secondString = "0"+secondString;
        }
        if(ms<10){
            mSecond = "0"+mSecond;
        }

        //adding the string into the html so that it can show on display
        document.getElementById('hours').innerHTML = hourString;
        document.getElementById('minute').innerHTML = minuteString;
        document.getElementById('second').innerHTML = secondString;
        document.getElementById('msecond').innerHTML = mSecond;
        
        setTimeout("stopwatch()",10);
    }
}