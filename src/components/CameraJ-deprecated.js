import React from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import PageController from '../pages/PageController';

class CameraJ extends PageController {
  handleTakePhoto = (dataUri) => {
    // Do stuff with the photo...
    console.log('takePhoto');
  }

  handleTakePhotoAnimationDone = (dataUri) => {
    // Do stuff with the photo...
    console.log('takePhoto');
  }

  handleCameraError = (error) => {
    // Do stuff with the photo...
    console.log('handleCameraError');
  }

  handleCameraStart = (stream) => {
    // Do stuff with the photo...
    console.log('handleCameraStart');
  }

  handleCameraStop = () => {
    // Do stuff with the photo...
    console.log('handleCameraStop');
  }

  render() {
    return (
      <React.Fragment>
        <div className="topContainer col-12 col-md-6">
          <div className="row m-2">
            <div className="col-12 col-md-12">
              <p>Te sacaremos una foto</p>
              <p>Cuando estÃ©s de acuerdo presiona "Capturar foto" y luego "Guardar foto"</p>
            </div>
          </div>
          <div className="row justify-content-center m-4" id="content">
            <p style={{ width: "100%", height: "100%" }}>
              <Camera
                onTakePhoto={(dataUri) => { this.handleTakePhoto(dataUri); }}
                idealFacingMode="environment"
                isImageMirror={false}
                sizeFactor={1}
                idealResolution={{ width: 100, height: 200 }}
                onTakePhoto={(dataUri) => { this.handleTakePhoto(dataUri); }}
                onTakePhotoAnimationDone={(dataUri) => { this.handleTakePhotoAnimationDone(dataUri); }}
                onCameraError={(error) => { this.handleCameraError(error); }}
                idealFacingMode={FACING_MODES.ENVIRONMENT}
                imageType={IMAGE_TYPES.JPG}
                imageCompression={0.97}
                // isMaxResolution = {true}
                isImageMirror={false}
                isSilentMode={false}
                isDisplayStartCameraError={true}
                isFullscreen={false}
                sizeFactor={0.5}
                onCameraStart={(stream) => { this.handleCameraStart(stream); }}
                onCameraStop={() => { this.handleCameraStop(); }}
              />
            </p>
          </div>
          <div className="row justify-content-center m-2">
            <button className="btn btn-block btn-outline-success mt-2" onClick={this.capture}>Capturar foto</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CameraJ;