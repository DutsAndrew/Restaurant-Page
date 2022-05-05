const loadHomePage = () => {
    
    // Header items and Website Title
    const content = document.querySelector('#content');
    content.classList.add('content');

    const header = document.createElement('div');
    header.classList.add('header');

    const headerParagraph = document.createElement('p');
    headerParagraph.textContent = "Skrrt Café";
    headerParagraph.classList.add('header-text');

    // Buttons for the menu bar at the top
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
            const aboutImage = document.createElement('div');
            aboutImage.classList.add('about-svg');
            aboutButton.appendChild(aboutImage);

            const aboutText = document.createElement('p');
            aboutText.textContent = "About";
            aboutText.classList.add('menu-item-text');
            aboutButton.appendChild(aboutText);
            aboutButton.classList.add('menu-buttons');

    // Banner Image for Main Page
    const bannerImage = document.createElement('div');
    bannerImage.classList.add('banner-img');

    // Store Hours displayed on Home Page
    const storeHoursContainer = document.createElement('div');
        storeHoursContainer.classList.add('store-hours-container');
        const storeHoursTable = document.createElement('table');
        const storeHoursCaption = document.createElement('caption');
            storeHoursCaption.textContent = "Skkrt Café - Store Hours";
        const storeHoursTableHead = document.createElement('thead');
        const storeHoursTableRow = document.createElement('trow');
        const storeHoursDayHeader = document.createElement('th');
            storeHoursDayHeader.textContent = "Days Open";
        const storeHoursHoursHeader = document.createElement('th');
            storeHoursHoursHeader.textContent = "Hours";

        const storeHoursTableBody = document.createElement('tbody');
        const storeHoursTableBodyRowDays = document.createElement('tr');
        const storeHoursTableBodyRowHours = document.createElement('tr');

        const storeDayMonday = document.createElement('td');
            storeDayMonday.textContent = "Monday";
        const storeDayTuesday = document.createElement('td');
            storeDayTuesday.textContent = "Tuesday";
        const storeDayWednesday = document.createElement('td');
            storeDayWednesday.textContent = "Wednesday";
        const storeDayThursday = document.createElement('td');
            storeDayThursday.textContent = "Thursday";
        const storeDayFriday = document.createElement('td');
            storeDayFriday.textContent = "Friday";
        const storeDaySaturday = document.createElement('td');
            storeDaySaturday.textContent = "Saturday";
        const storeDaySunday = document.createElement('td');
            storeDaySunday.textContent = "Sunday";

        const mondayHours = document.createElement('td');
            mondayHours.textContent = "5:00 AM - 6:00 PM";
        const tuesdayHours = document.createElement('td');
            tuesdayHours.textContent = "5:00 AM - 6:00 PM";
        const wednesdayHours = document.createElement('td');
            wednesdayHours.textContent = "5:00 AM - 6:00 PM";
        const thursdayHours = document.createElement('td');
            thursdayHours.textContent = "5:00 AM - 6:00 PM";
        const fridayHours = document.createElement('td');
            fridayHours.textContent = "5:00 AM - 9:00 PM";
        const saturdayHours = document.createElement('td');
            saturdayHours.textContent = "5:00 AM - 6:00 PM";
        const sundayHours = document.createElement('td');
            sundayHours.textContent = "5:00 AM - 2:00 PM";

        storeHoursTableBodyRowDays.appendChild(storeDayMonday);
        storeHoursTableBodyRowDays.appendChild(storeDayTuesday);
        storeHoursTableBodyRowDays.appendChild(storeDayWednesday);
        storeHoursTableBodyRowDays.appendChild(storeDayThursday);
        storeHoursTableBodyRowDays.appendChild(storeDayFriday);
        storeHoursTableBodyRowDays.appendChild(storeDaySaturday);
        storeHoursTableBodyRowDays.appendChild(storeDaySunday);

        storeHoursTableBodyRowHours.appendChild(mondayHours);
        storeHoursTableBodyRowHours.appendChild(tuesdayHours);
        storeHoursTableBodyRowHours.appendChild(wednesdayHours);
        storeHoursTableBodyRowHours.appendChild(thursdayHours);
        storeHoursTableBodyRowHours.appendChild(fridayHours);
        storeHoursTableBodyRowHours.appendChild(saturdayHours);
        storeHoursTableBodyRowHours.appendChild(sundayHours);

        storeHoursTableBody.appendChild(storeHoursTableBodyRowDays);
        storeHoursTableBody.appendChild(storeHoursTableBodyRowHours);
        storeHoursTableRow.appendChild(storeHoursTableBody);
        storeHoursTableHead.appendChild(storeHoursTableRow);

        storeHoursTable.appendChild(storeHoursCaption);
        storeHoursTable.appendChild(storeHoursTableHead);

        storeHoursContainer.appendChild(storeHoursTable);



    buttonContainer.appendChild(homeButton);
    buttonContainer.appendChild(menuButton);
    buttonContainer.appendChild(aboutButton);

    header.appendChild(headerParagraph);
    header.appendChild(buttonContainer);
    header.appendChild(bannerImage);
    header.appendChild(storeHoursContainer);
    content.appendChild(header);
};

export {
    loadHomePage
};