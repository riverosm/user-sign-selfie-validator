import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from './Layout.js';

import HomePage from '../pages/HomePage.js';
// import NewCredit from '../pages/NewCredit.js';
// import SignaturePage from '../pages/SignaturePage.js';
// import WebcamPage from '../pages/WebcamPage.js';

import '../styles/estilos.css';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/validacion-usuario/" component={HomePage} />
          {/* <Route exact path="/validacion-usuario/agregar/" component={NewCredit} /> */}
          <Route
            exact
            path="/validacion-usuario/:token/"
            component={HomePage}
          />
          {/* <Route exact path="/validacion-usuario/sign/" component={SignaturePage} />
          <Route exact path="/validacion-usuario/selfie/" component={WebcamPage} /> */}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

// https://fernandomatiasdv.medium.com/reactjs-cre%C3%A1-un-componente-de-firma-digital-con-hooks-efb853d4f268
// https://medium.com/alameda-dev/react-native-pdf-digital-signature-b63e12cdc714
// https://bearnithi.com/2020/03/20/take-a-selfie-with-react-access-web-camera-js/