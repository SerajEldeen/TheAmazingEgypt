import Slider from "react-slick";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { useRef, useState } from "react";
import { InView } from "react-intersection-observer";
import PlacesInfo from "../../constants/AlexandriaPlacesInfo";

export default function AlexandriaPlaces() {
  const sliderRefs = useRef<(Slider | null)[]>([]);
  const [currentSlides, setCurrentSlides] = useState<number[]>(
    PlacesInfo.map(() => 0)
  );

  const settings = (index: number) => ({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (currentIndex: number) => {
      const newSlides = [...currentSlides];
      newSlides[index] = currentIndex;
      setCurrentSlides(newSlides);
    },
    responsive: [
      {
        breakpoint: 640,
        settings: {
          infinite: true,
        },
      },
    ],
  });

  const goToNextSlide = (index: number) => {
    sliderRefs.current[index]?.slickNext();
  };

  const goToPrevSlide = (index: number) => {
    sliderRefs.current[index]?.slickPrev();
  };

  return (
    <>
      {PlacesInfo.map((e, sectionIndex) => (
        <InView key={sectionIndex} triggerOnce threshold={0.2}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              style={{
                transitionDelay: `${sectionIndex * 180}ms`,
              }}
              className={`flex lg:flex-row flex-col-reverse items-center justify-evenly px-6 sm:px-8 gap-10 cursor-grab sm:cursor-auto mb-10 
              transition-all duration-[700ms] ease-[cubic-bezier(0.22, 1, 0.36, 1)] ${
                inView
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <div>
                <h1 className="font-bold text-primary text-3xl mb-4">
                  {e.header}
                </h1>
                <ul className="list-disc marker:text-primary">
                  {e.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-lg font-semibold text-secondary"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-[250px] h-[250px] sm:w-[550px] sm:h-[350px] relative rounded">
                <Slider
                  ref={(el) => (sliderRefs.current[sectionIndex] = el)}
                  {...settings(sectionIndex)}
                >
                  {e.images.map((myImg, i) => (
                    <img
                      key={i}
                      src={myImg.src}
                      alt={myImg.no}
                      className="sm:h-[350px] h-[250px] object-cover"
                    />
                  ))}
                </Slider>

                <div className="absolute inset-y-0 left-0 sm:flex items-center justify-center px-4 hidden">
                  <span
                    onClick={() => goToPrevSlide(sectionIndex)}
                    className={`cursor-pointer ${
                      currentSlides[sectionIndex] === 0
                        ? "text-white"
                        : "text-amber-600"
                    }`}
                  >
                    <GrPrevious className="text-3xl" />
                  </span>
                </div>

                <div className="absolute inset-y-0 right-0 sm:flex items-center justify-center px-4 hidden">
                  <span
                    onClick={() => goToNextSlide(sectionIndex)}
                    className={`cursor-pointer ${
                      currentSlides[sectionIndex] === e.images.length - 1
                        ? "text-white"
                        : "text-amber-600"
                    }`}
                  >
                    <GrNext className="text-3xl" />
                  </span>
                </div>
              </div>
            </div>
          )}
        </InView>
      ))}
    </>
  );
}
