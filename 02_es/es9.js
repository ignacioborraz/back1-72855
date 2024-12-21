/* ES9 */

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
const { name, city, age, abilities } = spiderman;
//console.log(name);
//console.log(city);

/* desestructuración de arrays */

const heroes = ["spiderman", "hulk", "black widow", "miss marvel", "ironman"];
//const hulk = heroes[1]
//const blackWidow = heroes[2]
//const missMarvel = heroes[3]
const [, hulk, , , last] = heroes;
console.log(hulk);
console.log(last);
