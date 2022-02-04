import React from "react";
import { Component } from "react";
import Resizer from "react-image-file-resizer";

class ImageUploaderAndResizer extends Component {
  state = {
    errors: [],
    maxFileSize: 2097152, // 2MB
    maxWidthOrHeight: 1600,
    imgDocumentFront: null,
    imgDocumentBack: null,
  }

  resizeFile = async (file, maxWidthOrHeight) => {
    return new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        maxWidthOrHeight,
        maxWidthOrHeight,
        "PNG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });
  };

  uploadAndResizeImage = async (e) => {
    var file = e.target.files[0];
    this.setState({
      [e.target.name]: await this.resizeFile(file, this.state.maxWidthOrHeight),
    })
  }

  saveDocuments = () => {
    localStorage.setItem(
      "userDocumentFront",
      this.state.imgDocumentFront
    );
    localStorage.setItem(
      "userDocumentBack",
      this.state.imgDocumentBack
    );

    this.props.buttonUploadImagesOnClick();
  }

  render() {
    return (
      <React.Fragment>
        <div className="topContainer col-12 col-md-6">

          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-10">
              <div className="card">
                <div className="card-header">
                  Seleccione una imagen del frente de tu DNI
              </div>

                <div className="row justify-content-center m-4 border rounded" style={{ height: '200px' }}>
                  {!this.state.imgDocumentFront &&
                    <input
                      style={{ paddingTop: '80px' }}
                      type="file"
                      name="imgDocumentFront"
                      onChange={this.uploadAndResizeImage} />
                  }
                  {this.state.imgDocumentFront &&
                    <img src={this.state.imgDocumentFront} alt="Imagen" style={{ border: '0px', maxHeight: '180px', marginTop: '10px' }} />
                  }
                </div>

              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-10">
              <div className="card">
                <div className="card-header">
                  Seleccione una imagen del dorso de tu DNI
              </div>

                <div className="row justify-content-center m-4 border rounded" style={{ height: '200px' }}>
                  {!this.state.imgDocumentBack &&
                    <input
                      style={{ paddingTop: '80px' }}
                      type="file"
                      name="imgDocumentBack"
                      onChange={this.uploadAndResizeImage} />
                  }
                  {this.state.imgDocumentBack &&
                    <img src={this.state.imgDocumentBack} alt="Imagen" style={{ border: '0px', maxHeight: '180px', marginTop: '10px' }} />
                  }
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center m-2">
            <div className="col-6 col-md-3">
              <button onClick={this.saveDocuments}>
                Continuar
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

}

export default ImageUploaderAndResizer;