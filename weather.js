class Weather {
  constructor(city) {
    this.apiKey = 'a4cfcddf0a03952e97858a9dea388bd4';
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`);

    const responseData = await response.json();

    return responseData;
  }

  // Change weather Location
  changeLocation(city) {
    this.city = city;
  }
}