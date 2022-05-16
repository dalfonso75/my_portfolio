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
          text={"Estudiante de Platzi"}
        />
      </div>
      <style jsx>{css}</style>
    </>
  );
}
