import styled from "styled-components";

export const Main = styled.main`
  max-width: 100vw;
  height: calc(100vh - 90px);
  padding: 20px;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

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
