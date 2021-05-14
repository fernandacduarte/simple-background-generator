var cssText = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

// console.log(random.textContent);

function generateRandomComponentColor() {
	return Math.floor(Math.random() * 256);
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	cssText.textContent = body.style.background + ";";
	// cssText.textContent = "Left color: " + color1.value + " / " +"Right color: " + color2.value;
}

function setRandomGradient() {
	const c1_rgb  = [generateRandomComponentColor(), generateRandomComponentColor(), generateRandomComponentColor()];
	const c2_rgb  = [generateRandomComponentColor(), generateRandomComponentColor(), generateRandomComponentColor()];
	
	body.style.background = 
	"linear-gradient(to right, rgb(" 
	+ c1_rgb[0] + "," + c1_rgb[1] + "," + c1_rgb[2] + ")"
	+ ", rgb(" 
	+ c2_rgb[0] + "," + c2_rgb[1] + "," + c2_rgb[2] + ")" 
	+ ")";

	cssText.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", setRandomGradient);