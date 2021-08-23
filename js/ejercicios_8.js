const arr = [10, 4, 5, 2, 20];
const arrComp = [10, 4, 5, 2, "10", {}];

const sortUpnDown = (myArray) => {
	if (!Array.isArray(myArray)) return "Ingresa un array";
	if (myArray.length === 0) return "El array no puede estar vacio";
	for (el of myArray) {
		if (typeof el !== "number")
			return "Todos los elementos del array deben ser numeros";
	}
	return {
		sortUp: myArray
			.map((el) => el)
			.sort(function (a, b) {
				return a - b;
			}),
		sortDown: myArray
			.map((el) => el)
			.sort(function (a, b) {
				return b - a;
			}),
	};
};

const elimateDuplicates = (myArray) => {
	if (!Array.isArray(myArray)) return "ingresa un array";
	if (myArray.length <= 1) return "El array debe tener al menos 2 numeros";
	myArray = [...new Set(myArray)];
	return myArray;
};

const average = (myArray) => {
	if (!Array.isArray(myArray)) return "ingresa un array";
	if (myArray.length <= 1) return "El array debe tener al menos 2 numeros";
	for (element of myArray) {
		if (typeof element !== "number")
			return "Todos los elementos deben de ser numeros";
	}
	let reducer = (acumulator, currentValue) => acumulator + currentValue;
	return myArray.reduce(reducer) / myArray.length;
};

console.info(sortUpnDown(arr));
console.info(elimateDuplicates(arrComp));
console.info(average(arr));
