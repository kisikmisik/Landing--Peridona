'use strict';
(function() {
	var presentation = document.querySelector(".how__presentation");
	var description = document.querySelector('.how__description');
	var video = presentation.querySelector('.how__video');
	var videoClose = document.querySelector('.how__video-close');
	var play = document.querySelector('.how__play-btn');
	var wrapper = document.querySelector('.how__desc-wrapper');

	presentation.addEventListener('click', function () {
	    video.classList.remove('visually-hidden');
	    presentation.classList.add('how__presentation--visible');
	    description.classList.add('how__description--hidden');
	    play.style = 'display: none'; 
	});

	document.addEventListener('click', function (evt) {
	    if (evt.target === videoClose) {
	        video.classList.add('visually-hidden');
	        presentation.classList.remove('how__presentation--visible');
	    	description.classList.remove('how__description--hidden');
	        play.style = 'display: block';
	    }
	});
})();