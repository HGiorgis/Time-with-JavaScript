let started = 1;
let timer = null;
let lTimer = null;
let count = 1;

let [micSec,second,minute,hour] = [0,0,0,0];
let [lmicSec,lsecond,lminute,lhour] = [0,0,0,0];
function setStopwatch(){
    let mainTimer = document.getElementById("maintimer");
    micSec++;
    if(micSec == 100){
        micSec = 0;
        second++
        if(second == 60){
            second = 0;
            minute++;
            if(minute == 60){
                minute = 0;
                hour++;
                if(hour == 24){

                }
            }
        }
    }
    let ms = micSec < 10 ? "0" + micSec : micSec;
    let s = second < 10 ? "0" + second : second;
    let m = minute < 10 ? "0" + minute : minute;
    let h = hour < 10 ? "0" + hour : hour;

    mainTimer.innerHTML = h + ":" + m + ":" + s + ":" + ms ;
}

function startTimer(){
    if(timer !== null){
        clearInterval(timer)
    }
    timer = setInterval(setStopwatch,10);
    let btnLap  = document.getElementById("lap");
    btnLap.disabled = 0
    let stop  = document.getElementById("stop");
    stop.style.display = "block"
    let start  = document.getElementById("start");
    start.style.display = "none"
    let lap  = document.getElementById("lap");
    lap.style.display = "block"
    let reset  = document.getElementById("reset");
    reset.style.display = "none"
    if(started == 0){
        if(lTimer !== null){
            clearInterval(lTimer)
        }
        lTimer = setInterval(setlapStopwatch,10);
    }
  
}
function stopTimer(){
    let stop = document.getElementById("stop");
    clearInterval(timer)
    clearInterval(lTimer)
    let btnLap  = document.getElementById("lap");
    btnLap.disabled = 1
    stop.style.display = "none"
    let reset  = document.getElementById("reset");
    reset.style.display = "block"
    let lap  = document.getElementById("lap");
    lap.style.display = "none"
    let resume  = document.getElementById("start");
    resume.innerHTML = "Resume"
    resume.style.display = "block"
    started = 0
}    
function resetTimer(){
    clearInterval(timer)
    clearInterval(lTimer)
    let lap  = document.getElementById("lap");
    lap.style.display = "block"
    let reset  = document.getElementById("reset");
    reset.style.display = "none"
    let resume  = document.getElementById("start");
    resume.innerHTML = "Start"
    let btnLap  = document.getElementById("lap");
    btnLap.disabled = 1
    second = 0;
    minute = 0;
    hour = 0;
    let mainTimer = document.getElementById("maintimer");
    mainTimer.innerHTML = "00:00:00:00"
    let table = document.getElementById("data");
    table.innerHTML = " <thead><td>Lap</td><td>Lap times</td><td>Overall time</td</thead>"
    table.style.display = "none"; 
    let currentTimer = document.getElementById("current-timer");
    currentTimer.style.display = "none";
    currentTimer.innerHTML = "00:00:00:00"
    count = 1;

}

function setlapStopwatch(){
    let currentTimer = document.getElementById("current-timer");
    lmicSec++
    if(lmicSec == 100){
        lmicSec = 0;
        lsecond++
    if(lsecond == 60){
        lsecond = 0;
        lminute++;
        if(lminute == 60){
            lminute = 0;
            lhour++;
        }
    }
    }
    let lms = lmicSec < 10 ? "0" + lmicSec : lmicSec;
    let ls = lsecond < 10 ? "0" + lsecond : lsecond;
    let lm = lminute < 10 ? "0" + lminute : lminute;
    let lh = lhour < 10 ? "0" + lhour : lhour;

    currentTimer.innerHTML = lh + ":" + lm + ":" + ls+ ":" + lms;
}
function lapTimer(){
    if(lTimer !== null){
        clearInterval(lTimer)
    }
    lTimer = setInterval(setlapStopwatch,10);
    if(count == 1){
        lmicSec = micSec;
        lsecond = second;
        lminute = minute;
        lhour = hour;
    }

    let currentTimer = document.getElementById("current-timer");
    currentTimer.style.display = "block"; 
    let table = document.getElementById("data");
    table.style.display = "block";  
    
    let ms = micSec < 10 ? "0" + micSec : micSec;
    let s = second < 10 ? "0" + second : second;
    let m = minute < 10 ? "0" + minute : minute;
    let h = hour < 10 ? "0" + hour : hour;

    let lms = lmicSec < 10 ? "0" + lmicSec : lmicSec;
    let ls = lsecond < 10 ? "0" + lsecond : lsecond;
    let lm = lminute < 10 ? "0" + lminute : lminute;
    let lh = lhour < 10 ? "0" + lhour : lhour;
    
    let c = count < 10 ? "0" + count : count;

    table.innerHTML += "<tr><td>"+c+"</td> "+
    "<td>"+lh+":"+lm+":"+ls+":"+lms+"</td> "+
    "<td>"+h+":"+m+":"+s+":"+ms+"</td></tr>";
    
    count++;
    lmicSec = 0;
    lsecond = 0;
    lminute = 0;
    lhour = 0;
    
} 

