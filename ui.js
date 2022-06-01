class UI {
  constructor() {
    this.location = document.getElementById('location');
    this.temperature = document.getElementById('temperature');
    this.icon = document.getElementById('icon');
    this.description = document.getElementById('description');
    this.humidity = document.getElementById('humidity');
    this.windspeed = document.getElementById('windspeed');
  }

  paint(res) {
    this.location.textContent = `Weather in ${res.name}`;
    this.temperature.textContent = `${res.main.temp}° C`;
    this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png`);
    this.description.textContent = res.weather[0].description;
    this.humidity.textContent = `Humidity: ${res.main.humidity}%`;
    this.windspeed.textContent = `Wind ${res.wind.speed} km/h`;
    document.body.style.backgroundImage = `url( 'https://source.unsplash.com/random/?${res.name}')`
  }
}