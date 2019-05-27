import React from "react";
import Footer from "./Footer";
import Emblem from "./Emblem";

function Info() {
  return (
    <div className="Header1">
      <header className="box3">
        <h1>This site is for tracking cars in your garage and projects associated with them.</h1>
      </header>
      <Emblem/>
      <Footer/>
    </div>
  );
}

export default Info;
