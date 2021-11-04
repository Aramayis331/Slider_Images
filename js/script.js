let sliderElements = [
	{
		el: 'images1.jpg',
		name: 'Snake',
	}, 
	{
		el: 'images2.jpg',
		name: 'Turtle',
	}, 
	{
		el: 'images3.jpg',
		name: 'Fox',
	}, 
	{
		el: 'images4.jpg',
		name: 'Elephant',
	}, 
	{
		el: 'images5.jpg',
		name: 'Lion',
	},
	{
		el: 'images6.jpg',
		name: 'Wolf',
	},
	{
		el: 'images7.jpg',
		name: 'Parrot',
	},
	{
		el: 'images8.jpg',
		name: 'Tiger',
	},
	{
		el: 'images9.jpg',
		name: 'Crab',
	},
	{
		el: 'images10.jpg',
		name: 'Deer',
	},
]

function addElementsSlider() {
	let htmlText = '';
	let slider = document.querySelector('.slider');
	sliderElements.map(({el, name}) => {
		htmlText += `
			<div class='item'>
				<div class='item_img'>
					<img src='images/${el}' class='element_img'>
				</div>
				<div class='item_text'>
					<p>${name}</p>
				</div>
			</div>
		`
		slider.innerHTML = htmlText;
	})
}
addElementsSlider()
function addDots() {
	let htmlTextDots = ''
	let dots = document.querySelector('.dots');
	sliderElements.forEach(({el}) => {
		htmlTextDots += `
			<div class='elementDot'></div>
		`
		dots.innerHTML = htmlTextDots;
	})
}
addDots();

let element_img = document.querySelectorAll('.element_img');
let slider = document.querySelector('.slider');
let elementDot = document.querySelectorAll('.elementDot');
let activClass = 'elementDotHover';
let sliderElementsLength = sliderElements.length;
let counter = Math.floor(sliderElementsLength/2);
let size = element_img[0].clientWidth;
slider.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
setInterval(function(){
	size = element_img[0].clientWidth;
	slider.style.transition = 'transform 0s ease-in-out';
	slider.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
	elementDot[counter].classList.add(activClass);
}, 500);

function arrow_left() {
	let arrow_left = document.querySelector('.arrow_left');
	arrow_left.addEventListener('click', () => {
		if (counter > 0) {
			elementDot[counter].classList.remove(activClass);
			counter--;
			slider.style.transition = 'transform 0.5s ease-in-out';
			slider.style.transform = 'translateX(' + (-size * counter)+ 1 + 'px)'; 
		}else {
			elementDot[counter].classList.remove(activClass);
			counter = sliderElementsLength - 1;
			slider.style.transition = 'transform 0s ease-in-out';
			slider.style.transform = 'translateX(' + (-size * counter) + 'px)'; 
		}
		elementDot[counter].classList.add(activClass);
	})
}
arrow_left();
function arrow_right() {
	let arrow_right = document.querySelector('.arrow_right');
	arrow_right.addEventListener('click', () => {
		if(counter < sliderElementsLength - 1) {
			elementDot[counter].classList.remove(activClass);
			counter++;
			slider.style.transition = 'transform 0.5s ease-in-out';
			slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
		} else {
			elementDot[counter].classList.remove(activClass);
			counter = 0;
			slider.style.transition = 'transform 0s ease-in-out';
			slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
		}
		elementDot[counter].classList.add(activClass);
	})
}
arrow_right();

function clickDots() {
	elementDot.forEach((el, i) => {
		el.addEventListener('click', () => {
			elementDot[counter].classList.remove(activClass);
			counter = i;
			slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
			elementDot[counter].classList.add(activClass);
		})
	})
}
clickDots();

setInterval(function() {
	if(counter < sliderElementsLength - 1) {
		elementDot[counter].classList.remove(activClass);
		counter++;
		slider.style.transition = 'transform 0.5s ease-in-out';
		slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
	} else {
		elementDot[counter].classList.remove(activClass);
		counter = 0;
		slider.style.transition = 'transform 0s ease-in-out';
		slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
	elementDot[counter].classList.add(activClass);
}, 5000)