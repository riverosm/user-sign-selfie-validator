import React from 'react';
// import Logo192 from '../images/logo192.png';
import Input from '../components/Input.js';
import { types } from "../models/inputs";
import NewCreditController from './NewCreditController.js';

class NewCredit extends NewCreditController {
  render() {
    const { loading, newToken, showError } = this.state;

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
                      <select ref={this.documentType} disabled>
                        {/* <option value="1">Seleccione tipo de documento ...</option> */}
                        <option value="1">DNI</option>
                        <option value="1">CI</option>
                        <option value="1">LE</option>
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
                    Información del crédito
            </div>
                  <div className="row ml-2 mr-2">
                    <div className="col-md-6">
                      <Input
                        placeholder="Cuota final"
                        type={types.NUMBER}
                        forwardRef={this.cuotaFinal}
                        err={this.getErrors("cuotaFinal")}
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
                        placeholder="Neto"
                        type={types.NUMBER}
                        forwardRef={this.neto}
                        err={this.getErrors("neto")}
                      ></Input>
                    </div>
                    <div className="col-md-6">
                      <Input
                        placeholder="Próximo Vto. Haberes"
                        type={types.NUMBER}
                        forwardRef={this.vtoHaberes}
                        err={this.getErrors("vtoHaberes")}
                      ></Input>
                    </div>
                  </div>

                  <div className="row ml-2 mr-2">
                    <div className="col-md-12">
                      <Input
                        placeholder="CBU"
                        type={types.NUMBER}
                        forwardRef={this.CBU}
                        err={this.getErrors("CBU")}
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
