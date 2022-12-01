const searchFrom = document.querySelector(".search-form");
const cardItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");



const searchBtn = document.querySelector("#search-btn");
const cardBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");


searchBtn.addEventListener("click", function (){
    searchFrom.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchFrom)
        ) {
            searchFrom.classList.remove("active");
        }

    })
});

cardBtn.addEventListener("click", function (){
    cardItem.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(cardBtn) && !e.composedPath().includes(cardItem)
        ) {
            cardItem.classList.remove("active");
        }

    })
});

menuBtn.addEventListener("click", function (){
    navbar.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(menuBtn) && !e.composedPath().includes(navbar)
        ) {
            navbar.classList.remove("active");
        }

    })
});

