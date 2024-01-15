//  WEATHER INFORMATION
const apiKey= "b8884fc6100991ac78935eca5d9df096";
const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchButton=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");



async function checkWeather(city){
    const response =await fetch(apiUrl+city+`&appid=${apiKey}`);
    let data=await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name || "unknowncity";
    document.querySelector(".temp").innerHTML=data.main?.temp?Math.round(data.main.temp)+"°c" : "N/A";
    document.querySelector(".humidity").innerHTML=data.main?.humidity?data.main.humidity+"%": "N/A";
    document.querySelector(".wind").innerHTML=data.wind?.speed?data.wind.speed+"km/h": "N/A";

    const weatherArray = data.weather || [];
    if (weatherArray.length > 0) {
        const weatherMain = weatherArray[0].main;
        setWeatherIcon(weatherMain);
    } else {
        console.error('Weather information not available');
    }
    document.querySelector(".weather").style.display="block";

};
    



searchButton.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});
checkWeather("london");//  default city


function setWeatherIcon(weatherMain) {
    const weatherIcon = document.querySelector(".weather-icon");

    
    switch (weatherMain) {
        case "Clouds":
            weatherIcon.src = "WeatherProject/clouds.png";
            break;
        case "Clear":
            weatherIcon.src = "WeatherProject/clear.png";
            break;
        case "Mist":
            weatherIcon.src = "WeatherProject/mist.png";
            break;
        case "Drizzle":
            weatherIcon.src = "WeatherProject/drizzle.png";
            break;
        case "Rain":
            weatherIcon.src = "WeatherProject/rain.png";
            break;
        case "Snow":
            weatherIcon.src = "WeatherProject/snow.png";
            break;
        default:
            console.warn('Unknown weather condition:', weatherMain);
            break;
    }
}


