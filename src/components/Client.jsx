import "./client.css";
import { Icon } from "@iconify/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// // Import all images
import Ellipse1 from "../assets/Ellipse1.png";
import Ellipse2 from "../assets/Ellipse2.png";

// import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        // pagination={{el:'.swiper-pagination', clickable:true}}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-testimonial-slide shadow-xl">
          <div className="textimonialBox">
            <div className="content">
              <h1 className="font-bold text-lidaOrange text-[22px] leading-[24px] mb-[20px] mt-[10px]">
                5Star Rating{" "}
              </h1>
              <p className="text-[14px] leading-0">
                We thoroughly enjoyed our stay. The staffs were always motivated
                to help us. The food was excellent, the chef ensured that our
                pallet needs were met. The hotel ambience was lovely & very
                serene. We look forward to coming back. Feel very revitalized
                after spa treatments at Maya Spa.
              </p>
            </div>
            <div className="details flex space-x-6 pt-5">
              <div className="imgbox">
                <img src={Ellipse1} alt="textimonial 1" className="inner" />
              </div>
              <div className="text-[13px]">
                <h1 className="font-[600]">Samuel Mathews</h1>
                <p>Guest</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-testimonial-slide shadow-xl">
          <div className="textimonialBox">
            <div className="content">
              <h1 className="font-bold text-lidaOrange text-[22px] leading-[24px] mb-[20px] mt-[10px] ">
                Fantastic{" "}
              </h1>
              <p className="text-[14px] leading-0">
                I absolutely love everything about Lidapearl Hotels! It is not
                only a beautiful hotel with great rooms, but, it is clean and
                comfortable, from the beds and pillows to the staff! The staff
                also happen to be the friendliest and most helpful that I have
                ever encountered from all the places that I have stayed from all
                of my travels.
              </p>
            </div>
            <div className="details flex space-x-6 pt-5">
              <div className="imgbox">
                <img src={Ellipse2} alt="textimonial 2" className="inner" />
              </div>
              <div className="text-[13px]">
                <h1 className="font-[600]">Jadesola Agunbiade</h1>
                <p>Guest</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="relative">
          <div className="flex z-50 mb-26 absolute right-7 md:right-1  lg:right-[91px] mt-[-32px]">
            <div className="button-prev slider-arrow bg-lidaDark w-10 rounded-sm">
              <Icon
                icon="ic:baseline-less-than"
                className="text-white mx-auto px-2"
                width="30"
              />
            </div>
            <div className="button-next slider-arrow bg-lidaOrange w-10 rounded-sm">
              <Icon
                icon="ic:baseline-greater-than"
                className="text-white px-2 mx-auto cursor-pointer "
                width="30"
              />
            </div>
          </div>

          {/* <div className="swiper-pagination"></div> */}
        </div>
      </Swiper>
    </>
  );
}

// // import Swiper core and required modules
// import { Swiper, SwiperSlide } from "swiper/react"
// import { EffectCoverflow, Navigation, Pagination } from 'swiper';
// // import { Icon } from "@iconify/react"

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-coverflow';

// // Import all images
// import Unique1 from '../assets/unique1.jpg'
// import Unique2 from '../assets/unique2.jpg'

// const UniqueSlide = () => {
//   return (
//     <div className="w-full container">
//       <Swiper
//         effect={ 'coverflow' }
//         grabCursor={ true }
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={'auto'}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5
//         }}
//         pagination={{ el: '.swiper-pagination', clickable: true }}
//         navigation={ {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//           clickable: true
//         } }
//         modules={[ EffectCoverflow, Pagination, Navigation]}
//         className="swiper_container"
//       >

//         <SwiperSlide className="w-[400px]">
//           <div className="border bg-white px-[32px] pt-[30px]">
//             <h1 className="text-lidaOrange text-[24px] mb-4 font-bold">Fantastic</h1>
//             <p className="text-[14px">We thoroughly enjoyed our stay. The staffs were always motivated to help us. The food was excellent, the chef ensured that our pallet needs were met. The hotel ambience was lovely & very serene. We look forward to coming back. Feel very revitalized after spa treatments at Maya Spa.
//             </p>
//             <div className="flex">
//              <img src={Unique1} alt="unique1" width={50} className="w-10 h-10 rounded-full guestImg"/>
//              <div>
//               <h1>Jadesola Matins</h1>
//               <p>Guest</p>
//              </div>
//             </div>

//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="border bg-white px-[32px] pt-[30px]">
//             <h1 className="text-lidaOrange text-[24px] mb-4 font-bold">5Star Rating</h1>
//             <p className="text-[14px">
//             I absolutely love everything about Lidapearl Hotels! It is not only a beautiful hotel with great rooms, but, it is clean and comfortable, from the beds and pillows to the staff! The staff also happen to be the friendliest and most helpful that I have ever encountered from all the places that I have stayed from all of my travels.
//             </p>
//             <div className="flex">
//              <img src={Unique2} width='20px' height='20px' alt="unique2" className="guestImg"/>
//              <div>
//               <h1>Jadesola Matins</h1>
//               <p>Guest</p>
//              </div>
//             </div>

//           </div>

//         </SwiperSlide>

//         <div className="slide-controler">
//         <div className="swiper-button-prev slider-arrow">
//             <ion-icon name="arrow-back-outline"></ion-icon>
//           </div>
//           <div className="swiper-button-next slider-arrow">
//             <ion-icon name="arrow-forward-outline"></ion-icon>
//           </div>
//           <div className="swiper-pagination"></div>
//         </div>

//       </Swiper>

//     </div>
//   )
// }

// export default UniqueSlide
