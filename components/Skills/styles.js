import css from "styled-jsx/css";

export default css`
  .c-icons-text--skills {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
  }
  @media (max-width: 400px) {
  }
  @media (max-width: 770px) {
    .c-icons-text--skills {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  }
`;
