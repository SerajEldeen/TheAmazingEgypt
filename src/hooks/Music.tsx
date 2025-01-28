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
    <div className="fixed sm:left-[90%] left-5 sm:top-8 top-2 z-50 ">
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
        <div
          className="relative left-0 sm:-left-[75%] md:-left-[85%] lg:-left-[95%] xl:-left-[100%] sm:top-4
        bg-stone-100 text-secondary text-sm px-3 py-2 rounded-lg shadow-lg sm:w-72 w-auto "
        >
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
