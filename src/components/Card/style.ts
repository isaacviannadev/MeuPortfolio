import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  height: 100%;
  margin: 1rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #d1d1d1;
  border: 2px solid #000000;
  border-radius: 30px;

  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.4s;

  &:hover {
    box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.7);
    transform: translateX(-1%) translateY(-1%);
    border: 3px solid #eac400;
  }

  img {
    position: relative;
    width: 120px;
    top: 10px;
  }

  h1 {
    font: bold 24px Turret Road;
    margin: 30px auto;
    color: #000000;

    text-align: center;
  }

  p {
    font: 400 20px Turret Road;
    margin: 0 20px;
  }
`;
