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
     console.log(data);
     if (res.status == 404) {
          invalid_city.style.display = "block";
          humidityAndWind.style.display = "none";
          city_weather.style.display = "none";
     } else {
          country.innerHTML = data.name;
          temp.innerHTML = Math.floor(data.main.temp) + "°c";
          humidity.innerHTML = data.main.humidity + "%";
          wind_speed.innerHTML = data.wind.speed + "km/h";

          switch (data.weather[0].main) {
               case "Clouds":
                    image_weather.src = "/images/cloud.png";
                    break;
               case "Clear":
                    image_weather.src = "/images/clear.png";
                    break;
               case "Rain":
                    image_weather.src = "/images/Rain.png";
                    break;
               case "Drizzle":
                    image_weather.src = "/images/drizzle.png";
                    break;
               case "Mist":
                    image_weather.src = "/images/mist.png";
                    break;
               case "Snow":
                    image_weather.src = "/images/snow.png";
               default:
                    break;
          }
          city_weather.style.display = "grid";
          humidityAndWind.style.display = "flex";
          invalid_city.style.display = "none";
     }
}

searchBtn.addEventListener("click", () => checkWeather(searchBox.value));

async function getData() {
     let res = await fetch(url + "canada" + `&appid=${api_key}`);
     let data = await res.json();
     console.log(data);
}

getData();
