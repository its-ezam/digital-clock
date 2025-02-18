let hrs = document.querySelector('.hours__text');
let min = document.querySelector('.minutes__text');
let sec = document.querySelector('.seconds__text');
let greeting = document.querySelector('.heading__greeting');
let day = document.querySelector('.heading__day');

setInterval(() => {
    let currentTime = new Date();

    let dateFormat = new Intl.DateTimeFormat("en-us", { weekday: "long" }).format(currentTime); 

    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

    if (hrs.innerHTML > 18) {
            greeting.innerHTML = "Good Evening";
    } else if (hrs.innerHTML > 12) {
            greeting.innerHTML = "Good Afternoon!";
        
    } else if (hrs.innerHTML > 0) {
            greeting.innerHTML = "Good Morning!";
    } else {
        greeting.innerHTML = "Welcome!";
    }

    day.innerHTML = "It's " + dateFormat;

},1000);