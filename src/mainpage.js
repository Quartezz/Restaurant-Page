import loadHome from "./home";

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Stateside Eats & Vibes";

    header.appendChild(title);
    //header.appendChild(createNav());


    return header;
}

// function createNav() {
//     const nav = document.createElement("nav");
    
//     const homeButton = document.createElement("button");
//     homeButton.classList.add("button-nav");
//     homeButton.textContent = "Home";
//     homeButton.addEventListener("click", (e) => {
//         if (e.target.classList.contains("active")) return;
//         setActiveButton(homeButton);
//         loadHome();
//     });

//     const menuButton = document.createElement("button");
//     menuButton.classList.add("button-nav");
//     menuButton.textContent = "Menu";
//     menuButton.addEventListener("click", (e) => {
//         if (e.target.classList.contains("active")) return;
//         setActiveButton(menuButton);
//         loadMenu();
//     });

//     const contactButton = document.createElement("button");
//     contactButton.classList.add("button-nav");
//     contactButton.textContent = "Contact";
//     contactButton.addEventListener("click", (e) => {
//         if (e.target.classList.contains("active")) return;
//         setActiveButton(contactButton);
//         loadContact();
//     });

//     nav.appendChild(homeButton);
//     nav.appendChild(menuButton);
//     nav.appendChild(contactButton);

//     return nav;
// }

// function setActiveButton() {
//     const buttons = document.querySelectorAll(".button-nav");

//     buttons.forEach((button) => {
//         if (button !== this) {
//             button.classList.remove("active");
//         }
//     });

//     button.classList.add("active");
// }

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const copyright = document.createElement("p");
    copyright.textContent = `Copyright © ${new Date().getFullYear()} kamilmachel`;

    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/Quartezz"

    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fab");
    githubIcon.classList.add("fa-github");

    githubLink.appendChild(githubIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);

    return footer;
}



function createWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    //setActiveButton(document.querySelector(".button-nav"));
    loadHome();
}


export default createWebsite;


