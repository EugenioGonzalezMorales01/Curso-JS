const numeroAleatorio = () => {
	return 500 + Math.round(Math.random() * 100);
};

const capicua = (numero) => {
	if (typeof numero !== "number") return `Ingresa un numero`;
	numero = numero.toString();
	return numero === numero.split("").reverse().join("")
		? `El numero es capicúa`
		: `El numero ingresado no es capicúa`;
};

const factorial = (numero) => {
	if (typeof numero !== "number") return `Ingresa un numero`;
	if (Math.sign(numero) !== 1)
		return `Solo puedes sacar el factorial de un numero positivo`;
	let number = 1;
	for (let i = 1; i <= numero; i++) {
		number *= i;
	}
	return number;
};

console.log(numeroAleatorio());
console.log(capicua(555));
console.log(factorial(5));
