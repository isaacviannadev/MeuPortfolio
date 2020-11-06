import styled from "styled-components";

export const UlRight = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  a {
    margin-right: 40px;
    text-decoration: none;
    font: 200 18px Turret Road;
    color: #696969;
    transition: 0.2s;

    &:hover {
      color: #eac400;
      font-weight: bold;
    }
  }

  @media (max-width: 760px) {
    display: none;
    flex-flow: column nowrap;
    background-color: #eac400;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;

    a {
    margin-right: 0;

    padding:18px 10px;
    display:flex;
    justify-content: space-around;

    text-decoration: none;
    font: 200 25px Turret Road;
    color: #ffffff;
    transition: 0.2s;

    &:hover {
      color: #000000;
      font-weight: bold;
    }
  }
`;
