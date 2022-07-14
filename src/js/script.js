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

const closeMenu = () => {
	burgerBtn.classList.remove('is-active');
	menu.classList.remove('show-menu');
};

const prepareDOMEvents = () => {
	burgerBtn.addEventListener('click', showMenu);
	logo.addEventListener('click', closeMenu);
	navbarItems.forEach((item) => item.addEventListener('click', closeMenu));
};

prepareDOMElements();
prepareDOMEvents();
