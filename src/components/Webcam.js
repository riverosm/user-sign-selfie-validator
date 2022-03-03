import React, { Component } from "react";
import Webcam from "react-webcam";

class WebcamJS extends Component {

  state = { imgURL: null }

  async componentDidMount() {
    this.checkWebCam();
  }

  webcamRef = React.createRef();

  clear = () => {
    this.setState({
      imgURL: null,
    })
  }

  capture = () => {
    const imageSrc = this.webcamRef.current.getScreenshot();

    let stream = this.webcamRef.current.video.srcObject;

    if (stream) {
      this.webcamRef.current.video.srcObject = null;
      stream.getTracks().forEach((track) => {
        stream.removeTrack(track);
        track.stop();
      });
      stream = null; // this is probably redundant, but it fixes it so I'm happy.
    }

    this.setState({
      imgURL: imageSrc,
    })

    // this.setState({
    //   imgURL: 'data:image/png;base64,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',
    // })
  }

  checkWebCam = () => {
    // let md = navigator.mediaDevices;
    // if (!md || !md.enumerateDevices) return false;
    // console.log(md.enumerateDevices());
    navigator.getMedia = (navigator.getUserMedia || // use the proper vendor prefix
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia);

    navigator.getMedia({ video: true }, function () {
      console.log("Disponible")
    }, function () {
      console.log("No disponible")
    });
  }

  saveImage = () => {
    localStorage.setItem(
      "userSelfie",
      this.state.imgURL
    );

    this.props.buttonSelfieOnClick();
  }

  render() {

    let { imgURL } = this.state

    const videoConstraints = {
      width: 400,
      height: 400,
      facingMode: "environment" // "environment" // 86 x 54 mide un DNI 430 x 270 quedar· bien? --> 400 x 250 aprox
    };

    return (
      <>
        {!imgURL ?
          <React.Fragment>
            <div className="topContainer col-12 col-md-6">
              <div className="row m-2">
                <div className="col-12 col-md-12">
                  <p>Te sacaremos una foto</p>
                  <p>Cuando est√©s de acuerdo presiona "Capturar foto" y luego "Guardar foto"</p>
                </div>
              </div>
              <div className="row justify-content-center m-2">
                <Webcam
                  audio={false}
                  height={240}
                  ref={this.webcamRef}
                  screenshotFormat="image/jpeg"
                  width={380}
                  videoConstraints={videoConstraints}
                />
                <button className="btn btn-block btn-outline-success mt-2" onClick={this.capture}>Capturar foto</button>
              </div>
            </div>
          </React.Fragment>
          : null
        }

        {imgURL
          ?
          <React.Fragment>
            <div className="topContainer col-12 col-md-6">
              <div className="row justify-content-center m-2">
                <img
                  src={imgURL}
                  alt="Foto" />
              </div>
              <div className="row justify-content-center m-2">
                <div className="col-6 col-md-3">
                  <button className="btn btn-block btn-outline-secondary" onClick={this.clear}>
                    Tomar otra foto
              </button>
                </div>
                <div className="col-6 col-md-3">
                  <button className="btn btn-block btn-outline-success" onClick={this.saveImage}>
                    Guardar foto
              </button>
                </div>
              </div>
            </div>
          </React.Fragment>
          : null}

      </>
    );
  }
};

export default WebcamJS;