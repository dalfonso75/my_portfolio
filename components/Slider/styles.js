import css from "styled-jsx/css";
export default css`
  /* Carousel */
  .c-carrusel {
    margin-top: 50px;
    margin-bottom: 5px;
    text-align: right;
    overflow-x: hidden;
  }
  .carrrusel__control-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    margin-bottom: 15px;
  }
  .carrusel__control-item {
    width: 12px;
    height: 12px;
    margin: 2px 8px;
    background-color: #4e4e4e;
    color: #fff;
    border-radius: 50%;
    border: 1px solid #4e4e4e;
    cursor: pointer;
    transition: border 0.5s ease;
  }
  .carrusel__control-item:hover,
  .active__item .carrusel__control-item {
    border: 1px solid #FFF;
  }
  .carrusel__control-text {
    opacity: 0;
    position: relative;
    font-size: 12px;
    color: #FFF;
    margin: 0px 10px 0 8px;
    transition: opacity 0.5s ease;
  }
  .carrusel__control-item:hover + .carrusel__control-text,
  .active__item .carrusel__control-text {
    opacity: 1;
  }
  .carrusel {
    position: relative;
    max-width: 100vw;
    height: 70vh;
    padding: 0;
    overflow-x: hidden;
  }
  .carrusel__contro-arrow {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    z-index: 3;
  }
  .carrusel__contro-arrow.arrow-prev {
    left: 1vw;
  }
  .carrusel__contro-arrow.arrow-next {
    right: 1vw;
  }
  .carrusel__arrow {
    width: 50px;
    height: auto;
  }
  .shadow {
    position: absolute;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100px;
    background: #000;
    z-index: 2;
  }
  .shadow-right {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 16%,
      rgba(0, 0, 0, 1) 100%
    );
    right: 0;
  }
  .shadow-left {
    left: 5vw;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 16%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  .carrusel_text {
    position: absolute;
    left: 2vw;
    bottom: 2vh;
    z-index: 3;
    text-align: left;
  }
  /* .carrusel_text  */
  .carrusel__title-image {
    font-family: "Raleway-SemiBold";
    text-transform: uppercase;
    font-size: 5vw;
    line-height: 0;
    margin-bottom: 50px;
    color: #ffffff;
  }
  .carrusel > :global(.slider) {
    position: relative;
    width: 80%;
    height: 70vh;
    margin: 0 0 0 auto;
    overflow: hidden;
  }
  .carrusel > :global(.slider) > :global(.image) {
    position: absolute;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    will-change: transform, opacity;
    z-index: 1;
  }
  .carrusel > :global(.slider) > :global(.image):hover {
    cursor: grab;
  }
  .carrusel > :global(.slider) > :global(.image):active {
    cursor: grabbing;
  }
`;
