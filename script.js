//DOM elements
document.getElementById('clock');
document.getElementById('dayDate');
document.getElementById('greeting');
document.getElementById('name');
document.getElementById('plan');


//Get Time and Day
function todayTime(){
    let renderDate = new Date();
    let todayHour = renderDate.getHours();
    let todayMinute = renderDate.getMinutes();
    let todaySecond = renderDate.getSeconds();
    let todayDay    = renderDate.getDay();
    let todayDate = renderDate.getDate();
    let todayMonth = renderDate.getMonth();
    let todayYear = renderDate.getFullYear();

    //Set AM or PM
    const amPM = todayHour >= 12 ? 'PM':'AM';
    // 12 hour format
    todayHour = todayHour % 12 || 12;
    // Days of the week
     const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     const finalDay = weekDays[todayDay]; 
     // Months of the year
     const monthYear = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
     const finalMonth = monthYear[todayMonth];

    // Clock and day output
    clock.innerHTML = `${todayHour}<span>:</span>${addZero(todayMinute)}<span>:</span>${addZero(todaySecond)}`;
    dayDate.innerHTML= `${finalDay}<span>, </span>${todayDate} ${finalMonth} ${todayYear}`
   
    
    setTimeout(todayTime,1000);

   
}
//Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}
// Set Background
function setBackground() {
let today = new Date();
let hour = today.getHours();
if (hour > 4 && hour < 12 ) {
document.body.style.backgroundImage="url('../Images/Morning.jpg')";
greeting.textContent = 'Good Morning,';
}else if (hour > 11 && hour < 16) {
    document.body.style.backgroundImage="url('../Images/Afternoon.jpg')";
greeting.textContent = 'Good Afternoon,';
} else if(hour > 15 && hour < 20) {
document.body.style.backgroundImage="url('../Images/Evening.jpg')";
greeting.textContent = 'Good Evening,';
document.body.style.color = 'white';

} else {
    document.body.style.backgroundImage="url('../Images/Night.jpg')";
    greeting.textContent = 'Good Night,';
    document.body.style.color = 'white';
    document.body.style.opacity = '0.85';
}
}



setBackground();
todayTime();
