const contarVocCons = (text) => {
	if (typeof text !== "string") return `Ingresa un texto`;
	let vocales = 0;
	let consonantes = 0;
	for (let i = 0; i < text.length; i++) {
		if (text.charAt(i).match(/[aeiou]/)) {
			vocales++;
		} else if (
			text.charAt(i).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)
		) {
			consonantes++;
		}
	}
	return `En el texto ${text} hay ${vocales} vocales y ${consonantes} consonantes`;
};

const contarVocConsOp = (text) => {
	if (typeof text !== "string") return `Ingresa un texto`;
	let vocales = 0;
	let consonantes = 0;
	text = text.toLowerCase();
	for (let letter of text) {
		if (letter.match(/[aeiouáéíóúüï]/)) {
			vocales++;
		} else if (letter.match(/[bcdfghjklmnpqrstvwxyz]/)) {
			consonantes++;
		}
	}
	return `En el texto ${text} hay ${vocales} vocales y ${consonantes} consonantes`;
};

const validarNombre = (nombre) => {
	if (typeof nombre !== "string") return `Ingresa un nombre en texto`;
	if (!nombre.match(/\s/)) return `Debes incluir almenos 1 apellido`;
	let auxNombre = nombre;
	nombre = nombre.split(" ");
	for (let i = 0; i < nombre.length; i++) {
		if (nombre[i].match(/^[a-z]/))
			return `Tu nombre y apellidos deben iniciar con mayusculas`;
		for (let h = 1; h < nombre[i].length; h++) {
			if (nombre[i].toString().charAt(h).match(/[A-Z]/))
				return `Las mayusculas solo van al inicio del nombre y apellido`;
		}
	}
	auxNombre = auxNombre.toLowerCase().replace(" ", "");
	for (let i = 0; i < auxNombre.length; i++) {
		if (!auxNombre.charAt(i).match(/[a-z]/))
			return `Solo puedes incluir letras en tu nombre`;
	}
	return `Todo piola con tu nombre`;
};

const validarNombreOp = (nombre) => {
	if (typeof nombre !== "string") return `Ingresa un nombre en texto`;
	if (!nombre.match(/\s/)) return `Debes incluir almenos 1 apellido`;
	let auxNombre = nombre;
	nombre = nombre.split(" ");
	for (const word of nombre) {
		if (word.match(/^[a-z]/))
			return `Tu nombre y apellidos deben iniciar con mayusculas`;
		if (word.match(/^\w+[A-Z]/))
			return `Solo el inicio de tu nombre y apellido puede ser mayuscula`;
		for (letter of word) {
			if (!letter.match(/[A-Za-zÀ-ÖØ-öø-ÿ]/))
				return `Solo puedes incluir letras dentro de tu nombre y apellido`;
		}
	}
	return `Todo piola con tu nombre`;
};

const validarNombreSup = (nombre) => {
	return typeof nombre !== "string"
		? `Ingresa un nombre en texto`
		: !nombre.match(/\s/)
		? `Debes incluir almenos 1 apellido`
		: /^[A-Za-zÑñÀÉÍÓÚÜáéíóúü\s'-]+$/g.test(nombre)
		? `El nombre es valido`
		: `El nombre no es valido`;
};

const validarEmail = (email) => {
	return typeof email !== "string"
		? `Ingresa tu email con un texto`
		: email.match(/[A-Z]/)
		? `Tu email no puede incluir mayusculas`
		: email.match(/^((?!@+[a-z)]+[.]).)*$/)
		? `Debes incluir un arroba seguido del dominio ej. "@outlook.es"`
		: email.match(/^((?![a-z]+@).)*$/)
		? `Debes incluir algo antes del arroba`
		: `Todo piola con tu email`;
};

const validarEmailOp = (email) => {
	return typeof email !== "string"
		? `Ingresa tu email con un texto`
		: email.match(
				/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i
		  )
		? `El email dado es valido`
		: `El email dado no es valido`;
};
console.log(contarVocConsOp(`Holaaáá`));
console.log(validarNombreSup("Eugenio González"));
console.log(validarEmailOp("eugenio@hotmail.com"));
