
const sliderElement = document.getElementById("main-slider");
const leTexte = document.getElementById("leTexte");
sliderElement.oninput = function() {
	document.getElementById("darken-pic").style.top = document.getElementById("darken-pic").style.left = `${-(this.value/99)*40 -5}px`;
	leTexte.innerText = this.value;
} 