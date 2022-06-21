import { motion } from "framer-motion";

import SocialMedia from "../SocialMedia";

import { upFadeAnimation } from "../animations";
import css from "./styles";

export default function Footer() {
  return (
    <>
      <motion.div {...upFadeAnimation} className="c-footer">
        <SocialMedia />
        <a
          href="mailto:ea888416@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-item btn--clean"
        >
          CONTACTAR
        </a>
      </motion.div>
      <style jsx>{css}</style>
    </>
  );
}
