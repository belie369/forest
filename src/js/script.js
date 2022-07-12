let burgerBtn;
let logo;
let navbar;
let menu;
let navbarItems;
let navbarLinks;

const prepareDOMElements = () => {
	burgerBtn = document.querySelector('.navbar__burger-btn');
	logo = document.querySelector('.navbar__logo');
	navbar = document.querySelector('.navbar');
	menu = document.querySelector('.navbar__items');
	navbarItems = document.querySelectorAll('.navbar__item');
	navbarLinks = document.querySelectorAll('.navbar__item a');
};

const showMenu = () => {
	menu.classList.toggle('show-menu');
	burgerBtn.classList.toggle('is-active');
};

const prepareDOMEvents = () => {
	burgerBtn.addEventListener('click', showMenu);
};

prepareDOMElements();
prepareDOMEvents();
