import { assignWith } from "lodash";

export { 
    loadMenuPage,
};

const loadMenuPage = function() {

    const content = document.getElementById('content');

    const menuContainer = document.createElement('div');
        menuContainer.classList.add('menu-container');
        menuContainer.setAttribute('id', 'menu-items');

        // Coffee Menu Items
        const coffeeSpecials = document.createElement('div');
            coffeeSpecials.classList.add('food-items');
            coffeeSpecials.setAttribute('id', 'coffee-specials-options');

            const icedLatte = document.createElement('div');
                icedLatte.classList.add('coffee-specials-items');
                icedLatte.setAttribute('id', 'iced-latte');

                const icedLatteTitle = document.createElement('p');
                    icedLatteTitle.classList.add('menu-items-text');

                const icedLatteImg = document.createElement('img');
                    icedLatteImg.classList.add('menu-imgs');
                    icedLatteImg.src = "../imgs/menu-imgs/coffee/iced-latte.jpg";

                const icedLatteDescription = document.createElement('p');
                    icedLatteDescription.classList.add('menu-items-text');

                const icedLattePrice = document.createElement('p');
                    icedLattePrice.classList.add('menu-items-text');

                icedLatte.appendChild(icedLatteTitle);
                icedLatte.appendChild(icedLatteImg);
                icedLatte.appendChild(icedLatteDescription);
                icedLatte.appendChild(icedLattePrice);
                    

            const latte = document.createElement('div');
                latte.classList.add('coffee-specials-items');
                latte.setAttribute('id', 'latte');

                const latteTitle = document.createElement('p');
                    latteTitle.classList.add('menu-items-text');

                const latteImg = document.createElement('img');
                    latteImg.classList.add('menu-imgs');
                    latteImg.src = "../imgs/menu-imgs/coffee/latte.jpg";

                const latteDescription = document.createElement('p');
                    latteDescription.classList.add('menu-items-text');

                const lattePrice = document.createElement('p');
                    lattePrice.classList.add('menu-items-text');

                latte.appendChild(latteTitle);
                latte.appendChild(latteImg);
                latte.appendChild(latteDescription);
                latte.appendChild(lattePrice);

            const cappucino = document.createElement('div');
                cappucino.classList.add('coffee-specials-items');
                cappucino.setAttribute('id', 'cappucino');

                const cappucinoTitle = document.createElement('p');
                    cappucinoTitle.classList.add('menu-items-text');

                const cappucinoImg = document.createElement('img');
                    cappucinoImg.classList.add('menu-imgs');
                    cappucinoImg.src = "../imgs/menu-imgs/coffee/cappucino.jpg";

                const cappucinoDescription = document.createElement('p');
                    cappucinoDescription.classList.add('menu-items-text');

                const cappucinoPrice = document.createElement('p');
                    cappucinoPrice.classList.add('menu-items-text');

                cappucino.appendChild(cappucinoTitle);
                cappucino.appendChild(cappucinoImg);
                cappucino.appendChild(cappucinoDescription);
                cappucino.appendChild(cappucinoPrice);

            const cortado = document.createElement('div');
                cortado.classList.add('coffee-specials-items');
                cortado.setAttribute('id', 'cortado');

                const cortadoTitle = document.createElement('p');
                    cortadoTitle.classList.add('menu-items-text');

                const cortadoImg = document.createElement('img');
                    cortadoImg.classList.add('menu-imgs');
                    cortadoImg.src = "../imgs/menu-imgs/coffee/cortado.jpg";

                const cortadoDescription = document.createElement('p');
                    cortadoDescription.classList.add('menu-items-text');

                const cortadoPrice = document.createElement('p');
                    cortadoPrice.classList.add('menu-items-text');

                cortado.appendChild(cortadoTitle);
                cortado.appendChild(cortadoImg);
                cortado.appendChild(cortadoDescription);
                cortado.appendChild(cortadoPrice);
    

            const americano = document.createElement('div');
                americano.classList.add('coffee-specials-items');
                americano.setAttribute('id', 'americano');

                const americanoTitle = document.createElement('p');
                    americanoTitle.classList.add('menu-items-text');
            
                const americanoImg = document.createElement('img');
                    americanoImg.classList.add('menu-imgs');
                    americanoImg.src = "../imgs/menu-imgs/coffee/americano.jpg";

                const americanoDescription = document.createElement('p');
                    americanoDescription.classList.add('menu-items-text');

                const americanoPrice = document.createElement('p');
                    americanoPrice.classList.add('menu-items-text');

                americano.appendChild(americanoTitle);
                americano.appendChild(americanoImg);
                americano.appendChild(americanoDescription);
                americano.appendChild(americanoPrice);

            const affogato = document.createElement('div');
                affogato.classList.add('coffee-specials-items');
                affogato.setAttribute('id', 'affogato');

                const affogatoTitle = document.createElement('p');
                    affogatoTitle.classList.add('menu-items-text');

                const affogatoImg = document.createElement('img');
                    affogatoImg.classList.add('menu-imgs');
                    affogatoImg.src = "../imgs/menu-imgs/coffee/affogato.jpg";

                const affogatoDescription = document.createElement('p');
                    affogatoDescription.classList.add('menu-items-text');

                const affogatoPrice = document.createElement('p');
                    affogatoPrice.classList.add('menu-items-text');

                affogato.appendChild(affogatoTitle);
                affogato.appendChild(affogatoImg);
                affogato.appendChild(affogatoDescription);
                affogato.appendChild(affogatoPrice);

        // Breakfast Menu Items
        const breakfastOptions = document.createElement('div');
            breakfastOptions.classList.add('food-items');
            breakfastOptions.setAttribute('id', 'breakfast-options');

            const breakfastWaffles = document.createElement('div');
                breakfastWaffles.classList.add('breakfast-items');
                breakfastWaffles.setAttribute('id', 'breakfastWaffles');

                const breakfastWafflesTitle = document.createElement('p');
                    breakfastWafflesTitle.classList.add('menu-items-text');

                const breakfastWafflesImg = document.createElement('img');
                    breakfastWafflesImg.classList.add('menu-imgs');
                    breakfastWafflesImg.src = "../imgs/menu-imgs/breakfast/waffles.jpg";

                const breakfastWafflesDescription = document.createElement('p');
                    breakfastWafflesDescription.classList.add('menu-items-text');

                const breakfastWafflesPrice = document.createElement('p');
                    breakfastWafflesPrice.classList.add('menu-items-text');

                breakfastWaffles.appendChild(breakfastWafflesTitle);
                breakfastWaffles.appendChild(breakfastWafflesImg);
                breakfastWaffles.appendChild(breakfastWafflesDescription);
                breakfastWaffles.appendChild(breakfastWafflesPrice);

            const breakfastMuffins = document.createElement('div');
                breakfastMuffins.classList.add('breakfast-items');
                breakfastMuffins.setAttribute('id', 'breakfastMuffins');

                const breakfastMuffinsTitle = document.createElement('p');
                    breakfastMuffinsTitle.classList.add('menu-items-text');

                const breakfastMuffinsImg = document.createElement('img');
                    breakfastMuffinsImg.classList.add('menu-imgs');
                    breakfastMuffinsImg.src = "../imgs/menu-imgs/breakfast/muffins.jpg";

                const breakfastMuffinsDescription = document.createElement('p');
                    breakfastMuffinsDescription.classList.add('menu-items-text');

                const breakfastMuffinsPrice = document.createElement('p');
                    breakfastMuffinsPrice.classList.add('menu-items-text');

                breakfastMuffins.appendChild(breakfastMuffinsTitle);
                breakfastMuffins.appendChild(breakfastMuffinsImg);
                breakfastMuffins.appendChild(breakfastMuffinsDescription);
                breakfastMuffins.appendChild(breakfastMuffinsPrice);

            const breakfastSandwich = document.createElement('div');
                breakfastSandwich.classList.add('breakfast-items');
                breakfastSandwich.setAttribute('id', 'breakfastSandwich');

                const breakfastSandwichTitle = document.createElement('p');
                    breakfastSandwichTitle.classList.add('menu-items-text');

                const breakfastSandwichImg = document.createElement('img');
                    breakfastSandwichImg.classList.add('menu-imgs');
                    breakfastSandwichImg.src = "../imgs/menu-imgs/breakfast/sandwich.jpg";

                const breakfastSandwichDescription = document.createElement('p');
                    breakfastSandwichDescription.classList.add('menu-items-text');

                const breakfastSandwichPrice = document.createElement('p');
                    breakfastSandwichPrice.classList.add('menu-items-text');

                breakfastSandwich.appendChild(breakfastSandwichTitle);
                breakfastSandwich.appendChild(breakfastSandwichImg);
                breakfastSandwich.appendChild(breakfastSandwichDescription);
                breakfastSandwich.appendChild(breakfastSandwichPrice);

        // Lunch Menu Items
        const lunchOptions = document.createElement('div');
            lunchOptions.classList.add('food-items');
            lunchOptions.setAttribute('id', 'lunch-options');

            const lunchPanini = document.createElement('div');
                lunchPanini.classList.add('lunch-items');
                lunchPanini.setAttribute('id', 'lunchPanini');

                const lunchPaniniTitle = document.createElement('p');
                    lunchPaniniTitle.classList.add('menu-items-text');

                const lunchPaniniImg = document.createElement('img');
                    lunchPaniniImg.classList.add('menu-imgs');
                    lunchPaniniImg.src = "../imgs/menu-imgs/lunch/panini.jpg";

                const lunchPaniniDescription = document.createElement('p');
                    lunchPaniniDescription.classList.add('menu-items-text');

                const lunchPaniniPrice = document.createElement('p');
                    lunchPaniniPrice.classList.add('menu-items-text');

                lunchPanini.appendChild(lunchPaniniTitle);
                lunchPanini.appendChild(lunchPaniniImg);
                lunchPanini.appendChild(lunchPaniniDescription);
                lunchPanini.appendChild(lunchPaniniPrice);

            const lunchSweetPotatoBowl = document.createElement('div');
                lunchSweetPotatoBowl.classList.add('lunch-items');
                lunchSweetPotatoBowl.setAttribute('id', 'lunchSweetPotatoBowl');

                const lunchSweetPotatoBowlTitle = document.createElement('p');
                    lunchSweetPotatoBowlTitle.classList.add('menu-items-text');

                const lunchSweetPotatoBowlImg = document.createElement('img');
                    lunchSweetPotatoBowlImg.classList.add('menu-imgs');
                    lunchPaniniImg.src = "../imgs/menu-imgs/lunch/sweet-potato-bowl.jpg";

                const lunchSweetPotatoBowlDescription = document.createElement('p');
                    lunchSweetPotatoBowlDescription.classList.add('menu-items-text');

                const lunchSweetPotatoBowlPrice = document.createElement('p');
                    lunchSweetPotatoBowlPrice.classList.add('menu-items-text');

                lunchSweetPotatoBowl.appendChild(lunchSweetPotatoBowlTitle);
                lunchSweetPotatoBowl.appendChild(lunchSweetPotatoBowlImg);
                lunchSweetPotatoBowl.appendChild(lunchSweetPotatoBowlDescription);
                lunchSweetPotatoBowl.appendChild(lunchSweetPotatoBowlPrice);

            const lunchPizza = document.createElement('div');
                lunchPizza.classList.add('lunch-items');
                lunchPizza.setAttribute('id', 'lunchPizza');

                const lunchPizzaTitle = document.createElement('p');
                    lunchPizzaTitle.classList.add('menu-items-text');

                const lunchPizzaImg = document.createElement('img');
                    lunchPizzaImg.classList.add('menu-imgs');
                    lunchPaniniImg.src = "../imgs/menu-imgs/lunch/pizza.jpg";

                const lunchPizzaDescription = document.createElement('p');
                    lunchPizzaDescription.classList.add('menu-items-text');

                const lunchPizzaPrice = document.createElement('p');
                    lunchPizzaPrice.classList.add('menu-items-text');

                lunchPizza.appendChild(lunchPizzaTitle);
                lunchPizza.appendChild(lunchPizzaImg);
                lunchPizza.appendChild(lunchPizzaDescription);
                lunchPizza.appendChild(lunchPizzaPrice);

        coffeeSpecials.appendChild(icedLatte);
        coffeeSpecials.appendChild(latte);
        coffeeSpecials.appendChild(cappucino);
        coffeeSpecials.appendChild(cortado);
        coffeeSpecials.appendChild(americano);
        coffeeSpecials.appendChild(affogato);

        breakfastOptions.appendChild(breakfastWaffles);
        breakfastOptions.appendChild(breakfastMuffins);
        breakfastOptions.appendChild(breakfastSandwich);

        lunchOptions.appendChild(lunchPanini);
        lunchOptions.appendChild(lunchSweetPotatoBowl);
        lunchOptions.appendChild(lunchPizza);

    menuContainer.appendChild(coffeeSpecials);
    menuContainer.appendChild(breakfastOptions);
    menuContainer.appendChild(lunchOptions);
    content.appendChild(menuContainer);
};
