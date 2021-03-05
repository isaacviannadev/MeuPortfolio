import React, { useState } from "react";

import { Header } from "./styles/style";

import imgLogo from "../../images/logop.svg";
import { Link } from "react-router-dom";
import Burger from "./burger";

function HeadMenu() {
  const [menuBg, setMenuBg] = useState(false);

  const changeBg = () => {
    if (window.scrollY > 0) {
      setMenuBg(true);
    } else {
      setMenuBg(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <Header
      style={menuBg ? {background:"#090909"} : {background:"transparent"}}
    >
      <div className="logo">
        <Link to="/">
          <img src={imgLogo} alt="Isaac Dev" />
        </Link>
      </div>
      <Burger />
    </Header>
  );
}

export default HeadMenu;
