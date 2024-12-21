/* ES10 */

/* trim */

const cadena1 = "    borrar los espacios de adelante";
const cadena2 = "borrar los espacios de atras            ";
const cadena3 = "    borrar los espacios de adelante    y atrás           ";
//console.log(cadena1.trim());
//console.log(cadena2.trim());
//console.log(cadena3.trim());

/* flat */
const array1 = [10, 11, 12, 13, 14];
const array2 = [20, 21, 22, 23];
const array3 = [30, 31, 32];
//const array = [...array1, ...array2, ...array3];
const array = [array1, array2, array3].flat();
//console.log(array);
