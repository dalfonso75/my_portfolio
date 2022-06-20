import SubtitleSection from "../SubtitleSection";
import IconText from "../IconText";

import css from "./styles";

export default function Education() {
  return (
    <>
      <SubtitleSection text={"Educación"} />
      <div className="c-icons-text--education">
        <IconText
          srcImage={"./assets/icons/salle.webp"}
          text={"Ingeniería en automatización"}
        />
        <IconText
          srcImage={"./assets/icons/platzi.webp"}
          text={"Escuela de JavaScript, +30 cursos aprobados"}
          href={"https://platzi.com/p/deiverenriquealfonsocortes/"}
        />
      </div>
      <style jsx>{css}</style>
    </>
  );
}
