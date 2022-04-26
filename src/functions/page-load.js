const pageLoadModule = () => {
    const header = document.createElement('div');
    header.classList.add('header');

    const paragraphHeader = document.createElement('p');
    paragraphHeader.textContent = "Espresso Bar";
    paragraphHeader.classList.add('header-text');

    header.appendChild(paragraphHeader);
};

export {
     pageLoadModule
};