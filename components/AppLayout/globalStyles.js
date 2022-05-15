import css from "styled-jsx/css";
export default css.global`
  @font-face {
    font-family: "Raleway-Medium";
    src: url("/fonts/Raleway-Medium.woff2");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Raleway-SemiBold";
    src: url("/fonts/Raleway-SemiBold.woff2");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Cera Pro Light";
    src: url("/fonts/Cera Pro Light.woff2");
    font-style: normal;
    font-weight: normal;
    font-display: swap;
  }

  html.has-scroll-smooth {
    overflow: hidden;
  }
  html.has-scroll-dragging {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .has-scroll-smooth body {
    overflow: hidden;
  }
  body {
    background-color: #000000;
  }
  .app-layout {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
  }
  .has-scroll-smooth [data-scroll-container] {
    min-height: 100vh;
  }

  .c-scrollbar {
    position: absolute;
    right: 0;
    top: 0;
    width: 11px;
    height: 100%;
    transform-origin: center right;
    transition: transform 0.3s, opacity 0.3s;
    opacity: 1;
  }

  .c-scrollbar:hover {
    transform: scaleX(1.45);
  }

  .c-scrollbar:hover,
  .has-scroll-scrolling .c-scrollbar,
  .has-scroll-dragging .c-scrollbar {
    opacity: 1;
  }

  .c-scrollbar_thumb {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #858585;
    opacity: 0.5;
    width: 7px;
    border-radius: 10px;
    margin: 2px;
    cursor: -webkit-grab;
    cursor: grab;
  }

  .has-scroll-dragging .c-scrollbar_thumb {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }
  .container {
    margin-top: calc(3vw + 35px);
    padding-bottom: calc(8vw + 35px);
    padding-left: 10px;
    padding-right: 10px;
  }

  .btn--clean {
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }
  p {
    color: #ffffff;
    font-family: "Cera Pro Light";
    font-weight: 400;
    text-transform: none;
  }
  .subtitle {
    color: #ffffff;
    font-family: "Raleway-SemiBold";
    text-transform: uppercase;
    font-size: 9vw;
    width: 50vw;
    margin: 0;
  }
  .paragraph {
    font-size: 5vw;
  }
  .a_clean {
    text-decoration: none;
  }
  @media (min-width: 400px) {
  }
  @media (min-width: 770px) {
    .container {
      margin-top: calc(3vw + 35px);
      padding-bottom: calc(8vw + 35px);
      padding-left: 40px;
      padding-right: 40px;
    }
    .subtitle {
      font-size: 5vw;
      width: 10vw;
    }
    .paragraph {
      font-size: 1.6vw;
    }
  }
  @media (min-width: 960px) {
  }
`;
