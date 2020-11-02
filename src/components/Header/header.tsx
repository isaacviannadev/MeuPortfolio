import React from "react";

import { Header } from "./style";

import imgLogo from "../../images/logop.svg";
import { Link } from "react-router-dom";

function HeadMenu() {
  return (
    <Header>
      <Link to="/">
        <img src={imgLogo} alt="Isaac Dev" />
      </Link>
      <div>
        <Link to="/about">
          <strong>Sobre |</strong>
        </Link>
        <Link to="/services">
          <strong>Serviços |</strong>
        </Link>
        <Link to="/portfolio">
          <strong>Portfólio |</strong>
        </Link>
        <Link to="/contato">
          <strong>Contato</strong>
        </Link>
      </div>
    </Header>
  );
}

export default HeadMenu;
