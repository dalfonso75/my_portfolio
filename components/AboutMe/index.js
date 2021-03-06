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
            Soy Full Stack Developer en JavaScript con 3 años de experiencia en
            desarrollo de software, mi Stack está compuesto con las tecnologías
            JavaScript, React js, Next.js, Node js, Express y Python. Mi carrera
            profesional es Ingeniería en Automatización, cuento con experiencia
            en investigación e innovación y siempre dispuesto a aprender nuevas
            tecnologías o herramientas.
          </p>
          <PrimaryButton href="/assets/CV_ES.pdf" text={"VER CV"} />
        </section>
      </motion.section>
      <style jsx>{css}</style>
    </>
  );
}
