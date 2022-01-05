import React from "react";

import { ClickCounter } from "./ClickCounter";

import Logo from '../../public/img/ninja-logo.png';
import Img from '../../public/img/metamask-logo.svg';

import "../../public/css/styles.css";

const App:Function = () => {
  const num = 0;
  return (
    <div>
      <img src={Logo} alt="logo" />

      <h1>Welcome to Typescript/React Webpack Starter Template</h1>
      <h2>Running in {process.env.NODE_ENV} mode.</h2>
      <h2>Status: {process.env.name}</h2>
      
      <img src={Img} alt="metamask" />

      <ClickCounter />

    </div>
  )
}

export default App;