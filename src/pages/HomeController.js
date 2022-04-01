import React from "react";
import PageController from "./PageController.js";
import validationsApi from "../actions/validationsApi.js";
import creditsApi from "../actions/creditsApi.js";
// import { thisTypeAnnotation } from "@babel/types";
import validateFields from "../validations/homeValidation";

class HomeController extends PageController {
  areaCode = React.createRef();
  phoneNumber = React.createRef();

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      errors: [],
      creditData: [],
      stepNumber: null,
      token: null,
      cameraPermission: false,
      totalSteps: 0,
      realStep: 1,
      askCameraPermission: false,
      alreadyValidated: false,
    };
  }

  async componentDidMount() {

    const { token } = this.props.match.params;

    localStorage.removeItem("userSignature");
    localStorage.removeItem("userSelfie");
    localStorage.removeItem("userDocumentFront");
    localStorage.removeItem("userDocumentBack");
    localStorage.removeItem("creditData");

    const { credits } = await creditsApi.get(`token=${token}`);

    if (credits && credits.length === 1) {
      const creditData = credits[0];

      // Si tengo el paso de DNI (2,3) o selfie (4) tengo que pedir permiso a la cámara

      const askCameraPermission = creditData.steps.some(item => 2 === item || 4 === item);

      // Agrego el último paso que va a ser siempre el celular

      creditData.steps.push(6)

      this.setState({
        creditData,
        token,
        stepNumber: 0,
        totalSteps: 1 + creditData.steps.length,
        askCameraPermission,
        alreadyValidated: creditData.isValidated
      })
    } else {
      this.setState({
        stepNumber: -1,
      })
    }
  }

  /**
 * Transforma numero a formato de 2 decimales
 */
  convertNumber = (number) => {
    return '$' + Number(number).toLocaleString("es", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  showInfo = () => {
    this.setState({
      stepNumber: 1,
    })
  }

  sendInfo = () => {
    this.sendValidation();
  }

  nextStep = () => {
    if (this.refs.acceptTerms !== undefined && !this.refs.acceptTerms.checked) {
      const errors = []
      errors.push({ field: "acceptTerms", message: "Debe aceptar para continuar" });
      this.setState({
        errors
      })
    } else if (this.refs.acceptPerson !== undefined && !this.refs.acceptPerson.checked) {
      const errors = []
      errors.push({ field: "acceptPerson", message: "Debe aceptar para continuar" });
      this.setState({
        errors
      })
    } else if (this.refs.acceptSujet !== undefined && !this.refs.acceptSujet.checked) {
      const errors = []
      errors.push({ field: "acceptSujet", message: "Debe aceptar para continuar" });
      this.setState({
        errors
      })
    } else {
      this.setState({
        realStep: this.state.realStep + 1,
        stepNumber: this.state.creditData.steps.shift(),
      })
    }
  }

  checkCameraPermissions = () => {
    const permissions = navigator.mediaDevices.getUserMedia({ audio: false, video: true })
    permissions.then((stream) => {
      this.setState({
        cameraPermission: true
      })
      stream.getTracks().forEach(track => {
        track.stop();
      });
    }).catch((err) => {
      this.setState({
        cameraPermission: false
      })
    });
  }

  sendValidation = async () => {
    const sendInfo = {
      token: this.state.token,
      areaCode: this.areaCode.current.value,
      phoneNumber: this.phoneNumber.current.value,
      signature: localStorage.getItem("userSignature"),
      selfie: localStorage.getItem("userSelfie"),
      documentFront: localStorage.getItem("userDocumentFront"),
      documentBack: localStorage.getItem("userDocumentBack"),
    }

    // this.setState({
    //   loading: true,
    // })

    const errors = validateFields(sendInfo);

    if (errors.length === 0) {
      this.setState({
        stepNumber: 7,
      })

      await validationsApi.add(sendInfo);
    } else {
      this.setState({
        errors
      })
    }
  }
}

export default HomeController;
