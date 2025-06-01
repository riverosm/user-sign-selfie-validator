import React from 'react';
import HomeController from './HomeController.js';
import Signature from '../components/Signature.js';
import Webcam from '../components/Webcam.js';
// import WebcamPhoto from '../components/WebcamPhoto.js';
// import ImageUploaderAndResizer from '../components/ImageUploaderAndResizer.js';
// import LogoMutual from '../images/cropped-LogoMutual21-170x56.jpeg';
// import Logo512 from '../images/logo512.png';
import Logo192 from '../images/logo192.png';
import Input from '../components/Input.js';
import { types } from "../models/inputs";

class HomePage extends HomeController {
  render() {
    const { creditData, stepNumber, cameraPermission, realStep, totalSteps, askCameraPermission, alreadyValidated } = this.state;

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
            <img src={Logo192} style={{ border: 'solid 0px', maxWidth: '80px' }} alt="Logo" />
          </div>
          <div className="col-12 text-center mt-4">
              El usuario no existe
          </div>
        </div>
      }

      {alreadyValidated &&
        <div className="row justify-content-center mt-4">
        <div className="col-12 text-center">
            Bienvenido a
        </div>
        <div className="col-12 text-center mt-4">
            <h3>Mutual Bicentenario</h3>
        </div>
        <div className="col-12 text-center mt-4">
            <img src={Logo192} style={{ border: 'solid 0px', maxWidth: '80px' }} alt="Logo" />
          </div>
          <div className="col-12 text-center mt-4">
              Validación realizada con éxito
          </div>
        </div>
      }

      {stepNumber === 0 && !alreadyValidated &&
        <div className="row justify-content-center mt-4">
          <div className="col-12 text-center">
              Bienvenido a
          </div>
          <div className="col-12 text-center mt-4">
              <h3>Mutual Bicentenario</h3>
          </div>
          <div className="col-12 text-center mt-4">
            <img src={Logo192} style={{ border: 'solid 0px', maxWidth: '80px' }} alt="Logo" />
          </div>
          <div className="col-12 text-center mt-4">
              Queremos hacerte la vida más fácil
          </div>
          <div className="col-12 text-center mt-4" hidden={!askCameraPermission}>
            <div className="custom-switch">
              <input type="checkbox" className="custom-control-input" id="acceptCamera" checked={cameraPermission} />
              <label className="custom-control-label" htmlFor="acceptCamera" onClick={this.checkCameraPermissions}>Acepto acceso a mi c&aacute;mara para la validaci&oacute;n</label>
            </div>
          </div>
          <div className="col-12 text-center mt-4" hidden={!askCameraPermission}>
            <button type="button" onClick={this.showInfo} disabled={!cameraPermission}>Continuar</button>
          </div>
          <div className="col-12 text-center mt-4" hidden={askCameraPermission}>
            <button type="button" onClick={this.showInfo}>Continuar</button>
          </div>
        </div>
      }

      {stepNumber > 0 && stepNumber < 7 &&
        <div className="row justify-content-center mt-4 align-items-center">
          <div className="col-6">
            <img src={Logo192} style={{ border: 'solid 0px', width: '40px' }} alt="Logo" />
          </div>
          <div className="col-6 text-center">
            Paso {realStep} de {totalSteps}
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
                  <p>Nombre y apellido: <b>{creditData.name}</b></p>
                  <p>Documento: <b>{creditData.documentNumber}</b></p>
                  <p>&nbsp;</p>
                  <p>Cuota final: <b>{this.convertNumber(creditData.cuotaFinal)}</b></p>
                  <p>Plazo: <b>{creditData.plazo}</b></p>
                  <p>A recibir: <b>{this.convertNumber(creditData.neto)}</b></p>
                  <p>&nbsp;</p>
                  <div className="custom-switch">
                    <input type="checkbox" className="custom-control-input" id="acceptTerms" ref="acceptTerms" />
                    <label className="custom-control-label" htmlFor="acceptTerms">Acepto Términos y Condiciones</label>
                    <small className="text-small text-danger">
                      &nbsp;&nbsp;{this.getErrors("acceptTerms").map((err) => err.message)}
                      &nbsp;
                    </small>
                  </div>
                  <div className="custom-switch">
                    <input type="checkbox" className="custom-control-input" id="acceptPerson" ref="acceptPerson" />
                    <label className="custom-control-label" htmlFor="acceptPerson">No soy Persona Políticamente Expuesa</label>
                    <small className="text-small text-danger">
                      &nbsp;&nbsp;{this.getErrors("acceptPerson").map((err) => err.message)}
                      &nbsp;
                    </small>
                  </div>
                  <div className="custom-switch">
                    <input type="checkbox" className="custom-control-input" id="acceptSujet" ref="acceptSujet" />
                    <label className="custom-control-label" htmlFor="acceptSujet">No soy Sujeto Obligado</label>
                    <small className="text-small text-danger">
                      &nbsp;&nbsp;{this.getErrors("acceptSujet").map((err) => err.message)}
                      &nbsp;
                    </small>
                  </div>
              </ul>
            </div>

            <div className="col-12 text-center mt-4">
              <button type="button" onClick={this.nextStep} disabled={false}>Continuar</button>
            </div>

        </div>
      </div>  
      }

      {stepNumber === 2 &&
        // <WebcamPhoto
        //   buttonOnClick={this.buttonFrontDocumentOnClick}
        //   documentPosition={"Frente"}
        //   documentImg={"userDocumentFront"}
        // />
        <Webcam
          buttonOnClick={this.nextStep}
          documentImg={"userDocumentFront"}
          camera={"environment"}
          title={"Foto de frente del DNI"}
          showSelfieData={false}
        />
      }

      {stepNumber === 3 &&
        // <WebcamPhoto
        //   buttonOnClick={this.buttonRearDocumentOnClick}
        //   documentPosition={"Dorso"}
        //   documentImg={"userDocumentBack"}
        // />
        <Webcam
          buttonOnClick={this.nextStep}
          documentImg={"userDocumentBack"}
          camera={"environment"}
          title={"Foto de dorso del DNI"}
          showSelfieData={false}
        />
      }

      {stepNumber === 4 &&
        <Webcam
          buttonOnClick={this.nextStep}
          documentImg={"userSelfie"}
          camera={"user"}
          title={"Tu Selfie"}
          showSelfieData={true}
        />
      }

      {stepNumber === 5 &&
        <Signature
          buttonSignatureOnClick={this.nextStep}
        />
      }

      {stepNumber === 6 &&
        <div className="row justify-content-center mt-4">
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-header">
              Confirmanos tus datos
            </div>
            <div className="row ml-2 mr-2">
                <div className="col-4">
                  <Input
                    placeholder="362"
                    type={types.NUMBER}
                    forwardRef={this.areaCode}
                    err={this.getErrors("areaCode")}
                  ></Input>
                </div>
                <div className="col-8">
                  <Input
                    placeholder="XXXXXXX"
                    type={types.NUMBER}
                    forwardRef={this.phoneNumber}
                    err={this.getErrors("phoneNumber")}
                  ></Input>
                </div>
              </div>
              <div className="row ml-4 mb-4">
                <div className="col-12 text-small">
                  Celular con c&oacute;digo de &Aacute;rea sin 0 ni 15
                </div>
              </div>
                <div className="col-12 text-small">
                  <Input
                    placeholder="Correo electrónico"
                    type={types.TEXT}
                    forwardRef={this.email}
                    err={this.getErrors("email")}
                  ></Input>
                </div>
              {creditData.ask_cbu &&
                <div className="col-12 text-small mb-2">
                  <Input
                    placeholder="CBU"
                    type={types.NUMBER}
                    forwardRef={this.cbuNumber}
                    err={this.getErrors("cbuNumber")}
                  ></Input>
                </div>}
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
              <p>Para finalizar por favor hace click en el botón, que te permitirá acceder a nuestro whatsApp.</p>
              <p>&nbsp;</p>
              <p>
                <a href="https://bit.ly/Mubi_Alta_prestamo" target="_blank" rel="noreferrer"><button type="button">WhatsApp</button></a>
              </p>
              <p>&nbsp;</p>
              <img src={Logo192} style={{ border: 'solid 0px', maxWidth: '80px' }} alt="Logo" />
              <p>&nbsp;</p>
              <h3>Mutual Bicentenario</h3>
          </div>
        </div>  
      }

      </React.Fragment >
    );
  }
}

export default HomePage;
