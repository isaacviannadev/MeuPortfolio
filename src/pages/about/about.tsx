import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

import { Main } from "./style";

import devImg from "../../images/isaac.jpg";

function About() {
  return (
    <>
      <Main>
        <div className="container">
          <img src={devImg} alt="Isaac Vianna" />

          <div className="content">
            <h1>Isaac Vianna</h1>

            <p>
              Meu nome é <strong>Isaac Vianna</strong>, tenho 32 anos, carioca
              morando em Brasília - DF, formado em ADS, sou desenvolvedor full
              stack com foco em front-end. Desenvolvo aplicações utilizando boas
              práticas de código, UI/UX.
              <br />
            </p>

            <div className="social">
              <a
                href="https://github.com/isaacviannadev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/isaacvianna"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}

export default About;
