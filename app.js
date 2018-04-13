const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// init weather and UI classes
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI;



// Get weather on DOM load

document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // Change location 
    weather.changeLocation(city, state);

    // set location in Local storage to persist changes
    storage.setLocationData(city, state);

    //Get weather and display
    getWeather();

    // close modal
    $('#locModal').modal('hide');

});

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
            console.log(results)
        })
        .catch(err => console.log(err));
}