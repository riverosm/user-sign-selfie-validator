import React from "react";

class PageController extends React.Component {
  /**
   * Retorna los errores de un campo especifico
   */
  getErrors = (field) => {
    const errors = this.state.errors;
    return errors.filter((err) => field === err.field);
  };

  /**
 * Transforma numero a formato de 2 decimales
 */
  convertNumber = (number) => {
    return '$' + Number(number).toLocaleString("es", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
}

export default PageController;