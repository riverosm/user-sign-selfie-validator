import React from "react";
import PageController from "./PageController.js";
import pdfsApi from "../actions/pdfApi.js";
import validateFields from "../validations/homeValidation";

class HomeController extends PageController {
  name = React.createRef();
  surname = React.createRef();
  documentType = React.createRef();
  documentNumber = React.createRef();
  capital = React.createRef();
  plazo = React.createRef();
  cuota = React.createRef();
  neto = React.createRef();

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      showSignature: false,
      showSelfie: false,
      showThanks: false,
      allInfoOk: false,
      showUploadImages: false,
      errors: [],
    };
  }
  async componentDidMount() {
    localStorage.removeItem("userSignature");
    localStorage.removeItem("userSelfie");
    localStorage.removeItem("userDocumentFront");
    localStorage.removeItem("userDocumentBack");
    localStorage.removeItem("userData");
  }

  /**
   * Obtiene los datos de la oferta
   */
  getUserData = () => {
    const userData = {
      name: this.name.current.value,
      surname: this.surname.current.value,
    };

    return userData;
  };

  showSelfie = () => {
    this.setState({
      showSelfie: true,
    })
  }

  hideSelfie = () => {
    this.setState({
      showSelfie: false,
    })
  }

  showSignature = () => {
    this.setState({
      showSignature: true,
    })
  }

  hideSignature = () => {
    this.setState({
      showSignature: false,
    })
  }

  showUploadImages = () => {

    // this.setState({
    //   showUploadImages: true,
    // })

    // return;

    const userData = this.getUserData();

    const errors = validateFields(userData);

    if (errors.length === 0) {
      localStorage.setItem(
        "userData",
        JSON.stringify((userData))
      );
      this.setState({
        showUploadImages: true,
      })
    } else {
      this.setState({ errors });
    }
  }

  hideUploadImages = () => {
    this.setState({
      showUploadImages: false,
    })
  }

  buttonSelfieOnClick = () => {
    this.hideSelfie();
    this.showSignature();
  }

  buttonSignatureOnClick = () => {
    this.hideSignature();
    this.setState({
      allInfoOk: true,
    })
  }

  buttonUploadImagesOnClick = () => {
    this.hideUploadImages();
    this.showSelfie();
  }

  createPdf = async () => {
    const sendInfo = {
      signature: localStorage.getItem("userSignature"),
      selfie: localStorage.getItem("userSelfie"),
      documentFront: localStorage.getItem("userDocumentFront"),
      documentBack: localStorage.getItem("userDocumentBack"),
      userData: localStorage.getItem("userData"),
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
