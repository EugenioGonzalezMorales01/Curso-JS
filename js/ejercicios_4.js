const primo = (numero) => {
	if (typeof numero !== "number") return `Ingresa un numero`;
	if (numero <= 1) return `Ingresa un numero mayor a 1`;
	for (let i = 2; i < numero; i++) {
		if (numero % i === 0) {
			return `${numero} no es un numero primo`;
		}
	}
	return `${numero} es un numero primo`;
};

const par = (numero) => {
	return typeof numero !== "number"
		? `Ingresa un numero`
		: numero % 2 === 0
		? `El numero ${numero} es par`
		: `El numero ${numero} no es par`;
};

const celAFhar = (numero, unidad) => {
	if (typeof numero !== "number" || typeof unidad !== "string")
		return `Ingresa un numero y la unidad separados con una coma`;
	unidad = unidad.toLowerCase();
	return unidad === "celcius"
		? numero * 1.8 + 32
		: unidad === "fahrenheit"
		? (numero - 32) / 1.8
		: `Unidad no reconocida`;
};

console.log(primo(7));
console.log(par(10));
console.log(celAFhar(20, "fahrenheit"));
