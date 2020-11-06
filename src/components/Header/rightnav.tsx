import React from "react";
import { Link } from "react-router-dom";
import { UlRight } from "./styles/rightNavStyle";

function RightNav({ open } : {open: any}) {
  return (
    <UlRight open={open}>
      <li>
        <Link to="/about">Sobre</Link>
      </li>
      <li>
        <Link to="/services">Serviços</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfólio</Link>
      </li>
      <li>
        <Link to="/contato">Contato</Link>
      </li>
    </UlRight>
  );
}

export default RightNav;
