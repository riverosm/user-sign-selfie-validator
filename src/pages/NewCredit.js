import React from 'react';
// import Logo192 from '../images/logo192.png';
import Input from '../components/Input.js';
import { types } from "../models/inputs";
import NewCreditController from './NewCreditController.js';

class NewCredit extends NewCreditController {
  render() {
    const { loading, newToken, showError, isLogged } = this.state;

    if (!isLogged) {
      return (
        <React.Fragment>
          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-6">
              <div className="card">
                <div className="card-header">
                  Ingreso al sistema
            </div>
                <div className="row ml-2 mr-2">
                  <div className="col-md-12">
                    <Input
                      placeholder="E-mail"
                      type={types.TEXT}
                      forwardRef={this.loginEmail}
                    ></Input>
                  </div>
                </div>
                <div className="row ml-2 mr-2">
                  <div className="col-md-12">
                    <Input
                      placeholder="Password"
                      type={types.PASSWORD}
                      forwardRef={this.loginPassword}
                    ></Input>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 text-center mt-4">
            <button type="button" onClick={this.loginNow}>Ingresar</button>
          </div>
        </React.Fragment>
      )
    }

    return (
      <React.Fragment>

        {newToken &&
          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-6 text-center alert-success rounded p-4">
              <p><b>Nuevo crédito cargado con éxito</b></p>
              <p>&nbsp;</p>
              <p>URL validación: <a href={"https://www.financiaonline.com.ar/validacion-usuario/" + newToken + "/"}>
                https://www.financiaonline.com.ar/validacion-usuario/{newToken}/
              </a></p>
            </div>
          </div>
        }

        {showError &&
          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-6 text-center alert-danger rounded p-4">
              <p><b>Se produjo un error</b></p>
            </div>
          </div>
        }

        {!newToken && !showError &&
          <React.Fragment>
            <div className="row justify-content-center mt-4">
              <div className="col-12 col-md-6">
                <div className="card">
                  <div className="card-header">
                    Información del solicitante
            </div>
                  <div className="row ml-2 mr-2">
                    <div className="col-md-12">
                      <Input
                        placeholder="Denominación"
                        type={types.TEXT}
                        forwardRef={this.name}
                        err={this.getErrors("name")}
                      ></Input>
                    </div>
                  </div>
                  <div className="row ml-2 mr-2">
                    <div className="col-md-12">
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
                    Información del crédito
            </div>
                  <div className="row ml-2 mr-2">
                    <div className="col-md-12">
                      <Input
                        placeholder="Cuota final"
                        type={types.NUMBER}
                        forwardRef={this.cuotaFinal}
                        err={this.getErrors("cuotaFinal")}
                      ></Input>
                    </div>
                  </div>
                  <div className="row ml-2 mr-2">
                    <div className="col-md-12">
                      <Input
                        placeholder="Plazo"
                        type={types.NUMBER}
                        forwardRef={this.plazo}
                        err={this.getErrors("plazo")}
                      ></Input>
                    </div>
                  </div>
                  <div className="row ml-2 mr-2">
                    <div className="col-md-12">
                      <Input
                        placeholder="A recibir"
                        type={types.NUMBER}
                        forwardRef={this.neto}
                        err={this.getErrors("neto")}
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center mt-4 text-center mb-4">
              <div className="col-6 col-md-3">
                <button type="button" onClick={this.addCredit} disabled={loading}>
                  {!loading && "Agregar crédito"}
                  {loading &&
                    <div class="spinner-border" role="status">
                      <span class="sr-only">Agregando ...</span>
                    </div>
                  }
                </button>
              </div>
            </div>
          </React.Fragment>
        }
      </React.Fragment >
    );
  }
}

export default NewCredit;
