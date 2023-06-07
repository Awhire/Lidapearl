import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-lidaDark">
      <div className="flex flex-col justify-between  text-white px-5 py-10 space-y-4 md:space-y-0 md:flex-row md:px-16 ">
        <div className="flex flex-col text-[16px] md:text[18px] space-y-5 mt-10">
          <div className="flex space-x-2 justify-center md-justify-start">
            <span className="text-lidaOrange ">
              <Icon icon="codicon:location" width="25" />
            </span>
            <p>117 Opebi Road, Off Alen Avenue, Ikeja, Lagos.</p>
          </div>
          <div className="flex space-x-2 justify-center md:justify-start">
            <span className="text-lidaOrange items-center flex">
              <Icon icon="wpf:message-outline" width="24" />
            </span>
            <p>
              reservation@lidapearlhotel.com, <br /> info@lidapearlhotel.com
            </p>
          </div>
          <div className="flex space-x-2 justify-center md:justify-start ">
            <span className="text-lidaOrange items-center flex">
              <Icon icon="ion:call-outline" width="25" />
            </span>
            <p>
              (234) 081 0032 1853, <br /> (234) 070 2892 1022
            </p>
          </div>
        </div>

        <div className="flex flex-col md:text-start items-center space-y-4 pt-10 md:pt-5">
          <h1 className="text-[20px] text-lidaOrange">Quick Link</h1>
          <Link to="/" className="hover:text-lidaOrange">
            Home
          </Link>
          <Link to="/Rooms" className="hover:text-lidaOrange">
            Rooms & Rates
          </Link>
          <Link to="/Facilities" className="hover:text-lidaOrange">
            Facilities
          </Link>
          <Link to="/Contacts" className="hover:text-lidaOrange">
            Contact Us
          </Link>
        </div>

        <div className=" block justify-center space-y-4 text-center pt-5 md:pt-0">
          <div className="flex flex-col-reverse md:flex-col mt-4">
            <div className="">
              <h1 className="logo text-2xl text-lidaOrange font-bold">
                Lidapearl
              </h1>
              <p className="logo text-xs text-white">Hotels</p>
            </div>

            <div className="flex space-x-8 md:mt-4 justify-center mb-4">
              <Icon
                icon="fa6-brands:square-facebook"
                width="21"
                className="text-white hover:text-lidaOrange cursor-pointer"
              />
              <Icon
                icon="fa6-brands:square-twitter"
                width="21"
                className="text-white hover:text-lidaOrange cursor-pointer"
              />
              <Icon
                icon="mdi:instagram"
                width="25"
                className="text-white hover:text-lidaOrange cursor-pointer"
              />
            </div>
          </div>

          <div>
            <p className="text-[16px] md:text[18px]">
              &copy; 2023{" "}
              <span className="text-lidaOrange">Lidapearl Hotel</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
