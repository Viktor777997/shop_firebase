import React from "react";

import Header from "./Header"
import Footer from "./Footer";


const Main = (props) => {
  const {children} = props;

  return (
    <div className="">
      <Header/>
      <div className="main">{children}</div>
      <Footer />
    </div>
  )
}

export default Main;