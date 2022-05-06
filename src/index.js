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
    const contentCheck = document.getElementById('content');

    // Home Button Handler
    const homeHandler = document.getElementById('home-button');
        homeHandler.addEventListener('click', switchToHome);
        function switchToHome() {
            if (currentPage == "home") {
                console.log("Home Page was clicked!");
                return
            } else {
                currentPage = "home";
                while (contentCheck.firstChild) {
                    contentCheck.removeChild(contentCheck.firstChild);
                };
                loadHomePage();
                console.log("Home Page was clicked!");
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
                while (contentCheck.firstChild) {
                    contentCheck.removeChild(contentCheck.firstChild);
                };
                loadMenuPage();
                console.log("Menu Page was clicked!");
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
                while (contentCheck.firstChild) {
                    contentCheck.removeChild(contentCheck.firstChild);
                };
                loadAboutPage();
                console.log("About Page was clicked!");
            }
        };