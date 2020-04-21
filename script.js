var colour1 = document.querySelector('#colour1');
var colour2 = document.querySelector('#colour2');
var background = document.querySelector('body');
var gradient = document.querySelector('h3');
var button = document.querySelector('button');

var initial = getComputedStyle(background).backgroundImage;

document.addEventListener('DOMContentLoaded', function() {
	gradient.textContent = initial + ";";
})

function setGradient() {
	background.style.background = "linear-gradient(to right, " + colour1.value + ", " + colour2.value + ")";
	gradient.textContent = background.style.background + ";";
}

colour1.addEventListener("input", setGradient);
colour2.addEventListener("input", setGradient);

function randomColours() {
	var random1 = "#" + Math.floor(Math.random()*16777215).toString(16);
	var random2 = "#" + Math.floor(Math.random()*16777215).toString(16);

	colour1.value = random1;
	colour2.value = random2;

	background.style.background = "linear-gradient(to right, " + random1 + ", " + random2 + ")";
	gradient.textContent = background.style.background + ";";

}

button.addEventListener("click", randomColours);