const input = document.getElementById("header-input");
const home = document.getElementById("header-home");
const contact = document.getElementById("header-contact");
const about = document.getElementById("header-about");
const search = document.getElementById("header-search");
const iconSearch = document.querySelector("#header-search i");

function headerManagement() {
    if (input.style.display === "block") {
        home.style.display = "block";
        contact.style.display = "block";
        about.style.display = "block";
        input.addEventListener("input", function (event) {
            searchFunction(event.target.value);
        });
        input.style.display = "none";
        iconSearch.classList.remove("fa-solid", "fa-x");
        iconSearch.classList.add("fas", "fa-search");
    } else {
        home.style.display = "none";
        contact.style.display = "none";
        about.style.display = "none";
        input.addEventListener("input", function (event) {
            searchFunction(event.target.value);
        });
        input.style.display = "block";
        iconSearch.classList.remove("fas", "fa-search");
        iconSearch.classList.add("fa-solid", "fa-x");
    }
}

function searchFunction(searchValue) {
    const filter = searchValue.toLowerCase();
    const items = document.querySelectorAll(".gallery-item");

    items.forEach((item) => {
        const title = item
            .querySelector("a")
            .getAttribute("data-title")
            .toLowerCase();
        if (title.includes(filter)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
