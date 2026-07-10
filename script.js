const controls = document.querySelectorAll('button');
const slides = document.querySelectorAll('img');
let slideIndex = 0;
let intervalId = null;

document.addEventListener('DOMContentLoaded', initializeSlides);

function initializeSlides() {
	if (slides.length > 0) {
		slides[slideIndex].classList.add('acitve-slide');
		intervalId = setInterval(handleNextSlide, 5000);
	}
}

controls.forEach((btn) => {
	btn.addEventListener('click', () => {
		if (btn.classList.contains('prev')) {
			handlePrevSlide();
		} else if (btn.classList.contains('next')) {
			handleNextSlide();
		}
	});
});
function showSlide(index) {
	if (index >= slides.length) {
		slideIndex = 0;
	} else if (index < 0) {
		slideIndex = slides.length - 1;
	}

	slides.forEach((slide) => {
		slide.classList.remove('acitve-slide');
	});
	slides[slideIndex].classList.add('acitve-slide');
}

function handleNextSlide() {
	slideIndex++;
	showSlide(slideIndex);
}
function handlePrevSlide() {
	clearInterval(intervalId);
	slideIndex--;
	showSlide(slideIndex);
}
