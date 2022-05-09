export {
    loadHomePage,
};

const loadHomePage = () => {
    
    // content items and Website Title
    const content = document.querySelector('#content');
        content.classList.add('content');

    const navBar = document.createElement('div');
        navBar.classList.add('nav-bar');
        navBar.setAttribute('id', 'nav');

    const websiteTitle = document.createElement('p');
        websiteTitle.textContent = "Skrrt Café";
        websiteTitle.classList.add('content-text');
        websiteTitle.setAttribute('id', 'website-title');

    // Buttons for the menu bar at the top
    const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('menu-button-container');
        buttonContainer.setAttribute('id', 'menu-buttons');

        const homeButton = document.createElement('button');
            const homeImage = document.createElement('div');
            homeImage.classList.add('home-svg');
            homeButton.appendChild(homeImage);

            const homeText = document.createElement('p');
            homeText.textContent = "Home";
            homeText.classList.add('menu-item-text');
            homeButton.appendChild(homeText);
            homeButton.classList.add('menu-buttons');
            homeButton.setAttribute('id', 'home-button');

        const menuButton = document.createElement('button');
            const menuImage = document.createElement('div');
            menuImage.classList.add('menu-svg');
            menuButton.appendChild(menuImage);

            const menuText = document.createElement('p');
            menuText.textContent = "Menu";
            menuText.classList.add('menu-item-text');
            menuButton.appendChild(menuText);
            menuButton.classList.add('menu-buttons');
            menuButton.setAttribute('id', 'menu-button');

        const aboutButton = document.createElement('button');
            const aboutImage = document.createElement('div');
            aboutImage.classList.add('about-svg');
            aboutButton.appendChild(aboutImage);

            const aboutText = document.createElement('p');
            aboutText.textContent = "About";
            aboutText.classList.add('menu-item-text');
            aboutButton.appendChild(aboutText);
            aboutButton.classList.add('menu-buttons');
            aboutButton.setAttribute('id', 'about-button');

    // Banner Image for Main Page
    const bannerImage = document.createElement('div');
        bannerImage.classList.add('banner-img');
        bannerImage.setAttribute('id', 'home-page-img');

    buttonContainer.appendChild(homeButton);
    buttonContainer.appendChild(menuButton);
    buttonContainer.appendChild(aboutButton);

    navBar.appendChild(websiteTitle);
    navBar.appendChild(buttonContainer);

    content.appendChild(navBar);
    content.appendChild(bannerImage);
};