let api = {
    key : "09ad67ed7e1b0d34ed0a6e244ea0d05e",
    base : "https://api.openweathermap.org/data/2.5/"
}
let searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', que);

//function for que
function que(evt) {
    if (evt.keyCode == 13) {
        getResult(searchBox.value);
        console.log(searchBox.value);
    }
}
//function for api key
function getResult(setQuery) {
    fetch(`${api.base}weather?q=${setQuery}&units=metric&APPID=${api.key}`)
    .then(weather =>{
        return weather.json();
    }).then(displayResults);
}
//function for weather(city)
function displayResults(weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
    //create instance
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateCreater(now);
  
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
  
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
  
    let hilow = document.querySelector('.low-tem');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}
//function for date create(date, day, month, year)
function dateCreater(d) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tueday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
}