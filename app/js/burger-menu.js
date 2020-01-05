"use strict";
(function () {
	var header = document.querySelector('.header');
	var burgerMenu = document.querySelector('.header__menu-burger');
	var menuList = document.querySelector('.main-menu');
	var menuListHide = document.querySelector('.header__menu-hide');
	var mobileHeight = document.querySelectorAll('.main-menu--mobile');

	menuListHide.style = 'display: none';

	burgerMenu.addEventListener('click', function () {
		for (var i = 0; i < mobileHeight.length; i++) {
			mobileHeight[i].classList.remove('main-menu--mobile');
		}
		burgerMenu.style = 'display: none';
		menuListHide.style = 'display: block';
		header.classList.remove('container');
	});

	menuListHide.addEventListener('click', function () {
		for (var i = 0; i < mobileHeight.length; i++) {
			mobileHeight[i].classList.add('main-menu--mobile');
		}
		burgerMenu.style = 'display: block';
		menuListHide.style = 'display: none';
	});
})();