import { displayWeather } from './interface.js';

export async function getData(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=WNAJNPHJ57DA52L2EX2C7AN95&contentType=json`);
    const weatherData = await response.json();

    displayWeather(processData(weatherData));
    
};

function processData(data) {
    return {
        address: data.resolvedAddress,
        days: data.days,
        current: {
            conditions: data.currentConditions.conditions,
            feelsLike: data.currentConditions.feelslike,
            humidity: data.currentConditions.humidity,
            temp: data.currentConditions.temp,
            rain: data.currentConditions.precip,
        },
    };
};