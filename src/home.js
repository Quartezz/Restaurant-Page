function createCenter() {
    const center = document.createElement("div");
    center.classList.add("center");

    const chefImage = document.createElement("img");
    chefImage.src = "Images/chef4.jpg";
    chefImage.alt = "Chef";

    center.appendChild(createParagraph("Since 1952: Savoring the Flavors of America"));
    center.appendChild(chefImage);
    center.appendChild(createParagraph("Just visit us or order online!"));

    return center;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createCenter());
}

export default loadHome;