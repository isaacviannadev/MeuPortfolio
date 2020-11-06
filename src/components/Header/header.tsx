import React from "react";

import { Header } from "./styles/style";

import imgLogo from "../../images/logop.svg";
import { Link } from "react-router-dom";
import RightNav from "./rightnav";
import Burger from "./burger";

function HeadMenu() {
  return (
    <Header>
      <div className="logo">
        <Link to="/">
          <img src={imgLogo} alt="Isaac Dev" />
        </Link>
      </div>
      <Burger />
      <RightNav />
    </Header>
  );
}

export default HeadMenu;
