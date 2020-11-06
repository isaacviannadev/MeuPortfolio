import styled from "styled-components";

export const Foot = styled.footer`
  max-width: 100vw;
  height: 30px;
  background: #090909;

  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  z-index: 8;


  p {
    color: #555555;
    font-size: 10px;
    letter-spacing: 5px;
    transition: 0.2s;

    &:hover {
      color: #dfdfdf;
    }
  }
`;
