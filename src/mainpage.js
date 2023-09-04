function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Stateside Eats & Vibes";

    header.appendChild(title);


    return header;
}

function createWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
}


export default createWebsite;


