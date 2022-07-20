let burgerBtn;
let logo;
let navbar;
let menu;
let navbarItems;
let navbarLinks;
let sections;

const prepareDOMElements = () => {
	burgerBtn = document.querySelector('.navbar__burger-btn');
	logo = document.querySelector('.navbar__logo');
	navbar = document.querySelector('.navbar');
	menu = document.querySelector('.navbar__items');
	navbarItems = document.querySelectorAll('.navbar__item');
	navbarLinks = document.querySelectorAll('.navbar__item a');
	sections = document.querySelectorAll('.scrollspy');
};

const prepareDOMEvents = () => {
	burgerBtn.addEventListener('click', showMenu);
	logo.addEventListener('click', closeMenu);
	navbarItems.forEach((item) => item.addEventListener('click', closeMenu));
	window.addEventListener('scroll', scrollSpy);
};

const showMenu = () => {
	menu.classList.toggle('show-menu');
	burgerBtn.classList.toggle('is-active');
};

const closeMenu = () => {
	burgerBtn.classList.remove('is-active');
	menu.classList.remove('show-menu');
};

const scrollSpy = () => {
	sections.forEach((section) => {
		let top = window.scrollY;
		let offset = section.offsetTop - 300;
		let height = section.offsetHeight;
		let id = section.getAttribute('id');

		if (top >= offset && top < offset + height) {
			navbarItems.forEach((item) => {
				item.classList.remove('active');
				document.querySelector('.navbar__item a[href*=' + id + ']').parentElement.classList.add('active');
			});
		}
	});
};

prepareDOMElements();
prepareDOMEvents();
