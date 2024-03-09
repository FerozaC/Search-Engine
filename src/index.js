function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let cityElement = document.querySelector("#current-city");
    cityElement.innerHTML = searchInputElement.value;
  
    let apiKey = "8acf2e12t46823aco56151e11fb9a0c0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityElement.innerHTML}&key=${apiKey}&unit=metric`;
    axios.get(apiUrl).then(currentTemp);
    function currentTemp(response) {
      console.log(response.data.temperature.current);
      let temp = Math.round(response.data.temperature.current);
      let city = response.data.city;
      let tempElement = document.querySelector("#tempValue");
      tempElement.innerText = `${temp}`;
  
      let humidity = response.data.temperature.humidity;
      let humidityElement = document.querySelector("#humidity");
      humidityElement.innerHTML = `${humidity}` + "%";
  
      let wind = Math.round(response.data.wind.speed);
      let windElement = document.querySelector("#wind");
      windElement.innerHTML = `${wind}` + "km/h";
    }
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
  
  let currentDateELement = document.querySelector("#current-date");
  let currentDate = new Date();
  
  currentDateELement.innerHTML = formatDate(currentDate);