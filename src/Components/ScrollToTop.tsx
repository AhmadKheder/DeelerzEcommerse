import { useEffect, useState } from "react";
import { CgChevronDoubleUp } from "react-icons/cg";
import { scrollTop } from "../Common/window";
const ScrollToTop = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const theme = {
    scrollTopButton: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      width: "50px",

      height: "50px",
      borderRadius: "50%",
      backgroundColor: "#F86338",
      color: "#fff",
      display: "flex",
      justifyContent: "center",

      alignItems: "center",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
      zIndex: 1000,
    } as React.StyleHTMLAttributes<HTMLDivElement>,
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);

  return (
    <>
      {showScrollTopButton && (
        <div style={theme.scrollTopButton} onClick={scrollTop}>
          <CgChevronDoubleUp style={{ width: "24px", height: "24px" }} />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
