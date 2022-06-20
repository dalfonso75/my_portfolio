import SocialMedia from "../SocialMedia";

import css from "./styles";

export default function Footer() {
  return (
    <>
      <div className="c-footer">
        <SocialMedia />
        <a
          href="mailto:ea888416@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-item btn--clean"
        >
          CONTACTAR
        </a>
      </div>
      <style jsx>{css}</style>
    </>
  );
}
