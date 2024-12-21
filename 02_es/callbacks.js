const sumar = (n1, n2) => console.log(n1 + n2);
const restar = (n1, n2) => console.log(n1 - n2);
const multiplicar = (n1, n2) => console.log(n1 * n2);
const dividir = (n1, n2) => console.log(n1 / n2);
//console.log(sumar(1, 10));
//console.log(restar(1, 10));
//console.log(multiplicar(5, 10));
//console.log(dividir(50, 5));

// operar es una callback porque es una función que se pasa como argumento de una función
const calcular = (n1, n2, operar) => operar(n1, n2);
//console.log(calcular(1, 10, sumar));
//console.log(calcular(1, 10, restar));
//console.log(calcular(5, 10, multiplicar));
//console.log(calcular(50, 5, dividir));

const calcularLuego = (n1, n2, operar) => {
  setTimeout(() => {
    const resultado = operar(n1, n2);
    console.log(resultado);
  }, 2000);
};
//calcularLuego(10, 1, sumar);
//calcularLuego(10, 1, restar);
//console.log("L25: " + calcular(10, 1, multiplicar));
//calcularLuego(13, 7, multiplicar);
//calcularLuego(100, 7, dividir);
//console.log("L28: " + calcular(10, 1, dividir));

const dividirConCbs = (n1, n2, cbExito, cbError) => {
  if (n2 === 0) {
    cbError("No se puede dividir por cero");
  } else {
    cbExito(n1, n2);
  }
};

//dividirConCbs(10, 0, dividir, console.log);
//dividirConCbs(10, 2, dividir, console.log);

const calcularLuegoConCbs = (n1, n2, operar, cbExito) => {
  setTimeout(() => {
    operar(n1, n2, cbExito, console.log);
  }, 2000);
};

calcularLuegoConCbs(10, 0, dividirConCbs, dividir);
calcularLuegoConCbs(10, 2, dividirConCbs, dividir);
calcularLuegoConCbs(10, 5, sumar);
calcularLuegoConCbs(10, 5, restar);
calcularLuegoConCbs(10, 5, multiplicar);
