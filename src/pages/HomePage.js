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
    const { creditData, stepNumber, cameraPermission } = this.state;

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

      {stepNumber === 0 && 
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
                  <p>Nombre y apellido: <b>{creditData.name}</b></p>
                  <p>Documento: <b>{creditData.documentNumber}</b></p>
                  <p>&nbsp;</p>
                  <p>Cuota final: <b>{this.convertNumber(creditData.cuotaFinal)}</b></p>
                  <p>Plazo: <b>{creditData.plazo}</b></p>
                  <p>Neto a recibir: <b>{this.convertNumber(creditData.neto)}</b></p>
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
                    <label className="custom-control-label" htmlFor="acceptSujet">No soy Sujeto Obligado</label>
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
        // <WebcamPhoto
        //   buttonOnClick={this.buttonFrontDocumentOnClick}
        //   documentPosition={"Frente"}
        //   documentImg={"userDocumentFront"}
        // />
        <Webcam
          buttonOnClick={this.buttonFrontDocumentOnClick}
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
          buttonOnClick={this.buttonRearDocumentOnClick}
          documentImg={"userDocumentBack"}
          camera={"environment"}
          title={"Foto de dorso del DNI"}
          showSelfieData={false}
        />
      }

      {stepNumber === 4 &&
        <Webcam
          buttonOnClick={this.buttonSelfieOnClick}
          documentImg={"userSelfie"}
          camera={"user"}
          title={"Tu Selfie"}
          showSelfieData={true}
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
