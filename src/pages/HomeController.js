import React from "react";
import PageController from "./PageController.js";
import pdfsApi from "../actions/pdfApi.js";
import creditsApi from "../actions/creditsApi.js";
// import { thisTypeAnnotation } from "@babel/types";
// import validateFields from "../validations/homeValidation";

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

      this.setState({
        creditData,
        token: {token},
        stepNumber: 0,
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

  /**
   * Obtiene los datos del usuario con el token
   */
  getcreditData = () => {

    const creditData = {
      name: this.name.current.value,
      surname: this.surname.current.value,
      documentType: this.documentType.current.value,
      documentNumber: this.documentNumber.current.value,
      capital: this.capital.current.value,
      plazo: this.plazo.current.value,
      cuota: this.cuota.current.value,
      neto: this.neto.current.value,
    };

    this.setState({
      creditData
    })

    return creditData;
  };

  showInfo = () => {
    this.setState({
      stepNumber: 1,
    })
  }

  showUploadImages = () => {
    this.setState({
      stepNumber: 2,
    })

    // return;

    // const creditData = this.getcreditData();

    // const errors = validateFields(creditData);

    // if (errors.length === 0) {
    //   localStorage.setItem(
    //     "creditData",
    //     JSON.stringify((creditData))
    //   );
    //   this.setState({
    //     showUploadImages: true,
    //   })
    // } else {
    //   this.setState({ errors });
    // }
  }


  buttonFrontDocumentOnClick = () => {
    this.setState({
      stepNumber: 3,
    })
  }

  buttonRearDocumentOnClick = () => {
    this.setState({
      stepNumber: 4,
    })
  }

  buttonSelfieOnClick = () => {
    this.setState({
      stepNumber: 5,
    })
  }

  buttonSignatureOnClick = () => {
    this.setState({
      stepNumber: 6,
    })
  }

  sendInfo = () => {
    this.setState({
      stepNumber: 7,
    })

    this.createPdf();
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

  createPdf = async () => {
    const sendInfo = {
      signature: localStorage.getItem("userSignature"),
      selfie: localStorage.getItem("userSelfie"),
      documentFront: localStorage.getItem("userDocumentFront"),
      documentBack: localStorage.getItem("userDocumentBack"),
      areaCode: this.areaCode.current.value,
      phoneNumber: this.phoneNumber.current.value,
      token: this.state.token,
    }

    this.setState({
      loading: true,
    })

    await pdfsApi.add(sendInfo);

    this.setState({
      showThanks: true,
    })
  }
}

export default HomeController;
