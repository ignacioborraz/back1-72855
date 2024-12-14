const nombre1 = "Peter Parker";
const ciudad1 = "New York";
let edad1 = 18;
const habilidades1 = [
  "Superhuman strength, agility, reflexes, and durability",
  "Ability to cling to solid surfaces",
  "Precognitive spider-sense",
  "Genius-level intellect",
  "Skilled hand-to-hand combatant",
  "Proficient scientist and engineer",
  "Utilizes wrist-mounted web-shooters",
];
edad1 = edad1 + 5;

//console.log(nombre1);
//console.log(ciudad1);
//console.log(edad1);
//console.log(habilidades1);

const nombre2 = "Natasha Romanova";
const ciudad2 = "New York";
let edad2 = 30;
const habilidades2 = [
  "Expert marksman and mastery of various weapons",
  "Expert martial artist and hand-to-hand combatant",
  "Slowed aging, and enhanced immune system",
  "Expert spy",
];
edad2 += 5;

//console.log(nombre2);
//console.log(ciudad2);
//console.log(edad2);
//console.log(habilidades2);

function verificarSiEsMayor() {
  let texto = "";
  //texto es una variable local de la función (porque está dentro de las llaves amarillas de la función)
  //pero global para los condicionales (porque está fuera de las llaves lila de los condicionales)
  if (edad1 > edad2) {
    texto = "El personaje 1 es mayor que el 2";
  } else {
    texto = "El personaje 2 es mayor que el 1";
  }
  console.log(texto);
}

//verificarSiEsMayor()
//verificarSiEsMayor()
//verificarSiEsMayor()

const spiderman = {
  name: nombre1,
  city: ciudad1,
  age: edad1,
  abilities: habilidades1,
};
spiderman.age = 35;
spiderman.teams = ["xmen", "avengers", "young avenger"];
spiderman["movies"] = [
  "spiderman 1",
  "spiderman 2",
  "spiderman 3",
  "civil war",
  "avengers 3",
  "avengers 4",
];
//console.log(spiderman);
//en este caso modifique un objeto gracias a la propiedad de MUTABILIDAD de los objetos especiales
delete spiderman.abilities;
//console.log(spiderman);
//spiderman = { ...spiderman, age: 35 }

const blackwidow = {
  name: nombre2,
  city: ciudad2,
  age: edad2,
  abilities: habilidades2,
};
//blackwidow = spiderman
//en este caso se quiere reasignar Y NO SE PUEDE PORQUE ESTA DEFINIDA CON CONST!!!
//REASIGNAR NO ES LO MISMO QUE MUTAR!!!

const texto = `Spiderman en realidad es ${spiderman.name}.
Vive en un departamento de ${spiderman.city} con su tía May.`;
//console.log(texto);

function generarTemplate(personaje) {
  const template = `${personaje.name} vive en ${personaje.city} y tiene ${personaje.age} años.`;
  return template;
}
//console.log(generarTemplate(blackwidow));
//console.log(generarTemplate(spiderman));

const arrayPersonajes = [
  spiderman,
  blackwidow,
  spiderman,
  blackwidow,
  spiderman,
  blackwidow,
];
for (let i = 0; i <= arrayPersonajes.length - 1; i++) {
  //desde el elemento 0
  //hasta el ultimo elemento de un array
  //iterando de uno en uno
  //ejecuto todo lo que está dentro de este scope (local)
  const templ = generarTemplate(arrayPersonajes[i]);
  console.log(templ);
}
for (let personaje of arrayPersonajes) {
  //por cada elemento (personaje) de un array (arrayPersonaje)
  //ejecuto todo lo que está dentro de este scope (llaves)
  const templateGenerado = generarTemplate(personaje);
  console.log(templateGenerado);
}
