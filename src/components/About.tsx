import { InView } from "react-intersection-observer";
import Video from "../hooks/Video";
import sections from "../constants/Sections";

export default function About() {
  return (
    <>
      <Video />
      <div className="font-semibold text-secondary mb-12">
        <p className="text-center mx-auto max-w-3xl px-4 sm:px-6 ">
          <span className="font-extrabold">Welcome to Egypt,</span> the Mother
          of the World and the Cradle of Civilization. A land that shaped
          history with the wisdom of the pharaohs, carving humanity’s first
          chapters onto ancient temples. Guardian of the mighty Nile, Egypt is a
          refuge for the weary, offering solace and hope to all who seek it. Its
          greatest treasure lies in its people—resilient, kind, and forever
          smiling, even in the face of challenges. I am Egypt—eternal and
          unyielding, a glorious past, a vibrant present, and a future filled
          with the promise of hope and life.
        </p>
      </div>
      <div className="relative w-[50%] h-[2px] bg-amber-500 my-16 left-[25%]">
        <img
          src="/Life-Key.png"
          alt="Life-key"
          className="absolute top-[-38px] left-[50%] transform -translate-x-1/2 w-20 h-20 object-contain"
        />
      </div>
      <div className="px-4 sm:px-6">
        {sections.map((e) => (
          <InView key={e.name} triggerOnce threshold={0.2}>
            {({ inView, ref }) => (
              <div
                ref={ref}
                className={`flex flex-col-reverse lg:flex-row justify-center items-center gap-5 px-3 mb-8 
                transition-all duration-700 ${
                  inView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <div className="text-center lg:text-left lg:max-w-full max-w-[100%]">
                  <h1 className="font-bold uppercase mb-3 text-center lg:text-start text-primary text-2xl">
                    {e.name}
                  </h1>
                  <p className="text-gray-400 sm:text-2xl text-xl ">
                    {e.content}
                  </p>
                </div>
                <img
                  src={e.ImgSrc}
                  alt={e.ImgName}
                  className="w-full max-w-[500px] h-[350px] object-cover rounded-md"
                />
              </div>
            )}
          </InView>
        ))}
      </div>
    </>
  );
}
