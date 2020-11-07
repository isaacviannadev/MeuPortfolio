import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  height: calc(100vh - 90px);

  display: flex;
  justify-content: space-around;
  align-items: center;

  .cardBg {
    width: 75%;
    height: 90%;
    margin: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    border-radius: 30px;
    background-color: #262626;
    box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.2);
    transition: 0.2s;

    &:hover {
      box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.7);
    }
  }

  div.card1,
  .card2,
  .card3 {
    width: 350px;
    height: 90%;

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
      /* border: 1px solid #eac400; */
    }
  }

  .card1 {
    margin-left: 20px;
  }
  .card3 {
    margin-right: 20px;
  }

  img {
    position: relative;
    width: 120px;
    top: 10px;
    
  }

  h1,p {
    font: bold 24px Turret Road;
    margin: 30px auto;
    color: #000000;

    text-align: center;
  }

  p {
    font: 400 20px Turret Road;
    
    
  }
`;