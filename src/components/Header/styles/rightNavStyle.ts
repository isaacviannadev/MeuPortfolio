import styled from "styled-components";

type PropOpenNav = {
  open: boolean;
};

export const UlRight = styled.ul.attrs((props: PropOpenNav) => ({
  open: props.open,
}))<PropOpenNav>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  a {
    margin-right: 40px;
    text-decoration: none;
    font: 200 18px Turret Road;
    color: #888888;
    transition: 0.2s;

    &:hover {
      color: #eac400;
      font-weight: bold;
    }
  }

  @media (max-width: 760px) {
    flex-flow: column nowrap;
    background-color: #eac400;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    z-index:19;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

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
      background-color: #ffdd1c;
      color: #000000;
      font-weight: bold;
    }
  }
`;
