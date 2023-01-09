/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

import SocialMedia from "../SocialMedia";
import PrimaryButton from "../Button/PrimaryButton";

import { upFadeAnimation } from "../animations";
import css from "./styles";

export default function AboutMe() {
  return (
    <>
      <motion.section {...upFadeAnimation} className="c-about-me">
        <section className="about-me__wrapper-media">
          <img
            className="about-me__image"
            src="./assets/perfile.webp"
            alt="Deiver Alfonso"
          />
          <SocialMedia />
          <img
            className="about-me__image-background"
            src="./assets/icons/rectangle.svg"
          />
        </section>
        <section className="about-me__wrapper-content">
          <h1 className="title">Deiver Enrique Alfonso Cortes</h1>
          <p className="paragraph">
            Soy un desarrollador Full Stack con 3 años de experiencia en el
            desarrollo de aplicaciones web y sistemas. He trabajado con una
            amplia gama de tecnologías, incluyendo React js, Next.js, Node js y
            Python. Mi experiencia en ingeniería de automatización me ha
            permitido tener una sólida comprensión de los principios de
            programación y me ha permitido resolver problemas complejos de
            manera eficiente. Estoy comprometido a aprender y desarrollarme
            continuamente y estoy buscando una oportunidad para aplicar mis
            habilidades y conocimientos en un entorno dinámico y en crecimiento.
          </p>
          <PrimaryButton href="/assets/CV_ES.pdf" text={"VER CV"} />
        </section>
      </motion.section>
      <style jsx>{css}</style>
    </>
  );
}
