import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import { RxDotFilled } from "react-icons/rx";

const Slider = ({ autoSlide = false }) => {
  const slides = [
    { url: slide1 },
    { url: slide2 },
    { url: slide3 },
    { url: slide4 },
  ];

  const [currentSlide, SetCurrentSlide] = useState(0);

  const prevSlide = (e) => {
    const isFirstSlides = currentSlide === 0;
    const newIndex = isFirstSlides ? slides.length - 1 : currentSlide - 1;
    SetCurrentSlide(newIndex);

    document.onselectstart = function () {
      return false;
    };
  };

  const nextSlide = (e) => {
    const isLastSlide = slides.length - 1 === currentSlide;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    SetCurrentSlide(newIndex);

    document.onselectstart = () => {
      return false;
    };
  };

  const goToSlide = (idx) => {
    SetCurrentSlide(idx);
    document.onselectstart = function () {
      return false;
    };
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, 3000);
    return () => clearInterval(slideInterval);
  });

  return (
    <div>
      <div className="flex lg:mt-4 transition-transform ease-out duration-500">
        <img
          src={slides[currentSlide].url}
          alt="slide1"
          className="rounded-lg w-[100%] h-[300px]"
        />
      </div>

      <div className="float-right flex">
        {/* Left Arrow */}
        <div className="hidden md:block bg-lidaDark w-10 rounded-sm ">
          <Icon
            icon="ic:baseline-less-than"
            className="text-white mx-auto px-2"
            onClick={prevSlide}
            width="30"
          />
        </div>

        {/* Right Arrow */}
        <div className="hidden md:block bg-lidaLightOrange w-10 rounded-sm ">
          <Icon
            icon="ic:baseline-greater-than"
            className="text-white px-2 mx-auto cursor-pointer "
            onClick={nextSlide}
            width="30"
          />
        </div>

        <div className="flex  mr-5 md:right-24 md:bottom-20 md:hidden justify-center items-center py-2">
          {slides.map((_, idx) => (
            <div
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`transition-all text-white ${
                currentSlide === idx ? "text-2xl" : "text-opacity-50"
              }`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
