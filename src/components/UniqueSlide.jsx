import "./uniqueSlide.css";

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Import all images
import Unique1 from "../assets/unique1.jpg";
import Unique2 from "../assets/unique2.jpg";
import Unique3 from "../assets/unique3.jpg";
import Unique4 from "../assets/unique4.jpg";
import Unique5 from "../assets/unique5.jpg";

const UniqueSlide = () => {
  return (
    <div className="w-full container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={Unique5} alt="unique5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Unique1} alt="unique1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Unique2} alt="unique2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Unique3} alt="unique3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Unique4} alt="unique4" />
        </SwiperSlide>

        <div className="slide-controler">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default UniqueSlide;
