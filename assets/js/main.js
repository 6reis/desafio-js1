const valorlaptop = 356000;
const cantidad = document.querySelector("#p-cantidad");
const totalCantidad = document.querySelector("#total-cantidad");
const colorC = document.querySelector("#colorCircle");
const colorSelect = document.querySelector("#colorSelect");
const valorTotal = document.querySelector("#valor-total");
const btnClick = document.querySelector("#btn");

/* button */
btnClick.addEventListener("click", () => {
	/* valor */
	const valorMulti = cantidad.value * valorlaptop;
	valorTotal.textContent = "Total: $" + valorMulti.toLocaleString();
	/* cantidad */
	totalCantidad.textContent = "Cantidad: " + cantidad.value;
	/* color */
	colorC.style.backgroundColor = colorSelect.value;
});