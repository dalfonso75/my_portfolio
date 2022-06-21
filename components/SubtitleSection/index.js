import { motion } from "framer-motion";

import { upFadeAnimation } from "../animations";
import css from "./styles";

export default function SubtitleSection({ text }) {
  return (
    <>
      <motion.header {...upFadeAnimation} className="c-subtile-sec">
        <div className="subtile-sec__separator" />
        <h2 className="subtile-sec__text subtitle">{text}</h2>
      </motion.header>
      <style jsx>{css}</style>
    </>
  );
}
