import './stylesheets/page-load.css';
import {pageLoadModule} from './functions/page-load.js';

console.log("Check, Check, Check");

const buildHomePage = () => {
    pageLoadModule();

    const content = document.querySelector('#content');
    content.classList.add('content');

    content.appendChild(header);
}

buildHomePage();

