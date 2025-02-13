const sumar = (n1, n2) => n1 + n2;
const restar = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => {
  return new Promise((cbExito, cbError) => {
    if (n2 === 0) {
      cbError("No se puede dividir por cero");
    } else {
      cbExito(n1 / n2);
    }
  });
};
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

const calcularLuegoConPromesa = (n1, n2, operar) => {
  setTimeout(async () => {
    try {
      const resultado = await operar(n1, n2);
      console.log(resultado);
      //const resultado3 = resultado1 + resultado2
      //resultado2.forEach(element => console.log(element));
    } catch (error) {
      console.log(error);
    }
  }, 2000);
};

calcularLuegoConPromesa(10, 2, sumar);
calcularLuegoConPromesa(10, 2, restar);
calcularLuegoConPromesa(10, 2, multiplicar);
calcularLuegoConPromesa(10, 2, dividir);
calcularLuegoConPromesa(10, 0, dividir);
