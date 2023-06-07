import { Icon } from "@iconify/react";
import Header from "../components/Header";
import homeHero from "../assets/homeHero.png";
import Slider from "../components/Slider";
import UniqueSlide from "../components/UniqueSlide";
import Client from "../components/Client";
import about from "../assets/about.jpg";
import freepik from "../assets/freepik.jpg";
import Footer from "../components/Footer";

const Home = ({ toggleModal, modal, setModal, top }) => {
  return (
    <div>
      <div
        id="Hero"
        className="w-full h-[800px] md:h-[500px] backdrop-saturate-50"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${homeHero}) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header toggleModal={toggleModal} />
        <div className="w-full mt-10">
          <div className="items-center mx-auto md:grid md:grid-cols-2 md:justify-between md:px-16">
            <div className="text-white w-[300px] mx-auto md:mx-0  mb-[50px] text-center md:text-start">
              <h1 className="text-[26px] mb-[20px] font-bold md:text-[30px] lg:text-[36px] lg:w-[414px] md:mb-[35px] ">
                All You Ever Wanted, We Have Them{" "}
                <span className="text-lidaOrange">All In One Place</span>{" "}
              </h1>
              <p className="font-normal text-[16px] md:text-[18px]  leading-[28px] ">
                For a truly unforgettable experience, in lavish comfort an
                uninterrupted privacy, experience the ultimate destination
                choose Lidapearl Hotels.
              </p>
              <hr className="m-auto md:mx-0 mt-6 w-[70%]" />
            </div>

            <div className="w-full h-full mx-auto items-center overflow-hidden ">
              <Slider autoSlide={true} />
            </div>
          </div>
        </div>
      </div>

      <section className="w-full h-[500px] ">
        <div className="block gap-4 mt-[70px] md:grid md:grid-cols-2 md:px-16  ">
          <div className="px-5 mt-12 md:w-[350px] lg:w-[450px] md-mt-10">
            <h1 className="text-[22px] md:text-[26px] leading-[26px] font-bold pb-6">
              Our Pride As <span className="text-lidaOrange">The Best</span>
            </h1>
            <p className="text-[16px] md:text-[18px] leading-[26px] font-normal ">
              Lidapearl Hotels operates a first class hotel for business and
              leisure travelers. For our customers, Lidapearl Hotels shall be
              perceived as a first class, full service, efficient, friendly,
              modern and informal hotel that makes the hotel and gastronomy
              experience easy for business and leisure travelers through a wide
              range of innovative service concepts.
            </p>

            <hr className="md:mx-0 mt-8 w-[70%] border-lidaDark" />
          </div>

          <div className="mt-16 md:mt-0">
            <UniqueSlide />
          </div>
        </div>
      </section>

      <section
        id="about"
        className="bg-lidaDark w-full h-[1100px] md:h-[750px] lg:h-[520px] mt-[300px] md:mt-0"
      >
        <div className="block px-5 md:flex justify-between lg:items-center  md:px-16 md:space-x-8">
          <div className="pt-16 md:py-0 md:mt-20 ">
            <img src={about} alt="about" />
          </div>

          <div className="lg:flex  justify-between text-white space-y-16 md:space-y-0 ">
            <div className="mt-16">
              <h1 className="text-[22px] md:text-[26px] leading-26 font-bold mb-5 ">
                About The{" "}
                <span className="text-lidaOrange text-[22px] md:text-[26px] ">
                  Hotel
                </span>{" "}
              </h1>
              <p>
                Lidepearl Hotels is located in the heart of Lagos, offering the
                discerning international and domestic traveler the comfort and
                world-class service befitting Nigeria’s premier luxury boutique.
                <br />
                <br />
                As soon as you walk into the long hallway with a red rug, wood
                walls and wall Paintings, you know you’ve entered Lidapearl’s
                fantastical world.
              </p>
              <hr className="m-auto ml-0 md:mx-0 mt-6 w-[70%]" />

              <p className="mt-6 font-bold flex">
                Read More{" "}
                <span className="border border-lidaOrange text-lidaOrange w-4 h-4 ml-6 mt-[6px] rounded-full">
                  <Icon
                    icon="ic:baseline-greater-than"
                    width="15"
                    className="ml-auto"
                  />
                </span>{" "}
              </p>
            </div>

            <div className="">
              <div className="relative flex justify-center mt-16 ">
                <div className="border-2 border-lidaOrange h-[135px] w-[110px] mx-4">
                  <div className="pt-6 text-center box-border">
                    <Icon
                      icon="material-symbols:lunch-dining-outline"
                      className="text-lidaOrange mx-auto mb-2"
                      width={30}
                    />
                    <p>Best For Dinning</p>
                  </div>
                </div>
                <div className="border-2 border-lidaOrange  h-[135px] w-[110px] mx-4">
                  <div className="p-6 text-center box-border">
                    <Icon
                      icon="mdi:bedroom-outline"
                      className="text-lidaOrange mx-auto mb-2"
                      width={35}
                    />
                    <p>Luxurious Rooms</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-lidaOrange mx-auto mt-[-15px] h-[135px] w-[110px]">
                <div className="p-5 text-center box-border">
                  <Icon
                    icon="maki:beach"
                    className="text-lidaOrange mx-auto mb-2"
                    width={35}
                  />
                  <p>Best For Relaxation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="freepiks"
        className="w-full h-[1100px] md:h-[650px]"
        style={{
          background: `url(${freepik}) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-5 text-lidaDark text-[16px] block md:grid md:grid-cols-2 md:px-16 justify-between md:space-x-6 ">
          <div className="pt-16 md:pt-0 md:mt-[80px] leading-[26px]">
            <h1 className="mb-8 font-bold text-[22px] md:text-[26px] ">
              What Our Client Are{" "}
              <span className="text-lidaOrange">Saying</span>
            </h1>
            <p>
              With over 10+ years of experiences in first class services, it is
              no wonder our clients value and takes us seriously cause we only
              provide the best of the very best.
              <br />
              <br />
              We have made have solidified our position as on of the best if not
              the best in Lagos and the World in terms of excellent Customer
              Care, Rooms Services, Food, Amenities and many others.
            </p>
            <hr className="m-auto ml-0 md:mx-0 mt-6 w-[70%] border-lidaDark" />

            <div className="grid grid-cols-2 mt-10 gap-8">
              <div>
                <h1 className="text-[20px] md-[26px]">Rooms</h1>
                <p className="font-bold text-lidaOrange text-[32px] md:text-[40px] pt-4">
                  20+
                </p>
              </div>
              <div>
                <h1 className="text-[20px] md-[26px]">Feature Amenitie</h1>
                <p className="font-bold text-lidaOrange text-[32px] md:text-[40px] pt-4">
                  12+
                </p>
              </div>
              <div>
                <h1 className="text-[20px] md-[26px]">Happy Customers</h1>
                <p className="font-bold text-lidaOrange text-[32px] md:text-[40px] pt-4">
                  400+
                </p>
              </div>

              <div>
                <h1 className="text-[20px] md-[26px]">Experience</h1>
                <p className="font-bold text-lidaOrange text-[32px] md:text-[40px] pt-4">
                  10yrs+
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[60px] mb-10 md:mt-[140px] md:pl-10">
            <Client />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
