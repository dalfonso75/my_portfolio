import css from "styled-jsx/css";

export default css`
  .c-portfolio {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
    gap: 5vw;
    margin-top: 80px;
  }
  :global(.portfolio__projects-image) {
    width: 100%;
    height: auto;
    image-rendering: crisp-edges;
  }
  @media (max-width: 770px) {
    .c-portfolio {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
    }
    :global(.portfolio__projects-image) {
      display: none;
    }
  }
  @media (max-width: 480px) {
  }
`;
