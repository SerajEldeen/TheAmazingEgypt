import { useState, useEffect } from "react";

const MovingText = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText =
    "Uncover the stunning beauty and rich culture of Egypt through this captivating website! ";
  const typingSpeed = 80;
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(interval);
      setDisplayText("");
    };
  }, [fullText]);

  return (
    <div className="flex justify-center items-center p-10 mt-28">
      <div className=" text-xl sm:text-2xl text-gray-500 text-center max-w-[800px] sm:h-[70px]  h-[120px] font-bold">
        {displayText}
      </div>
    </div>
  );
};
export default MovingText;
