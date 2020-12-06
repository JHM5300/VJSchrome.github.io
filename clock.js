const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector("h1");
function getTime(){
    const date= new Date();
    const munutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}`:hours}:${
        munutes < 10 ? `0${munutes}`:munutes}:${
        seconds < 10 ? `0${seconds}`:seconds}`;
}

function init(){
    setInterval(getTime,1000)
}
init();