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
	    presentation.style = 'width: 100%; background-color: #082362';
	    description.style = 'width: 0';
	    wrapper.style = 'display: none';
	    play.style = 'display: none';
	});

	document.addEventListener('click', function (evt) {
	    if (evt.target === videoClose) {
	        video.classList.add('visually-hidden');
	        presentation.style = 'width: 50%';
	        description.style = 'width: 50%';
	        wrapper.style = 'display: block';
	        play.style = 'display: block';
	    }
	});
})();