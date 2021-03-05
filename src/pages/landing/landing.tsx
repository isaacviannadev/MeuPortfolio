import React from "react";
import { Main } from "./style";

import HeadMenu from "../../components/Header/header";
import LogoBig from "../../images/logobig.svg";
import Video from "../../video/codes.mp4";
import Footer from "../../components/Footer/footer";
import About from "../about/about";
import Services from "../serviços/services";

function Landing() {
  return (
    <>
      <HeadMenu />
      <Main>
        <video src={Video} autoPlay muted loop />

        <img src={LogoBig} alt="" />
        <p>
          <strong>Dev </strong>
          Isaac Vianna
        </p>
      </Main>
      <About />
      <Services />
      <Footer />
    </>
  );
}

export default Landing;
