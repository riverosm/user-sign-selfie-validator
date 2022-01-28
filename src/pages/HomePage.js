import React from 'react';
import HomeController from './HomeController.js';
import Signature from '../components/Signature.js';
import Webcam from '../components/Webcam.js';
import ImageUploaderAndResizer from '../components/ImageUploaderAndResizer.js';

class HomePage extends HomeController {
  render() {
    const { showSignature, showSelfie, showThanks, allInfoOk, loading, showUploadImages } = this.state;

    if (showThanks) {
      return (
        <React.Fragment>
          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-6 text-center">
              <div class="alert alert-success" role="alert">
                <p><b>¡Muchas gracias!</b></p>
                <p>&nbsp;</p>
                <p>Te contactaremos a la brevedad para finalizar con las validaciones.</p>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>
        {showSignature &&
          <Signature
            buttonSignatureOnClick={this.buttonSignatureOnClick}
          />
        }
        {showSelfie &&
          <Webcam
            buttonSelfieOnClick={this.buttonSelfieOnClick}
          />
        }
        {showUploadImages &&
          <ImageUploaderAndResizer
            buttonUploadImagesOnClick={this.buttonUploadImagesOnClick}
          />
        }
        {allInfoOk &&
          <React.Fragment>
            <div className="row justify-content-center mt-4 text-center">
              <div className="col-12 col-md-12">
                <button type="button" className="btn btn-block btn-outline-success" onClick={this.createPdf}>
                  {loading && <span className="spinner-border spinner-border-sm" role="status"></span>}
                  {!loading && "Enviar información"}
                </button>
              </div>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="card-header">
                    Tu imagen
                  </div>
                  <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item">
                      <img src={localStorage.getItem("userSelfie")} alt="Foto" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="card-header">
                    Tu firma
                  </div>
                  <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item">
                      <img src={localStorage.getItem("userSignature")} alt="Selfie" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </React.Fragment>
        }
        {
          !showSignature && !showSelfie && !allInfoOk && !showUploadImages &&
          <React.Fragment>
            <div className="row justify-content-center mt-4">
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="card-header">
                    Información del solicitante
              </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Nombre</li>
                    <li className="list-group-item">DNI</li>
                    <li className="list-group-item">CUIT</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="card-header">
                    Información del préstamo
              </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Número</li>
                    <li className="list-group-item">Importe</li>
                    <li className="list-group-item">Cuotas</li>
                    <li className="list-group-item">TNA</li>
                    <li className="list-group-item">TEA</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="card-header">
                    Declara ser persona ...
              </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                        <label className="form-check-label">Sí</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label className="form-check-label">No</label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-4 text-center">
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-block btn-outline-secondary">Cancelar</button>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-block btn-outline-success" onClick={this.showUploadImages}>Aceptar</button>
              </div>
            </div>
          </React.Fragment >
        }
      </React.Fragment >
    );
  }
}

export default HomePage;
