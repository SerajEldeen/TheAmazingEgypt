import { useRef } from "react";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <div className="relative w-full top-16  sm:top-28 px-3 sm:mb-40 mb-20">
      <video
        ref={videoRef}
        src="/Video.mp4"
        width="100%"
        height="100%"
        autoPlay
        muted
        loop
        className="max-h-[500px] "
      />
    </div>
  );
}
