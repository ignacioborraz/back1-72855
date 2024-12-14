class Persona {
  constructor(nombre, edad, ciudad, vida) {
    //todas las propiedades del constructor con "THIS" SON DE "ESTA" INSTANCIA a crear
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.vida = vida;
    Persona.cantidadPersonas++;
  }
  //todas las propiedades estáticas SON GLOBALES O DE LA CLASE y debo acceder desde el constructor
  static cantidadPersonas = 0;
  comer = (cuantoComio) => {
    if (this.vida >= 150) {
      console.log("NO PUEDE COMER MAS");
    } else if (this.vida + cuantoComio >= 150) {
      this.vida = 150;
      console.log("COMIO LO MÁXIMO QUE PUDO");
    } else {
      this.vida = this.vida + cuantoComio;
    }
  };
  entrenar = (cuantoEntreno) => {
    if (this.vida <= 50) {
      console.log("NO PUEDE ENTRENAR MAS");
    } else if (this.vida - cuantoEntreno <= 50) {
      this.vida = 50;
      console.log("ENTRENÓ LO MÁXIMO QUE PUDO");
    } else {
      this.vida -= cuantoEntreno;
    }
  };
  mudarse = (nuevaCiudad) => {
    this.vida -= 20;
    this.ciudad = nuevaCiudad;
  };
}

const persona1 = new Persona("Juan", 20, "Cordoba", 100);
//console.log(persona1);

const persona2 = new Persona("Maria", 32, "Mendoza", 120);
//console.log(persona2);

const persona3 = new Persona("Sol", 15, "Tucumán", 90);
console.log(persona3);
persona3.mudarse("Rosario");
console.log(persona3.nombre);
console.log(persona3.edad);
console.log(persona3.ciudad);

//console.log(persona1.cantidadPersonas);
console.log(Persona.cantidadPersonas);

persona1.comer(5);
persona1.entrenar(20);
persona1.comer(30);
persona1.entrenar(30);
persona1.comer(50);
console.log(
  `LA VIDA DE ${persona1.nombre.toUpperCase()} AL FINAL DEL DIA ES ${
    persona1.vida
  }`
);

persona2.comer(5);
persona2.comer(50);
persona2.entrenar(50);
persona2.comer(30);
console.log(
  `LA VIDA DE ${persona2.nombre.toUpperCase()} AL FINAL DEL DIA ES ${
    persona2.vida
  }`
);
