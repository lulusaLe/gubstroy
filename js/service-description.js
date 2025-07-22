var d = document;

var serviceObjects = [];

var animationTime = 400;

document.addEventListener('DOMContentLoaded', function() {
	serviceObjects = d.getElementsByClassName('service');
	for(var i = 0; i < serviceObjects.length; i++) {
		var headline = serviceObjects[i].getElementsByClassName('headline')[0];
		headline.onclick = function() {
			this.parentElement.classList.toggle('active');
		}
	}
});