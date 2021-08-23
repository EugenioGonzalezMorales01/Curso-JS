let miTexto = "Hola mundo cruel";

const contarCaracteres = (text) => {
	try {
		return typeof text !== "string"
			? (text = `Ingresa un texto`)
			: (text = text.length);
	} catch (error) {
		return error;
	}
};

const recortarTexto = (text, limite) => {
	try {
		return typeof text !== "string"
			? `Ingresa un texto`
			: typeof limite !== "number"
			? `Ingresa un numero`
			: text.substring(0, limite);
	} catch (error) {
		return error;
	}
};

const separarTexto = (text, separador) => {
	try {
		return typeof text !== "string"
			? `Ingresa un texto`
			: typeof separador !== "string"
			? `Ingresa un separador en texto`
			: text.split(separador);
	} catch (error) {
		return error;
	}
};

const repetirTexto = (text, repeticiones) => {
	text = text + " ";
	repeticiones = Math.abs(repeticiones);
	try {
		return typeof text !== "string"
			? `Ingresa un texto`
			: typeof repeticiones !== "number"
			? `Ingresa un numero`
			: text.repeat(repeticiones);
	} catch (error) {
		return error;
	}
};

let Cadena = [
	contarCaracteres(miTexto),
	recortarTexto(miTexto, 10),
	separarTexto(miTexto, "o"),
	repetirTexto(miTexto, 3),
];
console.table(Cadena);
