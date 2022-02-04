// Contantes de error
const labels = {
  REQUIRED: "Por favor complete este campo",
  NO_MATCH: "Las contraseñas deben coincidir",
  NO_VALID_EMAIL: "Dirección no valida",
  NO_VALID_PASSWORD: "Mínimo 8 caracteres, uno numérico y uno especial",
  USER_EXISTS: "Usuario existente",
  WRONG_CHARACTERS: "Contiene caracteres no permitidos",
  BOTH_STOK_EMPTY: "Ambos stock no pueden estar vacios",
  NOT_ENOUGH_STOCK: "No hay suficiente stock",
  INVALID_NEW_PASSWORDS: "Las contraseñas nuevas no coinciden",
  EIGHT_CHARS_AT_LEAST: "La nueva contraseña debe tener ocho caracteres mínimo",
  GREATER_THAN_ZERO: "El número debe ser mayor a cero",
  INTEGER_REQUIRED: "El número debe ser entero",
  INVALID_MAIL: "La dirección de correo no es válida.",
};

/**
 * Función para validar si un campo es nulo
 *
 * @param {} value
 */
const isNull = (value) => {
  return value === undefined || value === null || value.length === 0;
};

/**
 * Función para validar si se cargo el precio
 *
 * @param {} value
 */
const isNumberEmpty = (value) => {
  return (
    value === undefined || value === null || value.length === 0 || value === 0
  );
};

/**
 * Función para validar un dropdown tiene un campo seleccionado
 *
 * @param {} value
 */
const isSelected = (value) => {
  return value === 0;
};

/**
 * Función para validar si un número es entero
 *
 * @param {} value
 */

const isInt = (n) => {
  return Number(n) === n && n % 1 === 0;
}

/**
 * Función para validar si un número es decimal
 *
 * @param {} value
 */

const isFloat = (n) => {
  return Number(n) === n && n % 1 !== 0;
}

/**
 * Transforma numero a formato de 2 decimales
 */
const convertNumber = (number) => {
  return Number(number).toLocaleString("es", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/**
 * Transforma numero a entero
 */

const roundNumberToInt = (number) => {
  return Math.round(number);
}

/**
 * Devuelve el número entero en formato España $ 10.000
 */

const formatRoundedInteger = (number) => {
  return roundNumberToInt(number).toLocaleString("es");
}

/**
 * Transforma fecha a formato DD/MM/YYYY
 */
const convertDate = (dateFormat) => {
  let date = `${dateFormat.getDate().toString().padStart(2, "0")}/`;
  date += `${(dateFormat.getMonth() + 1).toString().padStart(2, "0")}/`;
  date += `${dateFormat.getFullYear()}`;

  return date;
}

/**
 * Función para validar si un campo es mail válido
 *
 * @param {} value
 */
const isValidMail = (value) => {
  var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  return pattern.test(value);
}


export { labels, isNull, isSelected, isNumberEmpty, convertNumber, convertDate, isInt, isFloat, roundNumberToInt, formatRoundedInteger, isValidMail };
