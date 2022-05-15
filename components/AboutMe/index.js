import { motion } from "framer-motion";

import SocialMedia from "../SocialMedia";
import PrimaryButton from "../Button/PrimaryButton";

import css from "./styles"

export default function AboutMe() {
    return (
        <>
            <motion.section className="c-about-me">
                <section className="about-me__wrapper-media">
                    <img className="about-me__image" src="./assets/perfile.webp" alt="Deiver Alfonso" />
                    <SocialMedia />
                    <img className="about-me__image-background" src="./assets/icons/rectangle.svg" />
                </section>
                <section className="about-me__wrapper-content">
                    <h1 className="title">Deiver Enrique Alfonso Cortes</h1>
                    <p className="paragraph">
                        Soy un Fullstack Developer en JavaScript con 2 años de experiencia
                        desarrollando API REST y sitios web. Poseo conocimientos en
                        programación web y analítica de datos. Con experiencia en
                        investigación e innovación. Cuento con gran capacidad de aprendizaje,
                        trabajo individual, trabajo grupal y disciplina.
                    </p>
                    <PrimaryButton text={'VER CV'}/>
                </section>
            </motion.section>
            <style jsx>{css}</style>
        </>
    );
}
