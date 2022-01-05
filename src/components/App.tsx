import React from "react";
import Logo from '../../public/img/ninja-logo.png';
import Img from '../../public/img/metamask-logo.svg';

import "../../public/css/styles.css";

const App:Function = () => {
  return (
    <div>
      <img src={Logo} alt="logo" />

      <h1>Welcome to Typescript/React Webpack Starter Template</h1>
      
      <img src={Img} alt="metamask" />
    </div>
  )
}

export default App;