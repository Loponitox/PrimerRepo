let nombre = 'leiner';
let edad = 24;
let estatura = 189;

let persona = {
    nombre: "leiner",
    edad: 24,
    estatura: 189,
}; //creacion de objeto

console.log(persona) // imprime todo el objeto
console.log(persona.edad)// imprime solo una propiedad del objeto

persona.edad = 56 // cambiar el valor de una propiedad

console.log(persona['edad'])

delete persona.estatura //eliminar propiedad del objeto