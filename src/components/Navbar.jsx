import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar = ({ toggleModal }) => {
  const [nav, setNav] = useState(false);

  const hideMenu = () => {
    setNav(!nav);
  };

  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setNav(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <nav className=" h-[80px]" ref={menuRef}>
      <div className="flex justify-between items-center px-3 md:px-10 py-10 h-full w-full">
        {/* Logo */}
        <div className="">
          <h1 className="logo text-2xl text-lidaOrange font-bold">Lidapearl</h1>
          <p className="logo text-xs text-white">Hotels</p>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex md:space-x-[30px] lg:space-x-[70px] justify-between items-baseline text-white">
          <ul className="flex md:space-x-[30px] lg:space-x[70px]">
            <NavLink
              to="/"
              className="highlight relative hover:text-lg hover:font-bold transition-all truncate hover:text-clip"
            >
              Home
            </NavLink>
            <NavLink
              to="/Rooms"
              className="relative  highlight hover:text-lg hover:font-bold transition-all truncate hover:text-clip"
            >
              Rooms &nbsp; & &nbsp; Rates
            </NavLink>
            <NavLink
              to="/Facilities"
              className="relative  highlight hover:text-lg hover:font-bold transition-all truncate hover:text-clip"
            >
              Facilities
            </NavLink>
            <NavLink
              to="/Contacts"
              className="relative  highlight hover:text-lg hover:font-bold transition-all truncate hover:text-clip"
            >
              Contact &nbsp; Us
            </NavLink>
          </ul>

          {/* Botton */}
          <button
            onClick={toggleModal}
            className="bg-lidaOrange text-white px-6 py-2 hover:bg-lidaLightOrange  transition-shadow rounded-sm"
          >
            Book &nbsp; Now
          </button>
        </div>

        <div className="md:hidden text-white">
          {!nav ? (
            <Icon
              icon="mdi:menu"
              width="34"
              onClick={hideMenu}
              className="transistion-all ease-in-out"
            />
          ) : (
            <Icon
              icon="ph:x"
              width="32"
              onClick={hideMenu}
              className="transistion-all ease-in-out"
            />
          )}
        </div>
      </div>

      <div className="absolute top-0 md:hidden text-white">
        {nav ? (
          <div>
            <div className="absolute flex w-full justify-between px-3 py-5 ">
              <div className="block">
                <h1 className="logo text-2xl text-white font-bold">
                  Lidapearl
                </h1>
                <p className="logo text-xs">Hotels</p>
              </div>
              {!nav ? (
                <Icon
                  icon="mdi:menu"
                  width="34"
                  onClick={hideMenu}
                  className="transistion-all ease-in-out"
                />
              ) : (
                <Icon
                  icon="ph:x"
                  width="32"
                  onClick={hideMenu}
                  className="transistion-all ease-in-out"
                />
              )}
            </div>
            <ul className="flex flex-col items-center space-y-20 rounded-br-full bg-lidaOrange  h-screen w-screen ease-in-out">
              <NavLink
                to="/"
                className="hover:text-lg hover:font-bold mt-28 transition-all truncate hover:text-clip"
              >
                Home
              </NavLink>
              <NavLink
                to="/rooms"
                className="hover:text-lg hover:font-bold transition-all truncate hover:text-clip"
              >
                Rooms &nbsp; & &nbsp; Rates
              </NavLink>
              <NavLink
                to="/facilities"
                className="hover:text-lg hover:font-bold transition-all truncate hover:text-clip"
              >
                Facilities
              </NavLink>
              <NavLink
                to="/contacts"
                className="hover:text-lg hover:font-bold transition-all truncate hover:text-clip"
              >
                Contact &nbsp; Us
              </NavLink>

              <button
                onClick={() => {
                  toggleModal();
                  hideMenu();
                }}
                className="bg-white text-lidaDark px-6 py-2 hover:bg-lidaLightOrange hover:text-white transition-shadow rounded-sm justify-center"
              >
                Book &nbsp; Now
              </button>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Navbar;
