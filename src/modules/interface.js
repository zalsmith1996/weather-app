const container = document.querySelector('.container');

export function displayWeather(data) {
    container.innerHTML = '';

    console.log(data.current);

    const card = document.createElement('div');
    const location = document.createElement('h3');
    const currentWeather = document.createElement('p');

    location.innerText = `${data.address}`;
    currentWeather.innerText = `
        Condition: ${data.current.conditions}\n
        Temperature: ${data.current.temp}\n
        Feels Like: ${data.current.feelsLike}\n
        Humidity: ${data.current.humidity}\n
        Chance of Rain: ${data.current.rain}\n
        
    `;

    card.className = 'card';
    location.className = 'location';
    currentWeather.className = 'current';

    card.appendChild(location);
    card.appendChild(currentWeather);
    container.appendChild(card);
}

export function displayInputError() {

}