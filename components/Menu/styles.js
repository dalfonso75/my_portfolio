import css from "styled-jsx/css";
export default css`
  :global(.menu) {
    position: fixed;
    padding: 0vw 2vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    z-index: 2;
    background-color: #060606b9;
    backdrop-filter: blur(5px);
  }
  :global(.active) {
    visibility: visible;
    transition: all 0.5s ease-in-out;
  }
  :global(.hidden) {
    visibility: hidden;
    transition: all 0.5s;
    transform: translateY(-300%);
  }
  .menu__logo {
    color: #fff;
    font-family: "Raleway-SemiBold";
    letter-spacing: 1px;
    font-size: 1.8vw;
  }
  .menu__items {
    display: flex;
    margin-right: 2.5vw;
  }
  .btn-item {
    color: #fff;
    font-family: "Raleway-SemiBold";
    margin: 0 20px;
  }

  @media (min-width: 400px) {
  }
  @media (min-width: 770px) {
    .logo {
      width: auto;
      height: 30px;
    }
  }
  @media (min-width: 960px) {
  }
`;
