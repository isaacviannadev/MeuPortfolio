import styled from "styled-components";

export const Main = styled.main`
  max-width: 100vw;

  height: 100vh;
  padding: 2rem;
  background: #161616;

  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 4px dotted #eac400;

  .container {
    display: flex;
    max-width: 80%;

    align-items: center;
    justify-content: center;

    img {
      position: relative;
      width: 30rem;
      height: 30rem;
      margin-right: 20px;
      object-fit: cover;
      border-radius: 2% 50% 50% 50%;
      border: 3px solid #eac400;
      transition: 0.2s;

      &:hover {
        box-shadow: 20px 20px 10px -7px rgba(0, 0, 0, 0.7);
      }
    }

    .content {
      margin-left: 2rem;
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
        margin: 0 3rem;

        a {
          width: 100px;
          height: 100px;
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

          svg {
            width: 50px;
            height: 50px;
          }
          &:hover {
            color: #000;
            background-color: #eac400;
          }
        }
      }
    }
  }

  @media (max-width: 720px) {
    text-align: center;
    .container {
    flex-direction: column;
    display: flex;

      img {
        margin: 20px 0;
        border-radius: 5% 50% 50% 50%;
      }

      .content {
        h1 {
          font-size: 32px;
        }

        p {
          font-size: 18px;
        }

        div.social {
          align-items: center;
          justify-content: center;
          a {
            width: 60px;
            height: 60px;

            svg {
              width: 30px;
              height: 30px;
            }
          }
        }
      }
    }
  }
`;
