function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodImage = document.createElement("img");
    foodImage.src = `Images/${name.toLowerCase()}.svg`
    foodImage.alt = `${name}`;

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(
        createMenuItem("BigMac", "The Big Mac: Iconic double-decker burger from McDonald's.")
    );

    menu.appendChild(
        createMenuItem("EggBurger", "Egg Burger: Tasty patty with a fried egg.")
    );

    menu.appendChild(
        createMenuItem("FishBurger", "Fish Burger: Fish patty delight.")
    );

    menu.appendChild(
        createMenuItem("OnionBurger", "Onion Burger: Tangy onion twist.")
    );

    menu.appendChild(
        createMenuItem("RealBurger", "Real Burger: Genuine satisfaction.")
    );

    menu.appendChild(
        createMenuItem("TomatoBurger", "Tomato Burger: Burger with fresh tomato.")
    );

    return menu;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;