function deleteHeader() {
    const home = document.getElementById("header-home");
    const contact = document.getElementById("header-contact");
    const about = document.getElementById("header-about");
    const search = document.getElementById("header-search");
    home.remove();
    contact.remove();
    about.remove();
    search.remove();

    const ul = document.getElementById("main-menu");
    const searchBar = document.createElement("li");
    const input = document.createElement("input");
    input.classList.add("input");
    const placeHolder = document.createTextNode("Search");
    input.appendChild(placeHolder);
    searchBar.appendChild(input);
    ul.appendChild(searchBar);
    ul.appendChild(search);
}
