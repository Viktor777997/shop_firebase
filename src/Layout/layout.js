import React from "react";
import './layout.scss'
import Header from "./Header"
import Footer from "./Footer";


const Main = (props) => {
  const {children} = props;

  return (
    <div className="layout-div">
      <Header/>
      <div className="main">{children}</div>
      <Footer />
    </div>
  )
}

export default Main;