import css from "styled-jsx/css";

export default css`
  
  .project__separator {
    width: 100%;
    height: 1px;
    background-color: #27292e;
  }
  .project__link{
    text-decoration: none;
  }
  .project__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2vw 1vw 2vw 0;
  }
  .project__title {
    color: rgb(178, 178, 178);
    font-size: 1.8vw;
    transition: color 0.5s ease-in-out;
  }
  .project__content--active .project__title,
  .project__content--active .project__description,
  .project__content--active .project__year {
    color: #fff;
  }

  .porject__info {
    text-align: right;
  }

  .project__description,
  .project__year {
    margin: 5px 0;
    font-size: 0.9vw;
    color: rgb(184, 184, 184);
    transition: color 0.5s ease-in-out;
  }
`;
