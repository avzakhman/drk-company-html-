
const button = document.querySelector('.header__datenrettung');
const links = document.querySelectorAll('.header__desktop-link');
const menu = document.querySelector('.menu');
button.addEventListener('click', ()=> {
    button.classList.toggle('header__datenrettung_active');
    links.forEach((link)=> {
        link.classList.toggle('header__desktop-link_hidden');
    });
    menu.classList.toggle('menu__active');
})



const langButton = document.querySelector('.header__sprache');
const langLinks = document.querySelector('.header__sprache-menu');
langButton.addEventListener('click', ()=> {
    langLinks.classList.toggle('header__sprache-menu_active');
});


const tabs = document.querySelectorAll('.fragen-tabs__card');

tabs.forEach((tab)=> {
    tab.addEventListener('click', ()=> {
        let tabParagraph = tab.querySelector('.fragen-tabs__content'),
            button = tab.querySelector('.fragen-tabs__open');
        tabParagraph.classList.toggle('fragen-tabs__content_active');
        button.classList.toggle('fragen-tabs__open_active');

    })
});

// tab.addEventListener('click', ()=> {
//     tabParagraph.classList.toggle('fragen-tabs__content_active');
// })