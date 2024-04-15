setInterval(()=>{
    let time = new Date();

    let hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    let min = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    let sec = time.getSeconds() < 10 ? "0" + time.getSeconds()  : time.getSeconds();
    
    if(hour > 12){
        hour = hour - 12
    }
    document.getElementById("hr").innerHTML = hour;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

}, 1000)