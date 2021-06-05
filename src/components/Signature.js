import React, { Component } from 'react'
import SignaturePad from 'react-signature-canvas'

class Signature extends Component {
  state = { trimmedDataURL: null }

  sigPad = {}

  clear = () => {
    this.sigPad.clear()
    localStorage.removeItem("userSignature");
  }

  saveSignature = () => {
    localStorage.setItem(
      "userSignature",
      this.sigPad.getCanvas()
        .toDataURL('image/png'))

    this.props.buttonSignatureOnClick();
  }

  render() {
    return (
      <React.Fragment>
        <div className="topContainer col-12 col-md-6">
          <div className="row m-2">
            <div className="col-12 col-md-12">
              <p>Ingresa tu firma</p>
              <p>Cuando estés de acuerdo presiona "Guardar firma"</p>
            </div>
          </div>
          <div className="row justify-content-center m-2">
            <SignaturePad
              canvasProps={{ className: "signaturePad" }}
              ref={(ref) => { this.sigPad = ref }} />
          </div>
          <div className="row justify-content-center m-2">
            <div className="col-6 col-md-3">
              <button className="btn btn-block btn-outline-secondary" onClick={this.clear}>
                Limpiar
              </button>
            </div>
            <div className="col-6 col-md-3">
              <button className="btn btn-block btn-outline-success" onClick={this.saveSignature}>
                Guardar firma
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Signature;