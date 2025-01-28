import { useState, useRef } from "react";
import { FaMusic } from "react-icons/fa";

function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/HelwaYaBalady.mp3");
      audioRef.current.loop = true;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="absolute sm:relative sm:left-[95%] sm:-top-20 top-2 z-10 ">
      <button
        type="button"
        onClick={toggleMusic}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="p-2 rounded-full bg-primary text-white hover:bg-amber-600 hover:scale-110 transition duration-300"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        <FaMusic size={20} />
      </button>

      {showTooltip && (
        <div className="absolute left-0 sm:-left-[50%] md:-left-[40%] lg:-left-[30%] xl:-left-[20%] sm:top-12 bg-stone-100 text-secondary text-sm px-3 py-2 rounded-lg shadow-lg w-36 sm:w-auto ">
          <span className="hidden sm:inline">
            For a dreamy experience, kindly play this :)
          </span>
          <span className="sm:hidden "> Kindly Play this :)</span>
        </div>
      )}
    </div>
  );
}

export default Music;
