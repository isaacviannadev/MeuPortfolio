import styled from "styled-components";

export const Header = styled.header`
  max-width: 100vw;
  height: 60px;
  background: #090909;

  display: flex;
  position: relative;
  z-index: 9;

  justify-content: space-between;
  align-items: center;

  img {
    margin: 0 20px;
  }

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
`;
