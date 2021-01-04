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
            <img src={devImg} alt="desenvolvimento web" />
            <h1>Web</h1>

            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              libero eos quasi id necessitatibus et vel veniam dolorum, suscipit
              tenetur odio nisi eveniet placeat eius corrupti omnis alias!
              Fugit, quasi?
            </p>
          </div>
          <div className="card2">
            <img src={mobImg} alt="desenvolvimento web" />
            <h1>Mobile</h1>

            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              libero eos quasi id necessitatibus et vel veniam dolorum, suscipit
              tenetur odio nisi eveniet placeat eius corrupti omnis alias!
              Fugit, quasi?
            </p>
          </div>
          <div className="card3">
            <img src={designImg} alt="desenvolvimento web" />
            <h1>Design</h1>

            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              libero eos quasi id necessitatibus et vel veniam dolorum, suscipit
              tenetur odio nisi eveniet placeat eius corrupti omnis alias!
              Fugit, quasi?
            </p>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Services;
