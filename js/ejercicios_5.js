/*Manualmente*/
const binYDec = (numero, base) => {
	if (typeof numero !== "number") return `Ingresa un numero`;
	if (typeof base !== "string") return `Ingresa la base`;
	if (base === "binario") {
		let binario = [];
		while (Math.abs(numero) >= 1) {
			binario.push(Math.floor(Math.abs(numero % 2)));
			numero /= 2;
		}
		return parseInt(binario.reverse().join("")) * Math.sign(numero);
	}
	if (base === "decimal") {
		numero = numero.toString().split("");
		for (let i = 0; i < numero.length; i++) {
			if (numero[i] !== "0") {
				if (numero[i] !== "1") return `Debes ingresar un binario`;
			}
		}
		let decimal = 0;
		numero.reverse();
		for (let i = 0; i < numero.length; i++) {
			if (numero[i] === "1") {
				decimal += Math.pow(2, i);
			}
		}
		return decimal;
	}
};

/*Utiliazndo ParseInt*/
const binYDecOp = (numero, base) => {
	return typeof numero !== "number"
		? `Ingresa un numero`
		: typeof base !== "string"
		? `Ingresa la base`
		: base === "decimal"
		? `El numero ${numero} en base ${base} es igual a ${parseInt(numero, 2)}`
		: base === "binario"
		? `El numero ${numero} en base ${base} es igual a ${numero.toString(2)}`
		: `Ingresa una base y numero validos`;
};

const descuento = (precio, descuento) => {
	return typeof precio !== "number" || typeof descuento !== "number"
		? `Ingresa un numero en ambos ca;b9o07oioioiiijijlijliljlijiljlijljljlmpos`
		: Math.sign(precio) !== 1 || Math.sign(descuento) !== 1
		? `No puede haber precios ni descuentos negativos o nulos`
		: descuento >= 100
		? `No puede haber un descuento mayor o igual al 100%`
		: (precio -= (precio * descuento) / 100);
};

const cuantoTiempo = (year, month, day) => {
	if (
		typeof year !== "number" ||
		typeof month !== "number" ||
		typeof day !== "number" ||
		Math.sign(year) !== 1 ||
		Math.sign(month) !== 1 ||
		Math.sign(day) < 0
	)
		return `Ingresa los tres campos como enteros positivos`;
	let date = +new Date(year, month - 1, day);
	let currentDate = Date.now();
	return Math.floor((currentDate - date) / 31536000000);
};
/*Recibiendo un objeto tipo date por el usuario*/
const cuantoTiempoOp = (fecha) => {
	return !(fecha instanceof Date)
		? `Ingresa una fecha valida`
		: Date.now() > fecha.getTime()
		? `Han pasado ${Math.floor(
				(Date.now() - fecha.getTime()) / 31536000000
		  )} años, desde ${fecha.toLocaleDateString()}`
		: `Faltan ${Math.floor(
				(fecha.getTime() - Date.now()) / 31536000000
		  )} años para ${fecha.toLocaleDateString()}`;
};
console.log(binYDecOp(1010, "decimal"));
console.log(binYDecOp(10, "binario"));
console.log(descuento(1000, 9));
console.log(cuantoTiempo(2000, 9, 1));
console.log(cuantoTiempoOp(new Date(2050, 9, 1)));
