var hour = 0;
var minute = 0;
var second =0;
var ms = 0;

var timer =false;
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

start.onclick =function(){
    timer = true;
    stopwatch();
}

stop.onclick=function(){
    timer = false;
}

reset.onclick=function(){
    timer = false;
    hour = 0;
    minute =0;
    second = 0;
    ms =0;

    document.getElementById("hours").innerHTML ="00";
    document.getElementById("minute").innerHTML="00";
    document.getElementById("second").innerHTML="00";
    document.getElementById("msecond").innerHTML="00";
}

function stopwatch(){
    if(timer == true){
        ms = ms+1;

        if(ms==100){
            second = second+1;
            ms = 0;
        }
        if(second==60){
            minute = minute+1;
            second = 0;
        }
        if(minute==60){
            hour = hour+1;
            minute = 0;
            second = 0;
        }
        
        document.getElementById('hours').innerHTML = hour;
        document.getElementById('minute').innerHTML = minute;
        document.getElementById('second').innerHTML = second;
        document.getElementById('msecond').innerHTML = ms;
        
        setTimeout("stopwatch()",10);
    }
}