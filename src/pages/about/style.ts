import styled from "styled-components";

export const Main = styled.main`
  max-width: 100vw;
  height: calc(100vh - 90px);
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 50%;
    margin-right: 20px;
    border-radius: 2% 50% 50% 50%;
    border: 3px solid #eac400;
    transition: 0.2s;

    &:hover {
      box-shadow: 24px 17px 5px -7px rgba(0, 0, 0, 0.5);
      max-width: 51%;      
    }
  }

  h1 {
    font: 900 70px Turret Road;
    z-index: 1;
  }

  p {
    font-size: 24px;
    margin: 20px auto;

    strong {
      color: #eac400;
      font-weight: bold;
    }
  }

  div.social {
    display: flex;

    a {
      width: 70px;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      border: 2px solid #eac400;

      margin: 20px;
      text-decoration: none;
      color: inherit;
      border-radius: 5% 50% 50% 50%;
      background-color: #000;
      transition: 0.3s;

      &:hover {
        color: #000;
        background-color: #eac400;
      }
    }
  }
`;
