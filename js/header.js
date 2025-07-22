var smallOpenHeight = '392px';
var smallClosedHeight = '64px';
var bigOpenHeight = '470px';
var bigClosedHeight = '142px';
var animationTime = 500;

var isActive = false;

function OnMenuButton() {
	isActive = !isActive;
	ChangeHeight();
}

function ChangeHeight() {
	var newClosedHeight;
	var newOpenHeight;
	if(document.getElementsByClassName('header mobile-only')[0].classList.contains('big')) {
		newClosedHeight = bigClosedHeight;
		newOpenHeight = bigOpenHeight;
	}
	else {
		newClosedHeight = smallClosedHeight;
		newOpenHeight = smallOpenHeight;
	}


	var style = document.getElementsByClassName('header mobile-only')[0].style;

	if(isActive) {
		style.minHeight = newOpenHeight;

		setTimeout(function() {
			style.overflow = 'visible';
		}, animationTime);
		
	}
	else {
		style.minHeight = newClosedHeight;
		style.height = newClosedHeight;
		style.overflow = 'hidden';
	}
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then(reg => {
      console.log(' SW зарегистрирован', reg);
    }).catch(err => {
      console.log(' Ошибка регистрации SW', err);
    });
  });
}