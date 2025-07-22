var currentPoint = 0;
var leftArrow;
var rightArrow;
var points;
var images;

var animationTime = 400;

var textObject;
var texts = [
	'Поликлиника №1',
	'Очень красивый дом',
	'Невероятная дача',
	'Супер завод',
	'Поликлиника №2'
];

var interval;

document.addEventListener('DOMContentLoaded', function() {  
	textObject = document.getElementsByClassName('gallery-block')[0].getElementsByTagName('h4')[0];
	leftArrow = document.getElementsByClassName('gallery-arrow left')[0];
	rightArrow = document.getElementsByClassName('gallery-arrow right')[0];

	points = document.getElementsByClassName('point');
	images = document.getElementsByClassName('gallery-block')[0].getElementsByClassName('bg');

	ResetInterval();
	ChangeImage(0);

	for(var i = 0; i < points.length; i++) {
		points[i].onclick = function() {
			currentPoint = IndexOf(points, this);
			ChangeImage(currentPoint);
		};
	}

	leftArrow.onclick = function() {
		PreviousImage();
	};
	rightArrow.onclick = function() {
		NextImage();
	};

});

function PreviousImage() {
	if (currentPoint == 0) {
		currentPoint = points.length - 1;
	}
	else {
		currentPoint--;
	}
	ChangeImage(currentPoint);
}

function NextImage() {
	if(currentPoint == points.length - 1) {
		currentPoint = 0;
	}
	else {
		currentPoint++;
	}
	ChangeImage(currentPoint);
}

function ChangeImage(id) {
	ResetInterval();
	textObject.style.opacity = 0;
	setTimeout(function() {
		textObject.innerHTML = texts[id];
		textObject.style.opacity = 1;
	}, animationTime / 2);

	for(var i = 0; i < points.length; i++) {
		points[i].classList.remove('enabled');
		points[i].classList.remove('near');

		if(i == id) {
			points[i].classList.add('enabled');
		}
		if(Math.abs(i - id) == 1) {
			points[i].classList.add('near');
		}
	}
	for(var i = 0; i < images.length; i++) {
		images[i].style.transform = "translate(" + ((i - id - 0.5) * 100) + "%, -50%) ";
	}
}

function ResetInterval() {
	clearInterval(interval);
	interval = setInterval(function() {
		NextImage();
	}, 3000);
}

function IndexOf(array, obj) {
	for(var i = 0; i < array.length; i++) {
		if(obj == array[i]) {
			return i;
		}
	}
	return -1;
}