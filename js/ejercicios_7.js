const miArray = [2, 4, 7, 10, -80, 0];

const elevarArray = (miArray) => {
	const myArray = miArray;
	if (!Array.isArray(myArray)) return `Ingresa un array`;
	for (element in myArray) {
		if (typeof myArray[element] !== "number")
			return `Todos los elementos del array deben ser numeros`;
		myArray[element] = Math.pow(myArray[element], 2);
	}
	return myArray;
};

const elevarArrayOp = (miArray) => {
	if (!Array.isArray(miArray)) return `Ingresa un array`;
	const myArray = miArray.map((element) => element * element);
	return myArray;
};

const bajoAlto = (miArray) => {
	const myArray = miArray;
	if (!Array.isArray(myArray)) return `Ingresa un array`;
	const newArray = [myArray[0], myArray[0]];
	let auxElement;
	for (element of myArray) {
		if (typeof element !== "number")
			return `Todos los elementos del array deben ser numeros`;
	}
	for (let element = 0; element < myArray.length; element++) {
		if (newArray[1] > myArray[element]) {
			newArray[1] = myArray[element];
		} else if (newArray[0] < myArray[element]) {
			newArray[0] = myArray[element];
		}
	}
	return newArray;
};

const bajoAltoOp = (miArray) => {
	const myArray = miArray;
	if (!Array.isArray(myArray)) return `Ingresa un array`;
	const newArray = [myArray[0], myArray[0]];
	let auxElement;
	for (element of myArray) {
		if (typeof element !== "number")
			return `Todos los elementos del array deben ser numeros`;
	}
	return `Arreglo original = ${miArray} | mayor = ${Math.max(
		...miArray
	)} | menor ${Math.min(...miArray)}`;
	return newArray;
};

const paresEImpares = (miArray) => {
	const myArray = miArray;
	if (!Array.isArray(miArray)) return `Ingresa un array`;
	const pares = [];
	const impares = [];
	for (element of miArray) {
		if (typeof element !== "number")
			return `Todos los elementos del array deben ser numeros`;
		if (element % 2 === 0) {
			pares.push(element);
		} else {
			impares.push(element);
		}
	}
	const newArray = [pares, impares];
	return `pares = [${newArray[0]}], impares = [${newArray[1]}]`;
};

const paresEImparesOp = (miArray) => {
	if (!Array.isArray(miArray)) return `Ingresa un array`;
	const pares = [];
	const impares = [];
	for (element of miArray) {
		if (typeof element !== "number")
			return `Todos los elementos del array deben ser numeros`;
	}
	return {
		pares: miArray.filter((element) => element % 2 === 0),
		impares: miArray.filter((element) => element % 2 !== 0),
	};
};

console.log(elevarArrayOp(miArray));
console.log(bajoAltoOp(miArray));
console.log(paresEImparesOp(miArray));
