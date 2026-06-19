const apiKey = 'd3cd26791d88f9aad95c99d183ef8841';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?' + apiKey + '&units=metric&q=';


const searchBox = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');

const weatherIcon = document.querySelector('.weather-icon');


async function checkWeather(city) {
    try {
        // Fetch weather data from the API
        const response = await fetch(apiURL + city + `&appid=${apiKey}`);
        let data = await response.json();

        console.log(data);

        // Update the DOM with the fetched weather data
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';


        // Set the weather icon based on the weather condition
        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = 'assets/images/clouds.png';
        }
        else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = 'assets/images/clear.png';
        }
        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = 'assets/images/rain.png';
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'assets/images/drizzle.png';
        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = 'assets/images/mist.png';
        }
    }
    catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Add event listener to the search button and check the weather for the city entered in the search box when clicked
searchButton.addEventListener('click', () => {
    checkWeather(searchBox.value);
})
