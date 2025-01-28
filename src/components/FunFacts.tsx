import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import Points from "../constants/FunFactInfo";

export default function FunFacts() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
        },
      },
    ],
  };

  const goToNextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  return (
    <div className="bg-stone-100 rounded-md my-20 left-[15%] shadow-md relative w-[70%] cursor-grab">
      <Slider ref={sliderRef} {...settings}>
        {Points.map((e, i) => (
          <div
            key={i}
            className="!flex !flex-col lg:!flex-row !justify-center !items-center !gap-5 !relative !p-4 min-h-[400px]"
          >
            <img
              src={e.PhotoSrc}
              alt={e.photoName}
              className="w-[250px] h-auto max-h-[250px] object-cover rounded-full lg:w-[350px] lg:max-h-[350px] mx-auto py-3"
            />
            <div className="text-center lg:text-left flex-1">
              <h2 className="text-amber-600 flex lg:justify-normal items-center gap-2 mb-5">
                Fun Fact
                <span className="w-[150px] h-[2px] bg-amber-500 block"></span>
              </h2>
              <h1 className="font-bold text-gray-500 mb-2">{e.headline}</h1>
              <p className="text-gray-500 max-w-[100%] lg:max-w-[80%] mx-auto lg:mx-0 mb-3">
                {e.parg}
              </p>
              <div className="hidden lg:flex flex-row-reverse lg:flex-col gap-2 absolute cursor-pointer lg:left-[90%] lg:top-[40%] lg:bottom-auto">
                <span onClick={goToNextSlide}>
                  <GrNext
                    className={`w-8 h-8 ${
                      i === Points.length - 1
                        ? "text-secondary"
                        : "text-primary"
                    }`}
                  />
                </span>
                <span onClick={goToPrevSlide}>
                  <GrPrevious
                    className={`w-8 h-8 ${
                      i === 0 ? "text-secondary" : "text-primary"
                    }`}
                  />
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
