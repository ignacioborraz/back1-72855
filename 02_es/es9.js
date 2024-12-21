/* ES9 */

/* desestructuración de arrays */

const heroes = ["spiderman", "hulk", "black widow", "miss marvel", "ironman"];
//const hulk = heroes[1]
//const blackWidow = heroes[2]
//const missMarvel = heroes[3]
const [, hulk, , , last] = heroes;
//console.log(hulk);
//console.log(last);

/* estructuración de arrays */

const n1 = 10
const n2 = 12
const n3 = 20
const arrayOfNumbers = [n1, n2, n3, 12]
//console.log(arrayOfNumbers);

/* spread de arrays */

const [first, ...lastNumbers] = arrayOfNumbers
//console.log(first);
//console.log(lastNumbers);

const newArrayOfNumbers = [ ...arrayOfNumbers, 25, 30, first, ...lastNumbers, first]
//console.log(newArrayOfNumbers);

/* desestructuracion de objetos */

const spiderman = {
  name: "Peter Parker",
  city: "New York",
  age: 18,
  abilities: [
    "Superhuman strength, agility, reflexes, and durability",
    "Ability to cling to solid surfaces",
    "Precognitive spider-sense",
  ],
};
//const name = spiderman.name
//const city = spiderman.city
//const age = spiderman.age
//const abilities = spiderman.abilities
const { name, city, age } = spiderman;
//console.log(name);
//console.log(city);

/* estructuración de un objeto */

const province = "Santa Fe"
const country = "Argentina"
//const data = { province: province, country: country }
const data1 = { city: "rosario", province, country }
const data2 = { city: "carlos paz", province: "cordoba", country }
const data1enCastellano = { ciudad: "rosario", provincia: province , pais: country }
//console.log(data1);
//console.log(data1enCastellano);

/* spread de objetos */

const { abilities, ...data } = spiderman
//console.log(data);

const teams = ["avengers", "xmens", "young avengers"]
const spidermanWithTeams = { ...spiderman, teams }
//console.log(spidermanWithTeams);

/* todo lo que sea romper/reparar/sacar propiedades/elementos de un objeto/array va del lado izquierdo de la igualdad */
/* todo lo que sea armar/construir propiedades/elementos de un objeto/array va del lado derecho de la igualdad */