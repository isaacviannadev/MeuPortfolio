import styled from "styled-components";

export const Main = styled.main`
  max-width: 100vw;
  height: 90vh;
  padding: 20px;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  border-bottom: 4px dotted  #eac400;

  video {
    position: fixed;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    overflow: hidden;
    opacity: 0.4;
    filter: blur(4px);
  }

  img {
    max-width: 100%;
  }

  p {
    font: 24px Turret Road;
    opacity: 20%;
    transition: opacity 0.3s;

    margin-top: 60px;

    strong {
      color: #eac400;
    }

    &:hover {
      opacity: 80%;
    }
  }
`;
