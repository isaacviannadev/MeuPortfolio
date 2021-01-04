import styled from "styled-components";

export const Main = styled.main`
  max-width: 100vw;
  height: calc(100vh - 90px);
  padding: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: relative;
    width:40%;
    max-width: 480px;
    margin-right: 20px;
    border-radius: 2% 50% 50% 50%;
    border: 3px solid #eac400;
    transition: 0.2s;

    &:hover {
      box-shadow: 24px 17px 5px -7px rgba(0, 0, 0, 0.5);
      max-width: 41%;
    }
  }

  h1 {
    font: 900 70px Turret Road;
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
      width: 50px;
      height: 50px;
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

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    text-align: center;

    img {
      margin: 20px 0;
      border-radius:5% 50% 50% 50%;

    }

    h1 {
      font-size: 32px;
    }

    p {
      font-size: 18px;
    }

    div.social {
      a {
        width: 40px;
        height: 40px;
      }
    }
  }
`;
