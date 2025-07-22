document.addEventListener('DOMContentLoaded', function() {  
	var parnterDivs = document.getElementsByClassName('partner-div');
	var partners = document.getElementsByClassName('partner');

	var indexOf = function(array, obj) {
		for(var i = 0; i < array.length; i++) {
			if(obj == array[i]) {
				return i;
			}
		}
		return -1;
	}

	for(var i = 0; i < partners.length; i++) {
		partners[i].onclick = function() {
			for(var j = 0; j < partners.length; j++) {
				if(partners[j] != this) {
					parnterDivs[j].classList.remove('active');
					partners[j].classList.remove('active');
				}
			}
			parnterDivs[indexOf(partners, this)].classList.add('active');
			this.classList.add('active');
		}
	}
});
