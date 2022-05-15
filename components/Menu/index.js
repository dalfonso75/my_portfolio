import { useContext, useEffect, useState } from "react";
import { SmoothScrollContext } from "../../context/SmoothScroll.context";
import { motion } from "framer-motion";
import css from "./styles";

export default function Menu() {
  const { scroll } = useContext(SmoothScrollContext);
  const [showMenu, setShowMenu] = useState(false);
  let scrollPositionBefore;
  const handleScroll = (scroll) => {
    setShowMenu(scroll > scrollPositionBefore);
    scrollPositionBefore = scroll;
  };

  useEffect(() => {
    if (scroll) {
      scroll.on("scroll", (instance) => {
        handleScroll(instance.scroll.y);
      });
    }
  }, [scroll]);
  return (
    <>
      <motion.div className={!showMenu ? "active menu" : "hidden menu"}>
        <div className="menu__logo-wrapper">
          <h2 className="menu__logo">DEIVER</h2>
        </div>
        <div className="menu__items">
          <div className="menu_item">
            <a
              href="https://api.whatsapp.com/send?phone=573505410330"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-item btn--clean"
            >
              CONTACTAR
            </a>
          </div>
        </div>
      </motion.div>
      <style jsx>{css}</style>
    </>
  );
}
