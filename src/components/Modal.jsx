import { Icon } from "@iconify/react";
import { useState } from "react";
import Validation from "./Validation";

const Modal = ({ modal, setModal }) => {
  const handleClick = () => {
    setModal(!modal);
    document.body.classList.remove("active-modal");
  };

  const closeOverlay = (e) => {
    if (e.target.id === "modal-bg") {
      setModal(!modal);
      document.body.classList.remove("active-modal");
      // document.querySelector('body').classList.remove('active-modal');
    }
  };

  // Form Validation
  const [form, setForm] = useState({
    firstName: "",
    surname: "",
    email: "",
    phoneNumber: "",
    arrivalDate: "",
    numberOfDays: "",
    comments: "",
    dateOfBooking: new Date().toLocaleDateString(),
    timeOfBooking: new Date().toLocaleTimeString(),
  });

  const {
    firstName,
    surname,
    email,
    phoneNumber,
    arrivalDate,
    numberOfDays,
    Comments,
  } = form;

  const [errors, setErrors] = useState({
    error: "error",
  });
  const [successModal, setSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputs = (e) => {
    const newValue = { ...form, [e.target.name]: e.target.value };
    setForm(newValue);
  };

  const handleValidation = () => {
    setErrors(Validation(form));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(Validation(form));

    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      setLoading(true);
      await fetch(
        "https://sheet.best/api/sheets/d518ebbb-96ca-4eeb-bf95-23f4ed9deda9",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      ).then((r) => r.json());
      setLoading(false);
      setSuccessModal(true);
    } catch (error) {
      // Errors are reported there
      //   console.log(error);
      setLoading(false);
    }
  };

  return (
    <div
      id="modal-bg"
      className=" fixed inset-0 w-full h-full z-50 bg-lidaDark bg-opacity-50 flex justify-center items-center "
      onClick={closeOverlay}
    >
      {successModal ? (
        <div className="relative bg-[#E5E5E5] w-9/12 p-4 m-4 top-0 rounded-lg md:w-6/12 lg:w-4/12 shadow-2xl  ">
          <div className="text-green-500 text-[18px] text-center">
            {/* <Icon
              icon="icon-park-outline:correct"
              width="40"
              className=" m-auto"
            /> */}
            <p className="my-2">Booked Successfully</p>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 my-4 hover: text-sm  transition-shadow rounded-lg "
              onClick={handleClick}
            >
              OK
            </button>
          </div>
        </div>
      ) : (
        <div className="relative bg-[#E5E5E5] p-4 m-4 top-0 rounded-lg md:w-8/12 lg:w-6/12 shadow-2xl  ">
          <>
            <Icon
              icon="ph:x"
              width="25"
              onClick={handleClick}
              className="transistion-all ease-in-out text-lidaDark absolute right-6    hover:cursor-pointer"
            />
            <h1 className="text-[22px] py-4 font-bold text-center text-lidaOrange">
              Make Your Reservation
            </h1>
            <p className="mb-1 text-[16px] text-center">
              Fill the form below to book the room and will get back to you
              shortly.
            </p>
          </>

          <form className="space-y-3" onSubmit={handleSubmit}>
            {
              <>
                <div className="flex justify-center items-baseline space-y-4 space-x-4">
                  <div className="block w-full">
                    <input
                      type="text"
                      name="firstName"
                      value={firstName}
                      onChange={handleInputs}
                      onBlur={handleValidation}
                      autoComplete="off"
                      placeholder="FirstName"
                      className="w-full p-1 outline-none border border-lidaOrange"
                    />
                    {errors.firstName && (
                      <p className="text-red-400 text-[13px]">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="block w-full">
                    <input
                      type="text"
                      name="surname"
                      value={surname}
                      onChange={handleInputs}
                      onBlur={handleValidation}
                      autoComplete="off"
                      placeholder="Surname"
                      className="w-full p-1 outline-none border border-lidaOrange"
                    />
                    {errors.surname && (
                      <p className="text-red-400 text-[13px]">
                        {errors.surname}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInputs}
                    onBlur={handleValidation}
                    autoComplete="off"
                    placeholder="Email"
                    className="w-full p-1 outline-none border border-lidaOrange"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-[13px]">{errors.email}</p>
                  )}
                </div>

                <div>
                  <input
                    type="number"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handleInputs}
                    onBlur={handleValidation}
                    autoComplete="off"
                    placeholder="Phone Number"
                    className="w-full p-1 outline-none border border-lidaOrange"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-400 text-[13px]">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>

                <div className="space-y-3 md:flex md:space-y-0 md:space-x-4 justify-between">
                  <div className="block w-full">
                    <label htmlFor="date" className="text-gray-500">
                      Arrival Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="arrivalDate"
                      value={arrivalDate}
                      onChange={handleInputs}
                      onBlur={handleValidation}
                      className="w-full p-1 outline-none border border-lidaOrange"
                    />
                    {errors.arrivalDate && (
                      <p className="text-red-400 text-[13px]">
                        {errors.arrivalDate}
                      </p>
                    )}
                  </div>

                  <div className="block w-full">
                    <label htmlFor="days" className="text-gray-500">
                      Number of Night <span className="text-red-500">*</span>{" "}
                    </label>
                    <input
                      type="number"
                      name="numberOfDays"
                      value={numberOfDays}
                      id="days"
                      onChange={handleInputs}
                      onBlur={handleValidation}
                      autoComplete="off"
                      placeholder="days"
                      className="w-full p-1 outline-none border border-lidaOrange"
                    />
                    {errors.numberOfDays && (
                      <p className="text-red-400 text-[13px]">
                        {errors.numberOfDays}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="comment" className="text-gray-500">
                    Comments{" "}
                  </label>
                  <textarea
                    name="comments"
                    value={Comments}
                    onChange={handleInputs}
                    onBlur={handleValidation}
                    id="comments"
                    placeholder="Feel free to let us know about any special requirements."
                    cols="30"
                    rows="10"
                    className="w-full p-1 outline-none border border-lidaOrange h-24"
                  ></textarea>
                </div>

                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className="bg-lidaDark/60 text-white px-6 py-2 my-4 hover:bg-lidaDark/40  transition-shadow rounded-sm "
                    onClick={handleClick}
                  >
                    Cancel
                  </button>
                  <button className="bg-lidaOrange text-white px-6 py-2 my-4 hover:bg-lidaLightOrange  transition-shadow rounded-sm ">
                    {" "}
                    {!loading ? (
                      "Book Now"
                    ) : (
                      <p className="flex items-center">
                        <Icon icon="gg:spinner" className="animate-spin" />
                        <span className="pl-2">Loading</span>
                      </p>
                    )}
                  </button>
                </div>
              </>
            }
          </form>
        </div>
      )}
    </div>
  );
};

export default Modal;
