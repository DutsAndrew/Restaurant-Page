require.context("/src/imgs/", true, /\.(png|svg|jpg|gif)$/);

import _ from 'lodash';
import './stylesheets/home.css';
import './stylesheets/menu.css';
import './stylesheets/about.css';
import { loadNavBar } from './functions/home.js';
import { loadHeroImage } from './functions/home.js';
import { loadMenuPage } from './functions/menu.js';
import { loadAboutPage } from './functions/about.js';

// Default Load
loadNavBar();
loadHeroImage();

// JS to transition between Home, Menu, and About Pages
    // DOM elements that remain on the page
        const content = document.querySelector('#content');

        // Home Button Handler
        const homeHandler = document.querySelector('#home-button');
            homeHandler.addEventListener('click', switchToHome);
            function switchToHome() {
                while (content.children.length > 1) {
                    content.children[1].remove();
                }
                loadHeroImage();
            };

        // Menu Button Handler
        const menuHandler = document.querySelector('#menu-button');
            menuHandler.addEventListener('click', switchToMenu);
            function switchToMenu() {
                while (content.children.length > 1) {
                    content.children[1].remove();
                }
                loadMenuPage();
            };

        // About Button Handler
        const aboutHandler = document.querySelector('#about-button');
            aboutHandler.addEventListener('click', switchToAbout);
            function switchToAbout() {
                while (content.children.length > 1) {
                    content.children[1].remove();
                }
                loadAboutPage();
            };