import PageController from "./PageController.js";
import pdfsApi from "../actions/pdfApi.js";

class HomeController extends PageController {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      showSignature: false,
      showSelfie: false,
      showThanks: false,
      allInfoOk: false,
      showUploadImages: false,
    };
  }
  async componentDidMount() {
    localStorage.removeItem("userSignature");
    localStorage.removeItem("userSelfie");
    localStorage.removeItem("userDocumentFront");
    localStorage.removeItem("userDocumentBack");
  }

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
    this.setState({
      showUploadImages: true,
    })
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
