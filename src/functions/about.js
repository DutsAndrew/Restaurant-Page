export { 
    loadAboutPage,
};

const loadAboutPage = function() {

    const content = document.getElementById('content');

    const aboutContainer = document.createElement('div');
        aboutContainer.classList.add('about-container');

    content.appendChild(aboutContainer);
};