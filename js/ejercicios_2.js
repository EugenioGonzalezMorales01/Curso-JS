miTexto = "Bloodborne Miyazaki Bloodborne Miyazaki Bloodborne From Software";

const invertirCadena = (text) => {
	return typeof text !== "string"
		? `Ingresa un texto`
		: text.split("").reverse().join("");
};

const contarPalabra = (text, palabra) => {
	let counter = 0;
	if (typeof text !== "string" || typeof palabra !== "string") {
		return `Ingresa un texto`;
	} else if (!text || !palabra) {
		return `No puedes ingresar un texto vacio`;
	} else {
		while (text.search(palabra) !== -1) {
			counter++;
			text = text.substring(text.search(palabra) + palabra.length);
		}
		return counter;
	}
};

const detectarPalindromo = (text) => {
	let auxText = invertirCadena(text.toLowerCase());
	return typeof text !== "string" || !text
		? `Ingresa un texto valido`
		: auxText === text.toLowerCase()
		? `${text} es un polindromo`
		: `${text} no es un polindromo`;
};

/* Tomado de
 	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
function escapeRegExp(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}*/

const eliminarPatron = (text, patron) => {
	regExpPatron = new RegExp(patron, "ig");
	return text.search(patron) === -1
		? `El patron no se encuentra en el texto`
		: typeof text !== "string" || !text
		? `Ingresa un texto valido`
		: typeof patron !== "string" || !patron
		? `Ingresa un patron valido`
		: text.replace(regExpPatron, "");
};
console.log(invertirCadena(miTexto));
console.log(contarPalabra(miTexto, "Bloodborne"));
console.log(detectarPalindromo("Salas"));
console.log(eliminarPatron(miTexto, "Miyazaki"));
