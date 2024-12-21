/* ES11 */

/* nullish ?? */

const cero = 0;
const nula = null;
const noDefinida = undefined;

const resultado1 = cero ?? "si cero es cero va a retornar cero";
console.log("L10: " + resultado1);
const resultado2 = nula ?? "si es nula va a devolver este string";
console.log("L12: " + resultado2);
const resultado3 = noDefinida ?? "si es no defina va a devolver este string";
console.log("L14: " + resultado3);

const persona = {
  nombre: "Ignacio",
  edad: 34,
  profesion: null,
  hijos: 0,
};
const ciudad = persona.ciudad ?? "No definida";
console.log(ciudad);
const profesion = persona.profesion ?? "No fue definida o no trabaja";
console.log(profesion);
//const hijos = persona.hijos || "No fue definido"
const hijos = persona.hijos ?? "No fue definido";
console.log(hijos);
// a veces necesito que el 0 sea verdadero
//para estos casos sirve NULISH en lugar de OR

/* propiedades/metodos privadas */

class Persona {
  #vida = 0;
  constructor(nombre, edad, ciudad, vida) {
    //todas las propiedades del constructor con "THIS" SON DE "ESTA" INSTANCIA a crear
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.#vida = vida;
    Persona.cantidadPersonas++;
  }
  #comer10 = () => (this.#vida = this.#vida + 10);
  comer = () => this.#comer10();
}

const profe = new Persona("igna", 34, "rosario", 100);
//profe.#comer10()
profe.comer();
