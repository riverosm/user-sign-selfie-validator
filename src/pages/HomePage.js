import React from 'react';
import HomeController from './HomeController.js';
import Signature from '../components/Signature.js';
import Webcam from '../components/Webcam.js';
import WebcamPhoto from '../components/WebcamPhoto.js';
// import ImageUploaderAndResizer from '../components/ImageUploaderAndResizer.js';
// import LogoMutual from '../images/cropped-LogoMutual21-170x56.jpeg';
// import Logo512 from '../images/logo512.png';
import Logo192 from '../images/logo192.png';
import Input from '../components/Input.js';
import { types } from "../models/inputs";

class HomePage extends HomeController {
  render() {
    const { loading, userData, stepNumber, cameraPermission } = this.state;

    return (
      <React.Fragment>

      {stepNumber < 0 && 
        <div className="row justify-content-center mt-4">
        <div className="col-12 text-center">
            Bienvenido a
        </div>
        <div className="col-12 text-center mt-4">
            <h3>Mutual Bicentenario</h3>
        </div>
        <div className="col-12 text-center mt-4">
            <img src={Logo192} style={{ border: 'solid 0px', maxWidth: '100px' }} alt="Logo" />
          </div>
          <div className="col-12 text-center mt-4">
              El usuario no existe
          </div>
        </div>
      }

      {stepNumber === 0 && 
        <div className="row justify-content-center mt-4">
          <div className="col-12 text-center">
              Bienvenido a
          </div>
          <div className="col-12 text-center mt-4">
              <h3>Mutual Bicentenario</h3>
          </div>
          <div className="col-12 text-center mt-4">
            <img src={Logo192} style={{ border: 'solid 0px', maxWidth: '100px' }} alt="Logo" />
          </div>
          <div className="col-12 text-center mt-4">
              Queremos hacerte la vida más fácil
          </div>
          <div className="col-12 text-center mt-4">
            <div className="custom-switch">
              <input type="checkbox" className="custom-control-input" id="acceptCamera" checked={cameraPermission} />
              <label className="custom-control-label" htmlFor="acceptCamera" onClick={this.checkCameraPermissions}>Acepto acceso a mi c&aacute;mara para la validaci&oacute;n</label>
            </div>
          </div>
          <div className="col-12 text-center mt-4">
            <button type="button" onClick={this.showInfo} disabled={!cameraPermission}>Continuar</button>
          </div>
        </div>
      }

      {stepNumber > 0 && stepNumber < 7 &&
        <div className="row justify-content-center mt-4 align-items-center">
          <div className="col-6">
            <img src={Logo192} style={{ border: 'solid 0px', width: '40px' }} alt="Logo" />
          </div>
          <div className="col-6 text-center">
            Paso {stepNumber} de 6
          </div>
        </div>
      }

      {stepNumber === 1 &&
        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-6">
            <div className="card">
              <div className="card-header">
                Validación de datos principales
              </div>
              <ul className="list-group list-group-flush text-left m-4">
                  <p>Nombre y apellido: <b>{userData.name + " " + userData.surname}</b></p>
                  <p>Documento: <b>{userData.documentNumber}</b></p>
                  <p>&nbsp;</p>
                  <p>Cuota final: <b>{this.convertNumber(userData.capital)}</b></p>
                  <p>Plazo: <b>{userData.plazo}</b></p>
                  <p>Neto a recibir: <b>{this.convertNumber(userData.neto)}</b></p>
                  <p>Primer Vto Haberes: <b>{this.convertNumber(userData.cuota)}</b></p>
                  <p>&nbsp;</p>
                  <div className="custom-switch">
                    <input type="checkbox" className="custom-control-input" id="acceptTerms" />
                    <label className="custom-control-label" htmlFor="acceptTerms">Acepto Términos y Condiciones</label>
                  </div>
                  <div className="custom-switch">
                    <input type="checkbox" className="custom-control-input" id="acceptPerson" />
                    <label className="custom-control-label" htmlFor="acceptPerson">No soy Persona Políticamente Expuesa</label>
                  </div>
                  <div className="custom-switch">
                    <input type="checkbox" className="custom-control-input" id="acceptSujet" />
                    <label className="custom-control-label" htmlFor="acceptSujet">Sujeto Obligado</label>
                  </div>
              </ul>
            </div>

            <div className="col-12 text-center mt-4">
              <button type="button" onClick={this.showUploadImages} disabled={false}>Continuar</button>
            </div>

        </div>
      </div>  
      }

      {stepNumber === 2 &&
        <WebcamPhoto
          buttonOnClick={this.buttonFrontDocumentOnClick}
          documentPosition={"Frente"}
          documentImg={"userDocumentFront"}
        />
      }

      {stepNumber === 3 &&
        <WebcamPhoto
          buttonOnClick={this.buttonRearDocumentOnClick}
          documentPosition={"Dorso"}
          documentImg={"userDocumentBack"}
        />
      }

      {stepNumber === 4 &&
        <Webcam
          buttonOnClick={this.buttonSelfieOnClick}
        />
      }

      {stepNumber === 5 &&
        <Signature
          buttonSignatureOnClick={this.buttonSignatureOnClick}
        />
      }

      {stepNumber === 6 &&
        <div className="row justify-content-center mt-4">
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-header">
              Confirmanos tu celular
            </div>
            <div className="row ml-2 mr-2">
                <div className="col-4">
                  <Input
                    placeholder="C&oacute;d. de &Aacute;rea"
                    type={types.NUMBER}
                    forwardRef={this.areaCode}
                    err={this.getErrors("areaCode")}
                  ></Input>
                </div>
                <div className="col-8">
                  <Input
                    placeholder="Tel&eacute;fono"
                    type={types.NUMBER}
                    forwardRef={this.phoneNumber}
                    err={this.getErrors("phoneNumber")}
                  ></Input>
                </div>
              </div>
              <div className="row ml-4 mb-4">
                <div className="col-12 text-small">
                  C&oacute;digo de &Aacute;rea sin 0 ni 15
                </div>
              </div>
            </div>
            <div className="col-12 text-center mt-4">
              <button type="button" onClick={this.sendInfo}>Finalizar</button>
            </div>
          </div>
          </div>
      }

      {stepNumber === 7 &&
          <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-6 text-center">
              <p><b>Completaste con &Eacute;xito esta validaci&oacute;n</b></p>
              <p>&nbsp;</p>
              <p>En breve te enviaremos un mensaje</p>
              <p>&nbsp;</p>
              <p>Saludos</p>
              <p>&nbsp;</p>
              <h3>Mutual Bicentenario</h3>
          </div>
        </div>  
      }

      {stepNumber === 20 &&
        <React.Fragment>
          <div className="row justify-content-center mt-4 text-center">
            <div className="col-12 col-md-12">
              <button type="button" className="btn btn-block btn-outline-success" onClick={!loading ? this.createPdf : undefined}>
                {loading && <span className="spinner-border spinner-border-sm" role="status"></span>}
                {!loading && "Enviar información"}
              </button>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-6">
              <div className="card">
                <div className="card-header">
                  Préstamo solicitado
                </div>
                <ul className="list-group list-group-flush text-left m-4">
                    <p>Nombre: {userData.name + " " + userData.surname}</p>
                    <p>Documento: {userData.documentNumber}</p>
                    <p>Capital: {userData.capital}</p>
                    <p>Plazo: {userData.plazo}</p>
                    <p>Cuota: {userData.cuota}</p>
                    <p>Neto: {userData.neto}</p>
                </ul>
              </div>
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

      {false &&
        <React.Fragment>

        <div className="row justify-content-center mt-4 align-items-center">
              <div className="col-6">
                <img src={Logo192} style={{ border: 'solid 0px', width: '40px' }} alt="Logo" />
              </div>
              <div className="col-6 text-center">
                Paso 1 de 6
              </div>
        </div>

          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-6">
              <div className="card">
                <div className="card-header">
                  Información del solicitante
            </div>
                <div className="row ml-2 mr-2">
                  <div className="col-md-6">
                    <Input
                      placeholder="Nombre(s)"
                      type={types.TEXT}
                      forwardRef={this.name}
                      err={this.getErrors("name")}
                    ></Input>
                  </div>
                  <div className="col-md-6">
                    <Input
                      placeholder="Apellido(s)"
                      type={types.TEXT}
                      forwardRef={this.surname}
                      err={this.getErrors("surname")}
                    ></Input>
                  </div>
                </div>
                <div className="row ml-2 mr-2">
                  <div className="col-md-6">
                    <select ref={this.documentType}>
                      <option value="">Seleccione tipo de documento ...</option>
                      <option value="1">DNI</option>
                      <option value="2">CI</option>
                      <option value="3">LE</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                  <Input
                      placeholder="Nro. Documento"
                      type={types.TEXT}
                      forwardRef={this.documentNumber}
                      err={this.getErrors("documentNumber")}
                    ></Input>
                  </div>
                </div>

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
                      placeholder="Capital"
                      type={types.NUMBER}
                      forwardRef={this.capital}
                      err={this.getErrors("capital")}
                    ></Input>
                  </div>
                  <div className="col-md-6">
                  <Input
                      placeholder="Plazo"
                      type={types.NUMBER}
                      forwardRef={this.plazo}
                      err={this.getErrors("plazo")}
                    ></Input>
                  </div>
                </div>
                <div className="row ml-2 mr-2">
                  <div className="col-md-6">
                  <Input
                      placeholder="Cuota"
                      type={types.NUMBER}
                      forwardRef={this.cuota}
                      err={this.getErrors("cuota")}
                    ></Input>
                  </div>
                  <div className="col-md-6">
                  <Input
                      placeholder="Neto"
                      type={types.NUMBER}
                      forwardRef={this.neto}
                      err={this.getErrors("neto")}
                    ></Input>
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
                        <input type="checkbox" className="custom-control-input" id="acceptTerms" ref={this.acceptTerms} />
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

        {/* <div className="row justify-content-center mt-4">
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
        </div> */}

      </React.Fragment >
    );
  }
}

export default HomePage;
