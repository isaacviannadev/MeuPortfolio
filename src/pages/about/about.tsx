import React from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

import HeadMenu from "../../components/Header/header";
import { Main } from "./style";

import devImg from "../../images/isaac.jpg";
import Footer from "../../components/Footer/footer";

function About() {
  return (
    <>
      <HeadMenu />
      <Main>
        <img src={devImg} alt="Isaac Vianna" />
        <div>
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
              target="_blank no-referrer"
            >
              <FiGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/isaacvianna"
              target="_blank no-referrer"
            >
              <FiLinkedin size={28} />
            </a>
          </div>
        </div>
      </Main>

      <Footer />

    </>
  );
}

export default About;
