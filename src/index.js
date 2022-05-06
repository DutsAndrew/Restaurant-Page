import _ from 'lodash';
import './stylesheets/home.css';
import './stylesheets/menu.css';
import './stylesheets/about.css';
import { loadHomePage } from './functions/home.js';
import { reLoadHome } from './functions/home.js';
import { loadMenuPage } from './functions/menu.js';
import { loadAboutPage } from './functions/about.js';

// Default Load
loadHomePage();

// JS to transition between Home, Menu, and About Pages
    let currentPage = "home";

    // DOM elements that remain on the page
        const content = document.getElementById('content');
    // DOM elements that will be added and removed
        const bannerImage = document.getElementById('home-page-img');
        const storeHoursContainer = document.getElementById('store-hours');

    // Home Button Handler
    const homeHandler = document.getElementById('home-button');
        homeHandler.addEventListener('click', switchToHome);
        function switchToHome() {
            if (currentPage == "home") {
                console.log("Home Page was clicked!");
                return
            } else {
                currentPage = "home";
                if (document.getElementById('home-page-img') && document.getElementById('store-hours')){
                    content.removeChild(bannerImage);
                    content.removeChild(storeHoursContainer);
                } else {
                    console.log("Home Page was clicked!");
                    reLoadHome();
                }
            }
        };

    // Menu Button Handler
    const menuHandler = document.getElementById('menu-button');
        menuHandler.addEventListener('click', switchToMenu);
        function switchToMenu() {
            if (currentPage == "menu") {
                console.log("Menu Page was clicked!");
                return
            } else {
                currentPage = "menu";
                if(document.getElementById('home-page-img') && document.getElementById('store-hours')){
                    content.removeChild(bannerImage);
                    content.removeChild(storeHoursContainer);
                } else {
                    console.log("Menu Page was clicked!");
                }
            }
        };

    // About Button Handler
    const aboutHandler = document.getElementById('about-button');
        aboutHandler.addEventListener('click', switchToAbout);
        function switchToAbout() {
            if (currentPage == "about") {
                console.log("About Page was clicked!");
                return
            } else {
                currentPage = "about";
                if(document.getElementById('home-page-img') && document.getElementById('store-hours')){
                    content.removeChild(bannerImage);
                    content.removeChild(storeHoursContainer);
                } else {
                    console.log("About Page was clicked!");
                }
            }
        };