let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let api_key = "372b4d3e185d1b07c89a38a347d5f1fd";

let searchBox = document.querySelector("input");
let searchBtn = document.querySelector(".search-icon");
let country = document.querySelector(".city");
let temp = document.querySelector(".temp");
let humidity = document.querySelector(".humidity-deg");
let wind_speed = document.querySelector(".wind-speed");
let image_weather = document.querySelector(".image_weather");
let city_weather = document.querySelector(".city-weather");
let humidityAndWind = document.querySelector(".humidityandwind");
let invalid_city = document.querySelector(".error");

async function checkWeather(city) {
     let res = await fetch(url + city + `&appid=${api_key}`);
     let data = await res.json();

     if (res.status == 404) {
          invalid_city.style.display = "block";
          humidityAndWind.style.display = "none";
          city_weather.style.display = "none";
     } else {
          country.innerHTML = data.name;
          temp.innerHTML = Math.floor(data.main.temp) + "°c";
          humidity.innerHTML = data.main.humidity + "%";
          wind_speed.innerHTML = data.wind.speed + "km/h";

          if (data.weather[0].main == "Clouds") {
               image_weather.src = "/images/cloud.png";
          } else if (data.weather[0].main == "Clear") {
               image_weather.src = "/images/clear.png";
          } else if (data.weather[0].main == "Rain") {
               image_weather.src = "/images/Rain.png";
          } else if (data.weather[0].main == "Drizzle") {
               image_weather.src = "/images/drizzle.png";
          } else if (data.weather[0].main == "Mist") {
               image_weather.src = "/images/mist.png";
          } else if (data.weather[0].main == "Snow") {
               image_weather.src = "/images/snow.png";
          }
          city_weather.style.display = "grid";
          humidityAndWind.style.display = "flex";
          invalid_city.style.display = "none";
     }
}

searchBtn.addEventListener("click", () => checkWeather(searchBox.value));
