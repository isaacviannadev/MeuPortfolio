import React from "react";
import { Main } from "./style";

import HeadMenu from "../../components/Header/header";
import LogoBig from "../../images/logobig.svg";
import Footer from "../../components/Footer/footer";

function Landing() {
  return (
    <>
     <HeadMenu />

        <Main>
          <img src={LogoBig} alt="" />
          <p>
            <strong>Dev </strong>
            Isaac Vianna
          </p>
        </Main>

        <Footer />
    </>
  );
}

export default Landing;
