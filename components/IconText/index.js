import { motion } from "framer-motion";

import css from "./style";

export default function IconText({ srcImage, text }) {
  return (
    <>
      <motion.div className="c-icon-text">
        <img className="icon-image" src={srcImage} alt={text} />
        <p className="paragraph">{text}</p>
      </motion.div>
      <style jsx>{css}</style>
    </>
  );
}
