import React from "react";

import { Header } from "./style";

import imgLogo from "../../images/logop.svg";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";

function HeadMenu() {
  return (
    <Header>
      <Link to="/">
        <img src={imgLogo} alt="Isaac Dev" />
      </Link>

      <a href="/" className="menu">
        <i className="fa fa-bars">{FiMenu}</i>
      </a>

      <nav>
        <Link to="/about">Sobre</Link>
        <Link to="/services">Serviços</Link>
        <Link to="/portfolio">Portfólio</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </Header>
  );
}

export default HeadMenu;
