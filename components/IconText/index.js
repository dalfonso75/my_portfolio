/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

import { upFadeAnimation } from "../animations";
import css from "./style";

export default function IconText({ srcImage, text, href }) {
  return (
    <>
      <motion.div {...upFadeAnimation} className="c-icon-text">
        <a
          className="icon-text-href"
          href={href}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className={`icon-image ${text === "Express" ? "express" : ""}`}
            src={srcImage}
            alt={text}
          />
          <p className="paragraph">{text}</p>
        </a>
      </motion.div>
      <style jsx>{css}</style>
    </>
  );
}
