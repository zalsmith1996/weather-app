const container = document.querySelector('.container');

export function displayWeather(data) {
    container.innerHTML = '';

    console.log(data.current);

    const convertedTemp = Math.round((data.current.temp - 32) / 9 * 5);
    const convertedFeelsLike = Math.round((data.current.feelsLike - 32) / 9 * 5);

    const card = document.createElement('div');
    const location = document.createElement('h3');
    const currentWeather = document.createElement('p');

    location.innerText = `${data.address}`;
    currentWeather.innerText = `
        Condition: ${data.current.conditions}\n
        Temperature: ${Math.round(data.current.temp)}\u00B0F / ${convertedTemp}\u00B0C\n
        Feels Like: ${Math.round(data.current.feelsLike)}\u00B0F / ${convertedFeelsLike}\u00B0C\n
        Humidity: ${data.current.humidity}%\n
        Chance of Rain: ${data.current.rain}%\n
        
    `;

    card.className = 'card';
    location.className = 'location';
    currentWeather.className = 'current';

    card.appendChild(location);
    card.appendChild(currentWeather);
    container.appendChild(card);
}

export function displayError(error) {
    container.innerText = '';

    const card = document.createElement('div');
    const errorTitle = document.createElement('h3');
    const currentError = document.createElement('p');

    errorTitle.innerText = 'Error';
    currentError.innerText = `${error}\n
    Unable to fulfill request, there was an error fetching the data.\n
    Please check that your desired location is spelled correctly, and try again.`;

    card.className = 'card';
    errorTitle.className = 'errorTitle';
    currentError.className = 'currentError';

    card.appendChild(errorTitle);
    card.appendChild(currentError);
    container.appendChild(card);
};