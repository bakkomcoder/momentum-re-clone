const weather = document.querySelector(".weather span:first-child");
const city = document.querySelector(".weather span:last-child");
const API_KEY = "ebe721e17481d7433057d40a316eea8a";

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      weather.innerText = `${data.weather[0].main} / ${(
        data.main.temp - 273.15
      ).toFixed(2)}°C`;
      city.innerText = data.name;
    });
}

function error() {
  alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(success, error);
