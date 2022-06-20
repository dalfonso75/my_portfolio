import { motion } from "framer-motion";

import css from "./styles";

import { animationProject } from "./animations";

export default function Project({
  name,
  description,
  year,
  srcImage,
  isExternalLink,
  href,
  setProjectImage,
  activeProject,
}) {
  return (
    <>
      <motion.section
        {...animationProject}
        className="c-project"
        onMouseOver={() => {
          setProjectImage(srcImage);
        }}
      >
        <a className="project__link" href={href} target="_blank" rel="noreferrer noopener">
          <div className="project__separator" />
          <section
            className={`project__content ${
              activeProject ? "project__content--active" : ""
            }`}
          >
            <h2 className="title project__title">{name}</h2>
            <div className="porject__info">
              <p className="paragraph project__description">
                [ {description} ]
              </p>
              <p className="paragraph project__year">[ {year} ]</p>
            </div>
          </section>
        </a>
      </motion.section>
      <style jsx>{css}</style>
    </>
  );
}
