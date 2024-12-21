/* ES8 */

/* async/await */

async function fetchearApi() {
  let res = await fetch("https://fakestoreapi.com/products");
  res = await res.json();
  console.log(res);
}
//fetchearApi();

/* Object.keys - Object.values - Object.entries */

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
//console.log(Object.keys(spiderman));
//console.log(Object.values(spiderman));
//console.log(Object.entries(spiderman));
