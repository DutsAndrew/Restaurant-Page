import _ from 'lodash';
import './stylesheets/home.css';
import './stylesheets/menu.css';
import './stylesheets/about.css';
import { loadHomePage } from './functions/home.js';

// Default Load
loadHomePage();

// Provides access to DOM elements, so they can be removed or kept when menu buttons are clicked
const content = document.querySelector('#content');
const menuButtons = document.querySelector('#menu-buttons');
const websiteTitle = document.querySelector('#website-title');
const bannerImage = document.querySelector('#banner-img');
const storeHoursContainer = document.querySelector('#store-hours-container');

// Menu Button Handlers
const homeHandler = document.getElementById('home-button');
    homeHandler.addEventListener('click', switchToHome);

    function switchToHome() {

        loadHomePage();
        console.log("Home Button was clicked!");
    }