let today = new Date();

let days = ["Sunday", "Monday", "Tuesday", "Wednsday",
                "Thursday","Friday", "Saturday"];

let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
                "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

document.getElementById("date").innerHTML = today.getDate();
document.getElementById("day").innerHTML = days[today.getDay()];
document.getElementById("month").innerHTML = month[today.getMonth()];
document.getElementById("year").innerHTML = today.getFullYear(); 

let etdays = ["እሁድ", "ሰኞ", "ማግሰኞ", "ረብዑ",
                "ሐሙስ","አርብ", "ቀዳሜ"];

let etmonth = ["መስከረም", "ጥቅምት", "ህዳር", "ታህሳስ", "ጥር", "የካቲት", 
                "መጋቢት", "ሚያዝያ", "ግንቦት", "ሰኔ", "ሃምሌ", "ነሃሴ"];


document.getElementById("etdate").innerHTML = today.getDate() - 9 ;
document.getElementById("etday").innerHTML = etdays[today.getDay()];
document.getElementById("etmonth").innerHTML = etmonth[today.getMonth()+ 4];
document.getElementById("etyear").innerHTML = today.getFullYear() -8; 