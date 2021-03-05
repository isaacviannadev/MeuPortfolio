import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  height: 600px;
  background-color: #454545;

  display: flex;
  justify-content: space-around;
  align-items: center;

  .cardBg {
    width: 90%;
    height: 90%;
    padding: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 30px;
    background-color: #262626;
    box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.2);
    transition: 0.2s;

    &:hover {
      box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.7);
    }
  }
`;
