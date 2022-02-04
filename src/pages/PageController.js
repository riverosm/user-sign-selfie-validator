import React from "react";

class PageController extends React.Component {
  /**
   * Funciรณn que retorna los errores de un campo especifico
   */
  getErrors = (field) => {
    const errors = this.state.errors;
    return errors.filter((err) => field === err.field);
  };
}

export default PageController;