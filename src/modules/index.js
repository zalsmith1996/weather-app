import '../assets/styles.css';
import { getData } from './data.js';

const d = document;
const search = d.querySelector('.search');

d.body.addEventListener('click', (e) => {
    if (e.target.matches('.search-btn') && search.value !== '') {
        e.preventDefault();
        getData(search.value);
    }
});