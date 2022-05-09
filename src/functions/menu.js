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
            
            const coffeeTitle = document.createElement('h3');
                coffeeTitle.classList.add('menu-title');
                coffeeTitle.textContent = "~ Specialty Coffee ~";
                coffeeTitle.setAttribute('id', 'coffee-title');

            const icedLatte = document.createElement('div');
                icedLatte.classList.add('coffee-specials-items');
                icedLatte.setAttribute('id', 'iced-latte');

                const icedLatteTitle = document.createElement('p');
                    icedLatteTitle.classList.add('menu-title-text');
                    icedLatteTitle.textContent = "Iced Latte"

                const icedLatteImg = document.createElement('img');
                    icedLatteImg.classList.add('menu-imgs');
                    icedLatteImg.src = "../src/imgs/menu-imgs/coffee/iced-latte.jpg";

                const icedLatteDescription = document.createElement('p');
                    icedLatteDescription.classList.add('menu-items-text');
                    icedLatteDescription.textContent = "Double shot of Espresso w/ a spoonful of sugar and a dash of vanilla"

                const icedLattePrice = document.createElement('p');
                    icedLattePrice.classList.add('menu-items-text');
                    icedLattePrice.textContent = "$4.99";

                icedLatte.appendChild(icedLatteTitle);
                icedLatte.appendChild(icedLatteImg);
                icedLatte.appendChild(icedLatteDescription);
                icedLatte.appendChild(icedLattePrice);
                    

            const latte = document.createElement('div');
                latte.classList.add('coffee-specials-items');
                latte.setAttribute('id', 'latte');

                const latteTitle = document.createElement('p');
                    latteTitle.classList.add('menu-title-text');
                    latteTitle.textContent = "Latte";

                const latteImg = document.createElement('img');
                    latteImg.classList.add('menu-imgs');
                    latteImg.src = "../src/imgs/menu-imgs/coffee/latte.jpg";

                const latteDescription = document.createElement('p');
                    latteDescription.classList.add('menu-items-text');
                    latteDescription.textContent = "Double shot of Espresso w/ steamed milk"

                const lattePrice = document.createElement('p');
                    lattePrice.classList.add('menu-items-text');
                    lattePrice.textContent = "$3.99";

                latte.appendChild(latteTitle);
                latte.appendChild(latteImg);
                latte.appendChild(latteDescription);
                latte.appendChild(lattePrice);

            const cappucino = document.createElement('div');
                cappucino.classList.add('coffee-specials-items');
                cappucino.setAttribute('id', 'cappucino');

                const cappucinoTitle = document.createElement('p');
                    cappucinoTitle.classList.add('menu-title-text');
                    cappucinoTitle.textContent = "Cappucino";

                const cappucinoImg = document.createElement('img');
                    cappucinoImg.classList.add('menu-imgs');
                    cappucinoImg.src = "../src/imgs/menu-imgs/coffee/cappucino.jpg";

                const cappucinoDescription = document.createElement('p');
                    cappucinoDescription.classList.add('menu-items-text');
                    cappucinoDescription.textContent = "Double shot of Espresso w/ foamed milk";

                const cappucinoPrice = document.createElement('p');
                    cappucinoPrice.classList.add('menu-items-text');
                    cappucinoPrice.textContent = "$2.99";

                cappucino.appendChild(cappucinoTitle);
                cappucino.appendChild(cappucinoImg);
                cappucino.appendChild(cappucinoDescription);
                cappucino.appendChild(cappucinoPrice);

            const cortado = document.createElement('div');
                cortado.classList.add('coffee-specials-items');
                cortado.setAttribute('id', 'cortado');

                const cortadoTitle = document.createElement('p');
                    cortadoTitle.classList.add('menu-title-text');
                    cortadoTitle.textContent = "Cortado";

                const cortadoImg = document.createElement('img');
                    cortadoImg.classList.add('menu-imgs');
                    cortadoImg.src = "../src/imgs/menu-imgs/coffee/cortado.jpg";

                const cortadoDescription = document.createElement('p');
                    cortadoDescription.classList.add('menu-items-text');
                    cortadoDescription.textContent = "Shot glass of Espresso w/ honey, vanilla, and some steamed milk";

                const cortadoPrice = document.createElement('p');
                    cortadoPrice.classList.add('menu-items-text');
                    cortadoPrice.textContent = "$3.50";

                cortado.appendChild(cortadoTitle);
                cortado.appendChild(cortadoImg);
                cortado.appendChild(cortadoDescription);
                cortado.appendChild(cortadoPrice);
    

            const americano = document.createElement('div');
                americano.classList.add('coffee-specials-items');
                americano.setAttribute('id', 'americano');

                const americanoTitle = document.createElement('p');
                    americanoTitle.classList.add('menu-title-text');
                    americanoTitle.textContent = "Americano";
            
                const americanoImg = document.createElement('img');
                    americanoImg.classList.add('menu-imgs');
                    americanoImg.src = "../src/imgs/menu-imgs/coffee/americano.jpg";

                const americanoDescription = document.createElement('p');
                    americanoDescription.classList.add('menu-items-text');
                    americanoDescription.textContent = "Double shot of Espresso w/ 16oz of heated water";

                const americanoPrice = document.createElement('p');
                    americanoPrice.classList.add('menu-items-text');
                    americanoPrice.textContent = "$2.99";

                americano.appendChild(americanoTitle);
                americano.appendChild(americanoImg);
                americano.appendChild(americanoDescription);
                americano.appendChild(americanoPrice);

            const affogato = document.createElement('div');
                affogato.classList.add('coffee-specials-items');
                affogato.setAttribute('id', 'affogato');

                const affogatoTitle = document.createElement('p');
                    affogatoTitle.classList.add('menu-title-text');
                    affogatoTitle.textContent = "Affogato";

                const affogatoImg = document.createElement('img');
                    affogatoImg.classList.add('menu-imgs');
                    affogatoImg.src = "../src/imgs/menu-imgs/coffee/affogato.jpg";

                const affogatoDescription = document.createElement('p');
                    affogatoDescription.classList.add('menu-items-text');
                    affogatoDescription.textContent = "Double shot of Espresso over 2 scoops of ice-cream";

                const affogatoPrice = document.createElement('p');
                    affogatoPrice.classList.add('menu-items-text');
                    affogatoPrice.textContent = "$6.99";

                affogato.appendChild(affogatoTitle);
                affogato.appendChild(affogatoImg);
                affogato.appendChild(affogatoDescription);
                affogato.appendChild(affogatoPrice);

        // Breakfast Menu Items
        const breakfastOptions = document.createElement('div');
            breakfastOptions.classList.add('food-items');
            breakfastOptions.setAttribute('id', 'breakfast-options');

            const breakfastTitle = document.createElement('h3');
                breakfastTitle.classList.add('menu-title');
                breakfastTitle.textContent = "~ Breakfast ~";
                breakfastTitle.setAttribute('id', 'breakfast-title');

            const waffles = document.createElement('div');
                waffles.classList.add('breakfast-items');
                waffles.setAttribute('id', 'waffles');

                const wafflesTitle = document.createElement('p');
                    wafflesTitle.classList.add('menu-title-text');
                    wafflesTitle.textContent = "Waffles";

                const wafflesImg = document.createElement('img');
                    wafflesImg.classList.add('menu-imgs');
                    wafflesImg.src = "../src/imgs/menu-imgs/breakfast/waffles.jpg";

                const wafflesDescription = document.createElement('p');
                    wafflesDescription.classList.add('menu-items-text');
                    wafflesDescription.textContent = "3 waffles w/ blueberries and maple syrup";

                const wafflesPrice = document.createElement('p');
                    wafflesPrice.classList.add('menu-items-text');
                    wafflesPrice.textContent = "$8.99";

                waffles.appendChild(wafflesTitle);
                waffles.appendChild(wafflesImg);
                waffles.appendChild(wafflesDescription);
                waffles.appendChild(wafflesPrice);

            const muffins = document.createElement('div');
                muffins.classList.add('breakfast-items');
                muffins.setAttribute('id', 'muffins');

                const muffinsTitle = document.createElement('p');
                    muffinsTitle.classList.add('menu-title-text');
                    muffinsTitle.textContent = "Muffins";

                const muffinsImg = document.createElement('img');
                    muffinsImg.classList.add('menu-imgs');
                    muffinsImg.src = "../src/imgs/menu-imgs/breakfast/muffins.jpg";

                const muffinsDescription = document.createElement('p');
                    muffinsDescription.classList.add('menu-items-text');
                    muffinsDescription.textContent = "One large muffin";

                const muffinsPrice = document.createElement('p');
                    muffinsPrice.classList.add('menu-items-text');
                    muffinsPrice.textContent = "$3.99";

                muffins.appendChild(muffinsTitle);
                muffins.appendChild(muffinsImg);
                muffins.appendChild(muffinsDescription);
                muffins.appendChild(muffinsPrice);

            const sandwich = document.createElement('div');
                sandwich.classList.add('breakfast-items');
                sandwich.setAttribute('id', 'sandwich');

                const sandwichTitle = document.createElement('p');
                    sandwichTitle.classList.add('menu-title-text');
                    sandwichTitle.textContent = "Sandwich";

                const sandwichImg = document.createElement('img');
                    sandwichImg.classList.add('menu-imgs');
                    sandwichImg.src = "../src/imgs/menu-imgs/breakfast/sandwich.jpg";

                const sandwichDescription = document.createElement('p');
                    sandwichDescription.classList.add('menu-items-text');
                    sandwichDescription.textContent = "Bagel sandwich w/ lettuce, egg, and sausage";

                const sandwichPrice = document.createElement('p');
                    sandwichPrice.classList.add('menu-items-text');
                    sandwichPrice.textContent = "$5.99";

                sandwich.appendChild(sandwichTitle);
                sandwich.appendChild(sandwichImg);
                sandwich.appendChild(sandwichDescription);
                sandwich.appendChild(sandwichPrice);

        // Lunch Menu Items
        const lunchOptions = document.createElement('div');
            lunchOptions.classList.add('food-items');
            lunchOptions.setAttribute('id', 'lunch-options');

            const lunchTitle = document.createElement('h3');
                lunchTitle.classList.add('menu-title');
                lunchTitle.textContent = "~ Lunch ~";
                lunchTitle.setAttribute('id', 'lunch-title');

            const panini = document.createElement('div');
                panini.classList.add('lunch-items');
                panini.setAttribute('id', 'panini');

                const paniniTitle = document.createElement('p');
                    paniniTitle.classList.add('menu-title-text');
                    paniniTitle.textContent = "Panini";

                const paniniImg = document.createElement('img');
                    paniniImg.classList.add('menu-imgs');
                    paniniImg.src = "../src/imgs/menu-imgs/lunch/panini.jpg";

                const paniniDescription = document.createElement('p');
                    paniniDescription.classList.add('menu-items-text');
                    paniniDescription.textContent = "Two grilled paninis w/ tomatoes, lettuce, shredded chicken, and cheese";

                const paniniPrice = document.createElement('p');
                    paniniPrice.classList.add('menu-items-text');
                    paniniPrice.textContent = "$7.99";

                panini.appendChild(paniniTitle);
                panini.appendChild(paniniImg);
                panini.appendChild(paniniDescription);
                panini.appendChild(paniniPrice);

            const sweetPotatoBowl = document.createElement('div');
                sweetPotatoBowl.classList.add('lunch-items');
                sweetPotatoBowl.setAttribute('id', 'sweetPotatoBowl');

                const sweetPotatoBowlTitle = document.createElement('p');
                    sweetPotatoBowlTitle.classList.add('menu-title-text');
                    sweetPotatoBowlTitle.textContent = "Sweet Potato Bowl";

                const sweetPotatoBowlImg = document.createElement('img');
                    sweetPotatoBowlImg.classList.add('menu-imgs');
                    sweetPotatoBowlImg.src = "../src/imgs/menu-imgs/lunch/sweet-potato-bowl.jpg";

                const sweetPotatoBowlDescription = document.createElement('p');
                    sweetPotatoBowlDescription.classList.add('menu-items-text');
                    sweetPotatoBowlDescription.textContent = "Bowl of sweet potato fries topped w/ sour cream, tomatoes, green onions, spinach, and valentina";

                const sweetPotatoBowlPrice = document.createElement('p');
                    sweetPotatoBowlPrice.classList.add('menu-items-text');
                    sweetPotatoBowlPrice.textContent = "$8.99";

                sweetPotatoBowl.appendChild(sweetPotatoBowlTitle);
                sweetPotatoBowl.appendChild(sweetPotatoBowlImg);
                sweetPotatoBowl.appendChild(sweetPotatoBowlDescription);
                sweetPotatoBowl.appendChild(sweetPotatoBowlPrice);

            const pizza = document.createElement('div');
                pizza.classList.add('lunch-items');
                pizza.setAttribute('id', 'pizza');

                const pizzaTitle = document.createElement('p');
                    pizzaTitle.classList.add('menu-title-text');
                    pizzaTitle.textContent = "Pizza";

                const pizzaImg = document.createElement('img');
                    pizzaImg.classList.add('menu-imgs');
                    pizzaImg.src = "../src/imgs/menu-imgs/lunch/pizza.jpg";

                const pizzaDescription = document.createElement('p');
                    pizzaDescription.classList.add('menu-items-text');
                    pizzaDescription.textContent = "One 12\" cheese pizza topped with tomatoes, olives, and red peppers";

                const pizzaPrice = document.createElement('p');
                    pizzaPrice.classList.add('menu-items-text');
                    pizzaPrice.textContent = "$9";

                pizza.appendChild(pizzaTitle);
                pizza.appendChild(pizzaImg);
                pizza.appendChild(pizzaDescription);
                pizza.appendChild(pizzaPrice);

        coffeeSpecials.appendChild(coffeeTitle);
        coffeeSpecials.appendChild(icedLatte);
        coffeeSpecials.appendChild(latte);
        coffeeSpecials.appendChild(cappucino);
        coffeeSpecials.appendChild(cortado);
        coffeeSpecials.appendChild(americano);
        coffeeSpecials.appendChild(affogato);

        breakfastOptions.appendChild(breakfastTitle);
        breakfastOptions.appendChild(waffles);
        breakfastOptions.appendChild(muffins);
        breakfastOptions.appendChild(sandwich);

        lunchOptions.appendChild(lunchTitle);
        lunchOptions.appendChild(panini);
        lunchOptions.appendChild(sweetPotatoBowl);
        lunchOptions.appendChild(pizza);

    menuContainer.appendChild(coffeeSpecials);
    menuContainer.appendChild(breakfastOptions);
    menuContainer.appendChild(lunchOptions);
    content.appendChild(menuContainer);
};
