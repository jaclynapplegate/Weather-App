// ADD DATE & TIME

let now = new Date();
let dateNow = document.querySelector("#date");
let timeNow = document.querySelector("#time");
let date = now.getDate();
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let year = now.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let month = months[now.getMonth()];

dateNow.innerHTML = `${day}, ${month} ${date}, ${year}`;
timeNow.innerHTML = `${hour}:${minutes} PM`;

// CHANGE CITY

function showWeather(response) {
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let currentIcon = document.querySelector(".currentIcon");

  document.querySelector(".city").innerHTML = response.data.name;
  document.querySelector(".currentTemp strong").innerHTML = `${Math.round(
    response.data.main.temp
  )}`;
  description.innerHTML = response.data.weather[0].description;
  humidity.innerHTML = response.data.main.humidity;
  wind.innerHTML = Math.round(response.data.wind.speed);
  currentIcon.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  currentIcon.setAttribute("alt", response.data.weather[0].description);
}

function searchForm(event) {
  event.preventDefault();
  let apiKey = "c41f9f26f03f32443ecf40be638baf03";
  let searchInput = document.querySelector("#search-text");
  let city = document.querySelector(".city");

  city.innerHTML = `${searchInput.value}`;
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=imperial`;
  axios.get(apiURL).then(showWeather);
}
let form = document.querySelector("form");
form.addEventListener("submit", searchForm);
form.addEventListener("enter", searchForm);
