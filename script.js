let h4 = document.getElementById("cssInfo");
let body = document.getElementById("body");
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let select = document.getElementById("direction");
let css;
console.log(select.value);

function colorChange(){
	if(select.value === "Linear Gradients"){
		css = "linear-gradient(to right, " + color1.value + ", " + color2.value + " )";
	}
	else if(select.value === "Radial Gradients"){
		css = "radial-gradient(" + color1.value + ", " + color2.value + " )";
	}
	else if(select.value === "Conic Gradients"){
		css = "conic-gradient(" + color1.value + ", " + color2.value + " )";
	}
	document.body.style.backgroundImage = css;
	h4.innerText = "CSS : " + css;
}

color1.addEventListener("input", colorChange);

color2.addEventListener("input", colorChange);




