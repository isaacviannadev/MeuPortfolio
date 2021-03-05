import React from "react";
import { Container } from "./style";

import devImg from "../../images/icons/developer.svg";
import mobImg from "../../images/icons/mobile.svg";
import designImg from "../../images/icons/design.svg";
import { Card } from "../../components/Card/style";

function Services() {
  return (
    <>
      <Container>
        <div className="cardBg">
          <Card>
            <img src={devImg} alt=""/>
          </Card>
          <Card>
            <img src={mobImg} alt=""/>
          </Card>
          <Card>
            <img src={designImg} alt=""/>
          </Card>
          
        </div>
      </Container>
    </>
  );
}

export default Services;
