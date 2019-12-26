'use strict';
(function() {
	var imagesWrapper = document.querySelector('.moments__images');
	var main = document.querySelector('main');
	var momentsImages = document.querySelectorAll('.moments__image');
	var slider = document.querySelector('.slider');
	var sliderImage = slider.querySelector('img');

	imagesWrapper.addEventListener('click', function(evt) {	
		var current = 0;

		for (var i = 0; i < momentsImages.length; i++) {
			if (evt.target === momentsImages[i]) {
				current = i + 1;
			}
		}

		if (evt.target.classList.contains('moments__image')) {
			slider.style = 'display: flex';
			sliderImage.src = 'img/happy-' + current + '.jpg';

		}

		
		slider.addEventListener('click', function(evt) {

			if (evt.target.classList.contains('slider__close')) {
				slider.style = 'display: none';
				current = 0;
			}

			var sliderNext = document.querySelector('.slider__next');
			var sliderBack = document.querySelector('.slider__back');

			if (evt.target.classList.contains('slider__next')) {
				current += 1;
				sliderImage.src = 'img/happy-' + current + '.jpg';
				sliderBack.style = 'visibility: visible';

				if (current > momentsImages.length) {
					current = 1;
					sliderImage.src = 'img/happy-' + current + '.jpg';
				}
			} else if (evt.target.classList.contains('slider__back')) {

				if (current <= 1) {
					current = momentsImages.length + 1;
					sliderImage.src = 'img/happy-' + current + '.jpg';
				}
				current -= 1;
				sliderImage.src = 'img/happy-' + current + '.jpg';
				sliderNext.style = 'visibility: visible';

				
			}
		});
	});


	// 



	

	// var onCloseButton = function (evt) {


	// };

	// var onArrowButtons = function (evt, current) {

	// };

	// // imagesWrapper.addEventListener('click', function(evt) {

	// // }

	

})();