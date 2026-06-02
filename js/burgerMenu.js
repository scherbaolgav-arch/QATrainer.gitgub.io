    /* 🍔 Бургер-меню */
function initBurgerMenu() {
    const burgerMenu = document.querySelector(".header__menu-burger");
    const listMenu = document.querySelector(".header__menu-list");

        /* Остановка СОБЫТИЯ */
    burgerMenu.addEventListener('click', (e) => {
        e.stopPropagation(); // 🔥  
        listMenu.classList.toggle("is-open");
        burgerMenu.classList.toggle("is-open");
    });

        /* слушаем resize */
    window.addEventListener('resize', () => {
        if (window.innerWidth > 700) {
            listMenu.classList.remove("is-open");
            burgerMenu.classList.remove("is-open");
        };
    });

        /* Закрытие по клику вне меню */
    document.addEventListener('click', (e) => { 
        if (!e.target.closest('.header__menu')) {
            listMenu.classList.remove("is-open");
            burgerMenu.classList.remove("is-open");
        };
    });
};