const loadHomePage = () => {
    const content = document.querySelector('#content');
    content.classList.add('content');

    const header = document.createElement('div');
    header.classList.add('header');

    const headerParagraph = document.createElement('p');
    headerParagraph.textContent = "Skrrt Café";
    headerParagraph.classList.add('header-text');


    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('menu-button-container');
    
        const homeButton = document.createElement('button');
            const homeImage = document.createElement('div');
            homeImage.classList.add('home-svg');
            homeButton.appendChild(homeImage);

            const homeText = document.createElement('p');
            homeText.textContent = "Home";
            homeText.classList.add('menu-item-text');
            homeButton.appendChild(homeText);
        homeButton.classList.add('menu-buttons');

        const menuButton = document.createElement('button');
            const menuImage = document.createElement('div');
            menuImage.classList.add('menu-svg');
            menuButton.appendChild(menuImage);

            const menuText = document.createElement('p');
            menuText.textContent = "Menu";
            menuText.classList.add('menu-item-text');
            menuButton.appendChild(menuText);
        menuButton.classList.add('menu-buttons');

    const aboutButton = document.createElement('button');
    aboutButton.classList.add('menu-buttons');
    const bannerImage = document.createElement('div');
    bannerImage.classList.add('banner-img');


    buttonContainer.appendChild(homeButton);
    buttonContainer.appendChild(menuButton);
    buttonContainer.appendChild(aboutButton);

    header.appendChild(headerParagraph);
    header.appendChild(buttonContainer);
    header.appendChild(bannerImage);
    content.appendChild(header);
};

export {
    loadHomePage
};