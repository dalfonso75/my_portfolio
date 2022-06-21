import css from "styled-jsx/css";

export default css`
  :global(.c-icon-text) {
    margin-top: 20px;
  }
  .icon-text-href {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  .icon-image {
    height: 30px;
    width: auto;
    object-fit: cover;
    margin-right: 20px;
  }

  @media (max-width: 400px) {
  }
  @media (max-width: 770px) {
    .express {
      width: 50px;
      height: auto;
    }
  }
`;
