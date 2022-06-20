/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { useState } from "react";

import Project from "../Project";
import SubtitleSection from "../SubtitleSection";

import { DataProject } from "./data";

import { animationProject } from "../Project/animations";
import css from "./styles";

export default function Portfolio() {
  const [projectImage, setProjectImage] = useState(
    "/assets/portfolio/stay-morph.webp"
  );
  return (
    <>
      <SubtitleSection text={"PROYECTOS PUBLICOS"} />
      <section className="c-portfolio">
        <section className="portfolio__projects-content">
          {DataProject.map((project) => (
            <Project
              key={"key-project-" + project.id}
              id={"id-" + project.id}
              name={project.name}
              description={project.description}
              year={project.year}
              srcImage={project.srcImage}
              isExternalLink={project.isExternalLink}
              href={project.href}
              setProjectImage={setProjectImage}
              activeProject={projectImage === project.srcImage}
            />
          ))}
        </section>
        <motion.img
          key={projectImage}
          {...animationProject}
          src={projectImage}
          alt=""
          className="portfolio__projects-image"
        />
      </section>
      <style jsx>{css}</style>
    </>
  );
}
