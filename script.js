let h4 = document.getElementById("cssInfo");
let body = document.getElementById("body");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");

function colorChange(){
	document.body.style.backgroundImage = "linear-gradient(to right,"+ color1.value + "," + color2.value + ")";
	h4.innerText = "CSS : linear-gradient(to right, " + color1.value + ", " + color2.value + " )"
}

color1.addEventListener("input", colorChange);

color2.addEventListener("input", colorChange);

