// Dependencies
// Le hace falta refactory y dividirlo en varios componentes
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

// Styles and content
import css from "./styles";
import { IMAGES } from "./images";

// Animation options
const sliderVariants = {
  incoming: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

export default function Slider({
  controls = true,
  labelImage = true,
}) {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);
  const activeImageIndex = wrap(0, IMAGES.length, imageCount);
  const swipeToImage = (swipeDirection) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };
  const dragEndHandler = (dragInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };
  const skipToImage = (imageId) => {
    let changeDirection;
    if (imageId > activeImageIndex) {
      changeDirection = 1;
    } else if (imageId < activeImageIndex) {
      changeDirection = -1;
    }
    setImageCount([imageId, changeDirection]);
  };

  return (
    <>
      <div className="c-carrusel">
        <div className="carrusel">
          <button
            className="carrusel__contro-arrow arrow-prev"
            onClick={() => swipeToImage(-1)}
          >
            <img
              className="carrusel__arrow"
              src="./assets/icons/previous-arrow.svg"
              alt=""
            />
          </button>
          <button
            className="carrusel__contro-arrow arrow-next"
            onClick={() => swipeToImage(1)}
          >
            <img
              className="carrusel__arrow"
              src="./assets/icons/next-arrow.svg"
              alt=""
            />
          </button>
          <div className="slider">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={imageCount}
                style={{
                  backgroundImage: `url(${IMAGES[activeImageIndex].imageSrc})`,
                }}
                custom={direction}
                variants={sliderVariants}
                initial="incoming"
                animate="active"
                exit="exit"
                transition={sliderTransition}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
                className="image"
              />
            </AnimatePresence>
          </div>
          {labelImage && (
            <div className="carrusel_text">
              <h2 className="carrusel__title-image">
                {IMAGES[activeImageIndex].name}
              </h2>
              <p className="paragraph">
                [{IMAGES[activeImageIndex].role}]
              </p>
            </div>
          )}
          <div className="shadow-right shadow" />
        </div>
        {controls && (
          <div className="carrrusel__control-wrapper">
            {IMAGES.map((image) => (
              <div
                className={image.id == activeImageIndex && "active__item"}
                onClick={() => skipToImage(image.id)}
                key={image.id}
              >
                <div className="carrusel__control-item" />
                <span className="carrusel__control-text t-cera-l">
                  0{image.id + 1}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <style jsx>{css}</style>
    </>
  );
}
