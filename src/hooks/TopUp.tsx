import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function TopUp() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          className="p-2 bg-primary text-white rounded-full hover:bg-amber-600 fixed right-[20px] bottom-[20px]"
          aria-label="Scroll up"
          onClick={handleClick}
        >
          <IoIosArrowUp className="w-8 h-8 animate-bounce" />
        </button>
      )}
    </>
  );
}
