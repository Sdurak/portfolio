import React, { useState } from "react";
import { FiArrowUp } from "react-icons/fi";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <div
      className="fixed bottom-10 right-10 transition-opacity duration-500"
      onClick={scrollToTop}
      style={{ display: visible ? "block" : "none", cursor: "pointer" }}
    >
      <FiArrowUp className="text-orange-300 text-3xl" />
    </div>
  );
};
export default ScrollToTopButton;
