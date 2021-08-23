class Pelicula {
	constructor(
		id = "",
		titulo = "",
		director = "",
		anioEstreno = 0,
		paisesOrigen = ["Default"],
		generos = ["Default"],
		calificacion = 0.0
	) {
		(this.id = id),
			(this.titulo = titulo),
			(this.director = director),
			(this.anioEstreno = anioEstreno),
			(this.paisesOrigen = paisesOrigen),
			(this.generos = generos),
			(this.calificacion = Number.parseFloat(calificacion.toFixed(1)));
	}

	validacion() {
		const errores = [];
		const generosPermitidos = this.getGenerosPermitidos();
		//Id
		if (typeof this.id !== "string")
			errores.push(`El id debe ser en formato de texto`);
		if (!this.id.match(/^[a-zA-Z]{2}\d{7}$/))
			errores.push(`El id debe contener 2 letras seguidas de 7 numeros`);
		//Titulo
		if (typeof this.titulo !== "string")
			errores.push(`El titulo debe ser una cadena de texto`);
		if (this.titulo === "" || this.titulo.match(/^\s*$/))
			errores.push(`El titulo esta vacio`);
		if (this.titulo.length > 100)
			errores.push(`El titulo debe ser menor a 100 caracteres`);
		//Director
		if (typeof this.director !== "string")
			errores.push(`El director debe ser en formato de texto`);
		if (this.director === "" || this.director.match(/^\s*$/))
			errores.push(`El director esta vacio`);
		if (this.director.length > 50)
			errores.push(`El director debe ser menor a 50 caracteres`);
		if (this.director.match(/\d/))
			errores.push(`El nombre del director no puede incluir numeros`);
		//Año de estreno
		if (
			typeof this.anioEstreno !== "number" ||
			this.anioEstreno.toString().length !== 4
		)
			errores.push(`El año de estreno debe ser un numero de 4 digitos`);
		if (this.anioEstreno < 1888)
			errores.push(`El año de estreno debe ser real`);
		//Paises de origen
		if (!Array.isArray(this.paisesOrigen))
			errores.push(`Ingresa el(os) paises en forma de arreglo`);
		if (this.paisesOrigen.length === 0)
			errores.push(`El arrray de paises esta vacio`);
		for (let pais = 0; pais < this.paisesOrigen.length; pais++) {
			if (this.paisesOrigen[pais].match(/\d/)) {
				errores.push(`El nombre del pais no puede incluir numeros`);
			}
		}
		//Generos
		if (!Array.isArray(this.generos))
			errores.push(`Ingresa el(os) genero(s) como un arreglo`);
		if (this.generos.length === 0)
			errores.push(`El arrray de generos esta vacio`);
		for (let elGen = 0; elGen < this.generos.length; elGen++) {
			let counter = 0;
			for (let elGenPer = 0; elGenPer < generosPermitidos.length; elGenPer++) {
				if (this.generos[elGen] === generosPermitidos[elGenPer]) {
					counter++;
				}
			}
			if (counter === 0)
				errores.push(`Debes incluir solo los generos admitidos `);
		}
		//Calificacion
		if (
			typeof this.calificacion !== "number" ||
			this.calificacion > 10 ||
			this.calificacion < 0
		)
			errores.push(`La calificacion debe ser un numero del 0 al 10`);
		return console.log(errores);
	}

	getGenerosPermitidos() {
		return [
			"Action",
			"Adult",
			"Adventure",
			"Animation",
			"Biography",
			"Comedy",
			"Crime",
			"Documentary",
			"Drama",
			"Family",
			"Fantasy",
			"Film Noir",
			"Game-Show",
			"History",
			"Horror",
			"Musical",
			"Music",
			"Mystery",
			"News",
			"Reality-TV",
			"Romance",
			"Sci-Fi",
			"Short",
			"Sport",
			"Talk-Show",
			"Thriller",
			"War",
			"Western",
		];
	}

	getFichaTecnica() {
		return console.info([
			`Titulo: ${this.titulo}`,
			`Director: ${this.director}`,
			`Año de estreno: ${this.anioEstreno}`,
			`Paises de origen: ${this.paisesOrigen}`,
			`Generos: ${this.generos}`,
			`Calificacion: ${this.calificacion}`,
		]);
	}
}

const arrayPeliculas = [
	["AA1234567", "AB1234567", "AC1234567"],
	["Papa", "Queso", "Mango"],
	["Juan", "Pedro", "Jaime"],
	[2000, 1900, 2020],
	[["Mexico", "Guatemala"], ["UK"], ["EEUU"]],
	[["War", "Sport", "Romance"], ["News"], ["Short"]],
	[10, 5, 0],
];
console.log(`Hola! ${arrayPeliculas[3][0]}`);

for (x in arrayPeliculas[0]) {
	for (let y = 0; y < arrayPeliculas.length; y++) {
		let nombrePelicula = arrayPeliculas[1][x];
		console.log(nombrePelicula);
	}
}

const RDR2 = new Pelicula(
	"AS1234567",
	"La pizza caliente",
	"Juan",
	2000,
	["Mexico"],
	["War"],
	10.0
);
RDR2.validacion();
RDR2.getFichaTecnica();
// expected output: 12
