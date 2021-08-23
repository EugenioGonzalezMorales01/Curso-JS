//Exportar la constante PI
export const PI = Math.PI

export let usuario = "Eugenio"
let password = "qwerty"

//Cuando se exporte una funcion expresada, primero declarala, y luego importala, no ambos en la misma linea
//Solo puedes tener un default por archivo
const saludar = () => {
  console.log("Hola Modulos +ES6")
}
export default saludar