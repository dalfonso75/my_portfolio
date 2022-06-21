/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

import { upFadeAnimation } from "../animations";
import css from "./styles";
export default function SocialMedia() {
  return (
    <>
      <motion.div className="c-social" {...upFadeAnimation}>
        <a
          href="https://www.linkedin.com/in/deiver-alfonso/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social__icon"
            src="./assets/icons/linkedin.svg"
            alt="Linkedin"
          />
        </a>
        <a
          href="https://github.com/dalfonso75"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social__icon"
            src="./assets/icons/github.svg"
            alt="Github"
          />
        </a>
        <a
          href="mailto:ea888416@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social__icon"
            src="./assets/icons/mail.svg"
            alt="mail"
          />
        </a>
      </motion.div>
      <style jsx>{css}</style>
    </>
  );
}
