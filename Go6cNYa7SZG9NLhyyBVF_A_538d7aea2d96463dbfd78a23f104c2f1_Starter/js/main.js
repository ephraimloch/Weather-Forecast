// main.js
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('search-button').addEventListener('click', function() {
        var city = document.getElementById('city-input').value;
        getWeatherForecast(city);
    });
});

function getWeatherForecast(city) {
    // Replace with actual API call and handle the response
    // For demonstration, we use a static JSON response
    var response = {
        "dataseries": [
            {"date": "20240507", "weather": "clear", "temp2m": {"max": 24, "min": 18}},
            // ... more forecast data
        ]
    };

    var forecastContainer = document.getElementById('forecast-container');
    forecastContainer.innerHTML = ''; // Clear previous content

    response.dataseries.forEach(function(forecast) {
        var weatherDayDiv = document.createElement('div');
        weatherDayDiv.className = 'weather-day';
        var date = new Date(forecast.date.slice(0,4), forecast.date.slice(4,6)-1, forecast.date.slice(6,8));
        var day = date.toDateString().slice(0, 3); // Get short day string
        var weatherImg = document.createElement('img');
        weatherImg.src = 'images/' + forecast.weather + '.png'; // Assuming images are named after the weather condition
        var tempMax = document.createElement('div');
        tempMax.textContent = 'High: ' + forecast.temp2m.max + '°C';
        var tempMin = document.createElement('div');
        tempMin.textContent = 'Low: ' + forecast.temp2m.min + '°C';
        weatherDayDiv.appendChild(weatherImg);
        weatherDayDiv.appendChild(document.createTextNode(day));
        weatherDayDiv.appendChild(tempMax);
        weatherDayDiv.appendChild(tempMin);
        forecastContainer.appendChild(weatherDayDiv);
    });
}
