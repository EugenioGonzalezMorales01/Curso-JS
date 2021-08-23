const saludar = (nombre) =>
    console.log(`Hola ${nombre}`);


saludar("Eugenio");

/*const sumar = function(a,b){
    return a + b
}*/

const sumar = (a,b) => a + b;

console.log(sumar(8,9))

const funcionDeVariasLineas = () => {
    console.log("uno")
    console.log("dos")
    console.log("tres")
}

funcionDeVariasLineas()

const numeros = [1,2,3,4,5]

numeros.forEach((el,index)=> console.log(`El elemento ${el} esta en la posicion ${index}`));

function perro () {
    console.log(this);
}

perro();

//FORMA INCORRECTA
/*
const perrito = {
    nombre: 'Rufus',
    ladrar : () => {
        console.log(this)
    }
}*/

//FORMA CORRECTA
const perrito = {
    nombre: 'Rufus',
    ladrar(){
        console.log(this)
    }
}


perrito.ladrar();

