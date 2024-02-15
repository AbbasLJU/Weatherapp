const apikey = "f2d19ab4ee9391c2d579493ab9404ed2";
const mapapikey = "N4oBjhwTGG1QhB0eyQfTLBTlmPW4bNio"; 
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city)
{
  const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const response = await fetch(apiurl + city + `&appid=${apikey}`);
  if(response.status === 404)
  {
    document.querySelector(".error").style.display = "Block";
    document.querySelector(".weather").style.display = "none";
  }
  else
  {
    document.querySelector(".error").style.display = "none";
  }
  var data = await response.json();


  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  +"°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
  document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";

  if (data.weather[0].main === "Clouds")
  {
    weatherIcon.src = "../img/clouds.png";
  }
  else if (data.weather[0].main === "Clear")
  {
    weatherIcon.src = "../img/clear.png";
  }
  else if (data.weather[0].main === "Rain")
  {
    weatherIcon.src = "../img/rain.png";
  }
  else if (data.weather[0].main === "Drizzle")
  {
    weatherIcon.src = "../img/drizzle.png";
  }
  else if (data.weather[0].main === "Mist")
  {
    weatherIcon.src = "../img/mist.png";
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})

searchBox.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    checkWeather(searchBox.value);
  }
});

