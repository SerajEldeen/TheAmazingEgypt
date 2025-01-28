import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import images from "../../constants/SlideShow/SlideShow";

export default function PlacesSlideShow() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
  };

  return (
    <div className="w-full h-[300px] overflow-hidden relative">
      <Slider ref={sliderRef} {...settings}>
        {images.map((e) => (
          <div key={e.name} className="w-full h-full">
            <img
              src={e.src}
              alt={e.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
      <h1 className="absolute -bottom-3 left-[10%]  text-yellow-500 text-3xl sm:text-4xl font-bold  px-4 py-2  uppercase">
        Where to go
      </h1>
    </div>
  );
}
