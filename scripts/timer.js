var tmin = document.getElementById("minutes");
var tsec = document.getElementById("seconds");
var tstart = document.getElementById("start");
var tpause = document.getElementById("pause");
var treset = document.getElementById("reset");
var tpomodoro = document.getElementById("pomodoro");
var tshortbreak = document.getElementById("shortbreak");
var tlongbreak = document.getElementById("longbreak");
var minutes = tmin.innerHTML;
var seconds = 0;
var Interval;
var mode = 1;

tstart.onclick = function(){
    clearInterval(Interval);
    Interval = setInterval(countdown, 1000);
}

tpause.onclick = function(){
    clearInterval(Interval);
}

treset.onclick = function(){
        clearInterval(Interval);
        if (mode == 1){
            tmin.innerHTML = "25";
        }
        if (mode == 2){
            tmin.innerHTML = "05";
        }
        if (mode == 3){
            tmin.innerHTML = "10";
        }
        minutes = tmin.innerHTML;
        tsec.innerHTML = "00";
        seconds = 0;
}

tpomodoro.onclick = function(){
    clearInterval(Interval);
    mode = 1;
    tmin.innerHTML = "25";
    tsec.innerHTML = "00";
    minutes = tmin.innerHTML;
    seconds = 0;
}

tshortbreak.onclick = function(){
    clearInterval(Interval);
    mode = 2;
    tmin.innerHTML = "05";
    tsec.innerHTML = "00";
    minutes = tmin.innerHTML;
    seconds = 0;
}

tlongbreak.onclick = function(){
    clearInterval(Interval);
    mode = 3;
    tmin.innerHTML = "10";
    tsec.innerHTML = "00";
    minutes = tmin.innerHTML;
    seconds = 0;
}

function countdown(){
    if (seconds == 0){
        if (minutes == 0){
            minutes = "00";
            if (seconds == 0 && minutes == 0){
                alert("DONE");
                return;
            }
        }
        else{
            minutes--;
            if (minutes < 10){
                tmin.innerHTML = "0" + minutes;
            }
            else{
                tmin.innerHTML = minutes;
            }
        }
    }
    if (seconds < 1){
        seconds = 59;
        tsec.innerHTML = seconds;
    }
    else if(seconds <= 10){
        seconds--;
        tsec.innerHTML = "0" + seconds;
    }
    else if(seconds < 60){
        seconds--;
        tsec.innerHTML = seconds;
    }
    
}