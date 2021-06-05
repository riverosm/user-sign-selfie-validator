import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

function Layout(props) {
  return (
    <React.Fragment>
      <ScrollToTop />
      <div className="container-fluid">
        <Header />
        {props.children}
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Layout;
