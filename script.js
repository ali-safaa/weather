let url =
     "https://api.openweathermap.org/data/2.5/weather?units=metric&q=london";
let api_key = "372b4d3e185d1b07c89a38a347d5f1fd";

let searchBox = document.querySelector("input");
let searchBtn = document.querySelector(".search-icon");

async function checkWeather(city) {
     let res = await fetch(url + city + `&appid=${api_key}`);
     let data = await res.json();
     console.log(data);

     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML =
          Math.floor(data.main.temp) + "°c";
     document.querySelector(".humidity-deg").innerHTML =
          data.main.humidity + "%";
     document.querySelector(".wind-speed").innerHTML = data.wind.speed + "km/h";
}

checkWeather();
