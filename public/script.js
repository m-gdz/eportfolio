

const bg = document.getElementById("background");
let root = document.documentElement;
window.addEventListener("scroll", function() {

	let scroll = window.pageYOffset;

	if (scroll > window.innerHeight * 2 / 3) {
		bg.style.backgroundColor = '#F1F1F1';
		root.style.setProperty('--color','#1F1F1F');
	}
	else {
		bg.style.backgroundColor = 'rgba(0,0,0,0.8)';
		root.style.setProperty('--color','#F1F1F1');
	}

});


