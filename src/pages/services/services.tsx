import React from "react";

import HeadMenu from "../../components/Header/header";

import Footer from "../../components/Footer/footer";
import { Container } from "./style";

import devImg from "../../images/icons/developer.svg";
import mobImg from "../../images/icons/mobile.svg";
import designImg from "../../images/icons/design.svg";

function Services() {
  return (
    <>
      <HeadMenu />
      <Container>
        <div className="cardBg">
          <div className="card1">
            <div className="image">
              <img src={devImg} alt="desenvolvimento web" />
            </div>
            <h1>Desenvolvimento Web</h1>
          </div>
          <div className="card2">
            <img src={mobImg} alt="desenvolvimento web" />
          </div>
          <div className="card3">
            <img src={designImg} alt="desenvolvimento web" />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Services;
