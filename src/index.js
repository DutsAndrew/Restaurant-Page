import _ from 'lodash';
import './stylesheets/home.css';
import './stylesheets/menu.css';
import './stylesheets/about.css';
import { loadHomePage } from './functions/home.js';
import { loadMenuPage } from './functions/menu.js';
import { loadAboutPage } from './functions/about.js';

// Default Load
loadHomePage();

// JS to transition between Home, Menu, and About Pages
    let currentPage = "home";

    // DOM elements that remain on the page
        const content = document.querySelector('#content');
    // DOM elements that will be added and removed
        const bannerImage = document.getElementById('home-page-img');
        const storeHoursContainer = document.getElementById('store-hours');

    // Home Button Handler
    const homeHandler = document.getElementById('home-button');
        homeHandler.addEventListener('click', switchToHome);
        function switchToHome() {
            if (currentPage == "home") {
                return
            } else if (currentPage != "home") {
                if (currentPage == "home") {
                    content.removeChild(bannerImage);
                }
                currentPage = "home";
                loadHomePage();
            } else {
                return
            }
        };

    // Menu Button Handler
    const menuHandler = document.getElementById('menu-button');
        menuHandler.addEventListener('click', switchToMenu);
        function switchToMenu() {
            if (currentPage == "menu") {
                return
            } else if (currentPage != "menu") {
                if (currentPage == "home") {
                    content.removeChild(bannerImage);
                }
                currentPage = "menu";
                loadMenuPage();
            } else {
                return
            }
        };

    // About Button Handler
    const aboutHandler = document.getElementById('about-button');
        aboutHandler.addEventListener('click', switchToAbout);
        function switchToAbout() {
            if (currentPage == "about") {
                return
            } else if (currentPage != "about") {
                if (currentPage == "home") {
                    content.removeChild(bannerImage);
                }
                currentPage = "about";
                loadAboutPage();
            } else {
                return
            }
        };