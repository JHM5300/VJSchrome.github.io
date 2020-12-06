const weather = document.querySelector(".js-weather");


const COORDS = 'coords';
const API_KEY = "6864001ab9995aa037a4753203d201e2";

function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoErro(){
    console.log("Cant access geo location");
}
function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude ,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude)
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoErro)
}
function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        const parseCoors = JSON.parse(loadedCoords)
        getWeather(parseCoors.latitude,parseCoors.longitude);
    }
}
function init(){
    loadCoords();
}
init();
console.log(API_KEY)