function showTemperature(response) {
  let temperatureElement = document.querySelector(".current-temperature-value");
  let cityElement = document.querySelector("#current-city");
  let temperature = Math.round(response.data.temperature.current);
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");

  iconElement.innerHTML = `<img src= "${response.data.condition.icon_url}" class= "weather-app-icon" />`;
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = `${response.data.condition.description}`;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}Km/h`;
  temperatureElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");

  let city = searchInputElement.value;

  let apiKey = "94a0dd46893159096ot0afa98ccebd36";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateElement.innerHTML = formatDate(currentDate);
