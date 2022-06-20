import SubtitleSection from "../SubtitleSection";
import IconText from "../IconText";

import css from "./styles";

export default function Skills() {
  return (
    <>
      <SubtitleSection text={"Skills"} />
      <div className="c-icons-text--skills">
        <IconText srcImage={"./assets/icons/js.svg"} text={"JavaScript"} />
        <IconText srcImage={"./assets/icons/next-js.svg"} text={"Next.js"} />
        <IconText srcImage={"./assets/icons/reactjs.svg"} text={"React JS"} />
        <IconText srcImage={"./assets/icons/nodejs.svg"} text={"Node JS"} />
        <IconText srcImage={"./assets/icons/express.svg"} text={"Express"} />
      </div>
      <div className="c-icons-text--skills">
        <IconText srcImage={"./assets/icons/html.svg"} text={"HTML"} />
        <IconText srcImage={"./assets/icons/css.svg"} text={"CSS"} />
        <IconText srcImage={"./assets/icons/mysql.svg"} text={"MySQL"} />
        <IconText srcImage={"./assets/icons/python.svg"} text={"Python"} />
        <IconText srcImage={"./assets/icons/git-icon.svg"} text={"Git"} />
      </div>
      <style jsx>{css}</style>
    </>
  );
}
