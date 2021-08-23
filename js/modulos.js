//Importar PI desde constantes.js
import saludar, {PI, usuario} from "./constantes.js"
//Puedes utilizar ALIAS
import {aritmetica as ar} from "./aritmetica.js"

console.log("Archivo modulos.js cargado")

console.log(PI, usuario)
let resul = ar.restar(5,4)
console.log(resul)
resul = ar.sumar(5,4)
console.log(resul)

saludar()