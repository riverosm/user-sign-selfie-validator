import React from 'react';
import HomeController from './HomeController.js';
import Signature from '../components/Signature.js';
import Webcam from '../components/Webcam.js';
import ImageUploaderAndResizer from '../components/ImageUploaderAndResizer.js';
import LogoMutual from '../images/cropped-LogoMutual21-170x56.jpeg';
import Input from '../components/Input.js';
import { types } from "../models/inputs";

class HomePage extends HomeController {
  render() {
    const { showSignature, showSelfie, showThanks, allInfoOk, loading, showUploadImages } = this.state;

    if (showThanks) {
      return (
        <React.Fragment>
          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-6 text-center">
              <div className="alert alert-success" role="alert">
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
        <div className="row justify-content-center mt-4">
          <div className="col-md-6">
            <div className="row align-items-center">
              <div className="col-md-3">
                <img src={LogoMutual} style={{ border: 'solid 0px' }} alt="Logo" />
              </div>
              <div className="col-md-9 text-center d-none d-sm-block">
                <h3>Validación de identidad</h3>
              </div>
            </div>
          </div>
        </div>
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
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-md-6">
                          <Input
                            placeholder="Nombre"
                            type={types.TEXT}
                            forwardRef={this.name}
                            err={this.getErrors("name")}
                          ></Input>
                        </div>
                        <div className="col-md-6">
                          <Input
                            placeholder="Apellido"
                            type={types.TEXT}
                            forwardRef={this.surname}
                            err={this.getErrors("surname")}
                          ></Input>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-md-6">
                          <select>
                            <option value="1">DNI</option>
                            <option value="1">CI</option>
                            <option value="1">LE</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <input type="text" placeholder="Nro Documento" />
                        </div>
                      </div>
                    </li>
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
                  <div className="row ml-2 mr-2">
                    <div className="col-md-6">
                      <Input
                        placeholder="Nombre"
                        type={types.TEXT}
                        forwardRef={this.name}
                        err={this.getErrors("name")}
                      ></Input>
                    </div>
                    <div className="col-md-6">
                      <Input
                        placeholder="Apellido"
                        type={types.TEXT}
                        forwardRef={this.surname}
                        err={this.getErrors("surname")}
                      ></Input>
                    </div>
                  </div>
                  <div className="row ml-2 mr-2">
                    <div className="col-md-6">
                      <select>
                        <option value="1">DNI</option>
                        <option value="1">CI</option>
                        <option value="1">LE</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Nro Documento" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* <div className="row justify-content-center mt-4">
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
            </div> */}

            <div className="row justify-content-center mt-4">
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="card-header">
                    Términos y condiciones
              </div>
                  <ul className="list-group list-group-flush">
                    <div className="row justify-content-center m-4">
                      <div className="col-md-10">
                        <textarea disabled
                          value="Acá los términos Acá los términos Acá los términos Acá los términos Acá los términos Acá los términos Acá los términos Acá los términos
                          Acá los términos Acá los términos Acá los términos Acá los términos Acá los términos Acá los términos Acá los términos Acá los términos
                          Acá los términos Acá los términos Acá los términos Acá los términos Acá los términos Acá los términos Acá los términos Acá los términos
                          Acá los términos Acá los términos Acá los términos Acá los términos Acá los términos Acá los términos Acá los términos Acá los términos
                          Acá los términos Acá los términos Acá los términos Acá los términos Acá los términos Acá los términos Acá los términos Acá los términos"
                          >
                        </textarea>
                      </div>
                    </div>
                    <li className="list-group-item">
                      <div className="form-check form-check-inline">
                        <div className="custom-switch">
                          <input type="checkbox" className="custom-control-input" id="acceptTerms" />
                          <label className="custom-control-label" htmlFor="acceptTerms">Acepto haber leído los términos y condiciones</label>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <div className="row justify-content-center mt-4 text-center">
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-block btn-outline-secondary">Cancelar</button>
              </div>
              <div className="col-6 col-md-3">
                <button type="button" className="btn btn-block btn-outline-success" onClick={this.showUploadImages}>Aceptar</button>
              </div>
            </div> */}
            <div className="row justify-content-center mt-4 text-center mb-4">
              <div className="col-6 col-md-3">
                <button type="button" onClick={this.showUploadImages}>Continuar</button>
              </div>
            </div>
          </React.Fragment >
        }
      </React.Fragment >
    );
  }
}

export default HomePage;
