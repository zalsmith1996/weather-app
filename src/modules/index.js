import { displayWeatherInfo, displayInputError } from './interface.js';

const d = document;
const search = d.querySelector('.search');

d.body.addEventListener('click', (e) => {
    if (e.target.matches('.search-btn') && search.value !== '') {
        displayWeatherInfo();
    }
    if (e.target.matches('.search-btn') && search.value == '') {
        displayInputError();
    }
});