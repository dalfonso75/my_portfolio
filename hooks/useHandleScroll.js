// Hook to hide the menu when a scroll down event is detected and show when a scroll top event is detected
import { useState, useEffect } from "react";
export default function useHandleScroll() {
  const [show, setShow] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const handleScroll = () => {
    setScrollPos(document.body.getBoundingClientRect().top);
    console.log(scrollPos);
    setShow(document.body.getBoundingClientRect().top > scrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return show;
}
