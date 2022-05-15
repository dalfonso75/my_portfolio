import { motion } from "framer-motion";
import css from "./styles";
export default function SocialMedia() {
  return (
    <>
      <motion.div
        className="c-social"
        initial={{
          opacity: 0,
        }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1.2 }}
      >
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
        <a
          href="https://www.instagram.com/enrique_deiver/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social__icon"
            src="./assets/icons/instagram.svg"
            alt="Instagram"
          />
        </a>
      </motion.div>
      <style jsx>{css}</style>
    </>
  );
}
