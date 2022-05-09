export { 
    loadAboutPage,
};

const loadAboutPage = function() {

    const content = document.getElementById('content');

    const aboutContainer = document.createElement('div');
        aboutContainer.classList.add('about-container');

        // Story about Skrrt Café
        const aboutStoryContainer = document.createElement('div');
            aboutStoryContainer.classList.add('about-story-container');

            const aboutStory = document.createElement('p');
                aboutStory.classList.add('about-story');
                    aboutStory.textContent = "Skrrt Cafe was established in 2022 and it's soul purpose was to take the passion of making quality espresso and delicious baked goods and foods into one establishment. Skrrt's sole focus is to provide the highest quality of service and a delicious coffee or meal.";

        // Store Hours displayed on Home Page
        const storeHoursContainer = document.createElement('div');
        storeHoursContainer.classList.add('store-hours-container');
        storeHoursContainer.setAttribute('id', 'store-hours');
            const storeHoursTable = document.createElement('table');
            const storeHoursCaption = document.createElement('caption');
                storeHoursCaption.textContent = "Skkrt Café - Store Hours";
            const storeHoursTableHead = document.createElement('thead');
            const storeHoursTableRow = document.createElement('trow');
            const storeHoursDayContent = document.createElement('th');
                storeHoursDayContent.textContent = "Days Open";
            const storeHoursHoursContent = document.createElement('th');
                storeHoursHoursContent.textContent = "Hours";

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
        
    aboutContainer.appendChild(aboutStory);
    aboutContainer.appendChild(storeHoursContainer);

    content.appendChild(aboutContainer);
};