import Header from "../components/Header";
import factHero from "../assets/factHero.jpg";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import fac1 from "../assets/fac1.jpg";
import fac2 from "../assets/fac2.jpg";
import fac3 from "../assets/fac3.jpg";
import fac4 from "../assets/fac4.jpg";
import fac5 from "../assets/fac5.jpg";
import fac6 from "../assets/fac6.jpg";
import { Icon } from "@iconify/react";

const Facilities = ({ toggleModal }) => {
  const facilitiesData = [
    {
      id: 1,
      img: fac1,
      title: "Gymnasium & Steam Room",
      description:
        "We have the most equipped gym in Lagos with an instructor always available. It has a separate male and female steam r...",
    },
    {
      id: 2,
      img: fac2,
      title: "Conference Halls",
      description:
        "Our pool and its bar are designed to provide excellent chill times with family and friends. The pool area is also ava...",
    },
    {
      id: 3,
      img: fac3,
      title: "Salon & SPA",
      description:
        "You are cordially invited to experience relaxing massages anytime at our Spa. Our variety of pampering sessions...",
    },
    {
      id: 4,
      img: fac4,
      title: "Business Centre /Services",
      description:
        "Our Business Centre is located in the lobby of the main hotel building right next to the bookshop. Our facilities inc...",
    },
    {
      id: 5,
      img: fac5,
      title: "Restaurant & Bar",
      description:
        "Our Restaurant and Rooftop Bar promise exquisite delight of Assorted Food and drinks.",
    },
    {
      id: 6,
      img: fac6,
      title: "Swimming Pool",
      description:
        "Our Award winning Conference Venue is perfect for events large & small,our conference centres offer a range of event...",
    },
  ];

  return (
    <div
      id="Hero"
      className="w-full h-[730px] md:h-[500px] backdrop-saturate-50"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${factHero}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header toggleModal={toggleModal} />
      <div className="w-full mt-10">
        <div className="items-center mx-auto md:grid md:grid-cols-2 md:justify-between md:px-16">
          <div className="text-white w-[300px] mx-auto md:mx-0  mb-[50px]  text-center md:text-start">
            <h1 className="text-[26px] mb-[20px] font-bold md:text-[30px] lg:text-[36px] lg:w-[414px] md:mb-[35px] ">
              Our Indoor & Outdoor Facilities
            </h1>
            <p className="font-normal text-[16px]  leading-[28px] ">
              Our indoor and outdoor facilities and quality services are to give
              you value for your money.
            </p>
            <hr className="m-auto md:mx-0 mt-6 w-[70%]" />
          </div>

          <div className="w-full h-full mx-auto items-center overflow-hidden ">
            <Slider autoSlide={true} />
          </div>
        </div>
      </div>

      <section id="facilities" className="bg-[#E5E5E5]">
        <div className="grid px-5 md:grid-cols-3 md:px-16 gap-12 mb-16  mt-20">
          {facilitiesData.map((data) => {
            return (
              <div key={data.id}>
                <img src={data.img} alt="" className="cursor-pointer" />
                <h1 className="mt-5 mb-2 font-bold text-lidaOrange text-[16px] md:text-[18px]">
                  {data.title}
                </h1>
                <p className="text-[16px] md:text-[18px]">{data.description}</p>
                <p className="flex font-bold text-lidaDark mt-2 hover:text-lidaOrange cursor-pointer ">
                  Read More{" "}
                  <span className="border border-lidaOrange text-lidaOrange w-4 h-4 ml-6  mt-[6px] rounded-full">
                    <Icon
                      icon="ic:baseline-greater-than"
                      width="15"
                      className="ml-auto"
                    />
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Facilities;
