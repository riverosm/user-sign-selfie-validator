import React from "react";
import PageController from "./PageController.js";
import creditsApi from "../actions/creditsApi.js";
import validateFields from "../validations/homeValidation";

class NewCreditController extends PageController {
  name = React.createRef();
  surname = React.createRef();
  documentType = React.createRef();
  documentNumber = React.createRef();
  cuotaFinal = React.createRef();
  plazo = React.createRef();
  neto = React.createRef();
  vtoHaberes = React.createRef();
  CBU = React.createRef();

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      errors: [],
      newToken: '',
      showError: false,
    };
  }

  async componentDidMount() {

  }

  /**
   * Obtiene los datos del credito del formulario
   */
  getCreditData = () => {

    const creditData = {
      name: this.name.current.value,
      surname: this.surname.current.value,
      documentType: this.documentType.current.value,
      documentNumber: this.documentNumber.current.value,
      cuotaFinal: this.cuotaFinal.current.value,
      plazo: this.plazo.current.value,
      neto: this.neto.current.value,
      vtoHaberes: this.vtoHaberes.current.value,
      CBU: this.CBU.current.value,
    };

    return creditData;
  };

  addCredit = async () => {

    const creditData = this.getCreditData();

    const errors = validateFields(creditData);

    if (errors.length === 0) {

      this.setState({
        loading: true,
        errors: [],
      })

      let result = await creditsApi.add(creditData);

      if (result.error || result.response < 0) {
        this.setState({
          showError: true,
        })
      } else {
        this.setState({
          newToken: result.response,
        })
      }
    } else {
      this.setState({ errors });
    }
  }
}

export default NewCreditController;
