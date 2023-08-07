// Всплывающее меню
const hamburger = document.querySelector(".hamburger");
const headerMenu = document.querySelector(".header__menu");
const footerMenu = document.querySelector(".footer__menu");

hamburger.addEventListener("click", function(){
    document.body.classList.toggle("lock");
    hamburger.classList.toggle("active");
    headerMenu.classList.toggle("active");
})


// Скролл меню
const menu = document.querySelectorAll(".menu");
const header = document.querySelector(".header");
const menuLinks = document.querySelectorAll(".menu__link");
menu.forEach(function(m){
    m.addEventListener("click", function(e){
        e.preventDefault();
        let id;
        if(e.target.classList.contains("menu__link")){
            id = e.target.getAttribute("href");
            const scrollToSection = document.querySelector(id).getBoundingClientRect().top + window.pageYOffset - header.offsetHeight-30;
            window.scrollTo({
                top: scrollToSection,
                behavior: "smooth",
            });
        }
        menuLinks.forEach((mL) => mL.classList.remove("active--item"));

        const links = document.querySelectorAll(`[href="${id}"]`);
        links.forEach((link) => link.classList.add("active--item"));

        document.body.classList.remove("lock");
        hamburger.classList.remove("active");
        headerMenu.classList.remove("active");
        footerMenu.classList.remove("active");
    });
});

// Products
const productsList = document.querySelector(".products__list");
const productItem = document.querySelectorAll(".products__item");
const product = document.querySelectorAll(".product");

productsList.addEventListener("click", function(e){
    e.preventDefault();
    const clicked = e.target;

    if(clicked.classList.contains("products__list")){
        return;
    }

    productItem.forEach((item) => item.classList.remove("active--item"));
    clicked.classList.add("active--item");

    // смена продукта
    product.forEach((prod) => prod.classList.remove("product_active"));
    const activeProduct = document.querySelector(`.product--${clicked.dataset.item}`);
    activeProduct.classList.add("product_active");

});