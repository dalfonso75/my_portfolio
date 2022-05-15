import css from "styled-jsx/css";
export default css`
  :global(.c-about-me) {
    display: grid;
    gap: 6vw;
    grid-template-columns: 0.6fr 1fr;
    align-items: center;
    height: 90vh;
  }
  .about-me__wrapper-media {
    position: relative;
    margin: 0 0 0 auto;
  }
  .about-me__image {
    position: relative;
    width: 25vw;
    height: 25vw;
    border-radius: 15px;
    margin-bottom: 10px;
  }
  .about-me__image-background {
    position: absolute;
    top: -3vw;
    right: 0;
    bottom: 0;
    left: -5vw;
    margin: auto;
    width: 35vw;
    height: 35vw;
    z-index: -1;
    opacity: 0.8;
  }
  .about-me__wrapper-content{
    margin-top: -5vw;
  }
  .about-me__wrapper-content > :global(.paragraph){
    padding-bottom: 0.8em;
  }
`;
