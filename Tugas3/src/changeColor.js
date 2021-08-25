const body = document.querySelector("body");

const colorButton = document.querySelector(".color-button");
const colorInput1 = document.querySelector("#ColorInput1");
const colorInput2 = document.querySelector("#ColorInput2");
let color;

colorInput1.addEventListener("input", function () {
	return (color = colorInput1.value);
});

colorButton.addEventListener("click", function () {
	body.style.backgroundColor = color;
});

colorInput2.addEventListener("input", function () {
	body.style.backgroundColor = colorInput2.value;
});
