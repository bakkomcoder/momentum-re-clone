const API_KEY = "ebe721e17481d7433057d40a316eea8a";
const weatherIcon = document.querySelector(".weather__img");
const weatherText = document.querySelector(".weather__text");

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const temp = data.main.temp;
      const weather = data.weather[0].main;
      const city = data.name;
      const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weatherIcon.innerHTML = `
        <img src=${iconUrl} />
        <span>${city}</span>
        <span>${weather} / ${temp}°C</span>
      `;
    });
}

function error() {
  alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(success, error);
