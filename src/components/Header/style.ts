import styled from "styled-components";

export const Header = styled.header`
  max-width: 100vw;
  height: 60px;
  background: #090909;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin: 0 20px;
  }

  a {
    margin-right: 20px;
    text-decoration: none;
  }

  strong {
    font-family: Turret Road;
    color: #424242;
    transition: color 0.2s;

    &:hover {
      color: #eac400;
    }
  }
`;
