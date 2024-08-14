import '../assets/styles.css';
import { getData } from './data.js';
import { displayError } from './interface.js';

const d = document;
const search = d.querySelector('.search');

d.body.addEventListener('click', (e) => {
    if (e.target.matches('.search-btn')) {
        e.preventDefault();
        if (search.validity.valueMissing) {
            displayError();
        } else {
            getData(search.value);
        };
    };
});