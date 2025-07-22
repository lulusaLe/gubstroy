function CloseModal(obj) {
	var style = obj.parentElement.parentElement.parentElement.style;

	style.opacity = 0;
	style.pointerEvents = 'none';
}

function OpenModal(id) {
	var style = document.getElementById(id).style;

	style.pointerEvents = 'all';
	style.opacity = 1;
}