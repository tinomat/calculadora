const pantalla = document.getElementById("pantalla");
// Mostramos los valores que ingresemos en la pantalla
const agregar = (valor) => {
  // Modificamos el value del input
  pantalla.value += valor; // El valor del input va a ser el .value += el valor que agreguemos con la calculadora
  //El valor que se ingrese mediante los input button va a aparecer en la pantalla
};

// Vaciamos la pantalla
const limpiar = () => {
  pantalla.value = ""; // Borramos los valores dandole un valor vacío
};

const borrar = () => {
  // Tamos desde el primer caracter que sería 0 y a la cantidad total caracteres le restamos 1
  const valorBorrado = pantalla.value.slice(0, pantalla.value.length - 1);
  // Mostramos el valor en pantalla
  pantalla.value = valorBorrado;
};
// Mostramos el resultado del calculo
const calcular = () => {
  const valorPantalla = pantalla.value;
  // Usamos un metodo de javascript llamado eval que va a servirnos para poder realizar operaciones de strings
  // Eval lo que va a hacer es que va a tomar los trings y los va a utilizar para una operacion
  const resultado = eval(valorPantalla);
  pantalla.value = resultado;
};
