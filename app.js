// Init Storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city);
// Init UI
const ui = new UI();

// Get weather on Dom Load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event 
const search = document.querySelector('.search-btn');
search.addEventListener('click', (e) => {
  const bar = document.querySelector('.search-bar').value;

  // Change Location
  weather.changeLocation(bar);

  // Set Location in LS
  storage.setLocationData(bar);

  // Get Weather
  getWeather();

  bar.clear();
  e.preventDefault();
});


function getWeather() {
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}