import roomsHero from "../assets/roomHero.jpg";
import Header from "../components/Header";
import Slider from "../components/Slider";
import { Icon } from "@iconify/react";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";
import room4 from "../assets/room4.jpg";
import Footer from "../components/Footer";

const Rooms = ({ toggleModal }) => {
  const roomsData = [
    {
      id: 1,
      img: room1,
      title: "Executive Suites",
      price: "₦58,000",
    },
    {
      id: 2,
      img: room2,
      title: "Standard Queen Room",
      price: "₦87,000",
    },
    {
      id: 3,
      img: room3,
      title: "Luxury King Room",
      price: "₦106 ,000",
    },
    {
      id: 4,
      img: room4,
      title: "Executive King Room",
      price: "₦140,000",
    },
  ];

  return (
    <div
      id="Hero"
      className="w-full h-[780px] md:h-[500px] backdrop-saturate-50"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${roomsHero}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header toggleModal={toggleModal} />

      <div className="w-full mt-10">
        <div className="items-center mx-auto md:grid md:grid-cols-2       md:justify-between md:px-16">
          <div className="text-white w-[300px] mx-auto md:mx-0  mb-[50px]  text-center md:text-start">
            <h1 className="text-[26px] mb-[20px] font-bold md:text-[30px] lg:text-[36px] lg:w-[414px] md:mb-[35px] ">
              Rooms & Rates
            </h1>
            <p className="font-normal text-[16px]  leading-[28px] ">
              All rooms and suites have individually controlled
              air-conditioning, colour TV with 20 satellite channels, mini-bar,
              tea and coffee making facilities, direct-dial telephones, luxury
              private bathrooms, hairdryer, razor point and electronic safes in
              rooms.
            </p>
            <hr className="m-auto md:mx-0 mt-6 w-[70%]" />
          </div>

          <div className="w-full h-full mx-auto items-center overflow-hidden ">
            <Slider autoSlide={true} />
          </div>
        </div>
      </div>

      <section id="rooms" className="bg-[#E5E5E5] w-full mb-10 ">
        <div className="block space-y-8 md:space-x-8 mt-[80px] text-lidaDark text-[16px] md:text-[18px] px-5 md:flex justify-between md:px-10">
          <div className="pb-10 md:w-[800px]">
            <h1 className="text-[22px] font-bold mb-[30px] md:text-[26px]">
              Explore Our <span className="text-lidaOrange ">Rooms</span>
            </h1>
            <p>
              With over 400 rooms, the Liapeark Hotels offers alot of dedicated
              choices for all our Guests. From our Standard Rooms to
              Presidential Suites, our guests will always find the most
              customised option to make their stay in Lagos a very pleasurable
              and memorable one of all.
            </p>{" "}
            <br />
            <p>
              Other services includes free wi-fi in all the hotel, internet
              corner with free internet access, laundry service, daily press,
              fax service, car rental, restaurant reservations and excursions
            </p>
            <hr className="md:mx-0 mt-8 w-[70%] border-lidaDark" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 ">
            {roomsData.map((data) => {
              return (
                <div key={data.id}>
                  <img src={data.img} alt="" className="cursor-pointer" />
                  <div className="flex justify-between md:flex-col xl:flex-row mt-[30px] font-bold text-[16px] md:text-[18px]">
                    <div className="flex flex-col ">
                      <h1>{data.title}</h1>
                      <p className="text-lidaOrange">
                        {data.price}{" "}
                        <span className="text-gray-400">/per night</span>
                      </p>
                    </div>

                    <p className="flex cursor-pointer hover:text-lidaOrange">
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
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 md:w-[750px] mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center p-4 space-x-4  shadow-md border border-stone-300 box-border ">
            <h1 className="text-[20px] font-bold md:text-[22px] text-center ">
              Get <span className="text-lidaOrange">30% off</span> on Hotel room
              or any other event today
            </h1>
            <button
              className="bg-lidaOrange m mt-3 md:mt-0 text-white px-6 py-2 hover:bg-lidaLightOrange  transition-shadow rounded-sm"
              onClick={toggleModal}
            >
              Book &nbsp; Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;
