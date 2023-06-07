import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import contactHero from "../assets/contactHero.jpg";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

const Contacts = ({ toggleModal }) => {
  // Using React libaries in form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [formData, setFormData] = useState();
  const [loading, setLoading] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const messageSent = () => {
    setIsSubmit(true);
    // you can do async server request and fill up form
    setTimeout(() => {
      setIsSubmit(false);
    }, 4000);
  };

  const onSubmit = (data) => {
    setFormData(data);

    try {
      setLoading(true);

      fetch(
        "https://sheet.best/api/sheets/10c7f9cf-350e-4515-8a27-91a12b83db6f",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...data,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
          }),
        }
      )
        .then((r) => r.json())
        .then((data) => {
          // The response comes here
          // console.log(data);
          setLoading(false);
          messageSent();
        });
    } catch (error) {
      // Errors are reported there
      //   console.log(error);
      // setLoading(false)
      setIsSubmit(false);
    }
  };

  useEffect(() => {
    // you can do async server request and fill up form
    setTimeout(() => {
      reset({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1200);
  }, [reset, formData]);

  return (
    <div
      id="Hero"
      className="w-full h-[630px] md:h-[500px] backdrop-saturate-50"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${contactHero}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header toggleModal={toggleModal} />
      <div className="w-full mt-10 md:mb-8">
        <div className="items-center mx-auto md:grid md:grid-cols-2 md:justify-between md:px-16">
          <div className="text-white w-[300px] mx-auto md:mx-0  mb-[50px]  text-center md:text-start">
            <h1 className="text-[26px] mb-[20px] font-bold md:text-[30px] lg:text-[36px] lg:w-[414px] md:mb-[35px] ">
              Get In Touch
            </h1>
            <p className="font-normal text-[16px]  leading-[28px] ">
              We would love to hear from you!
            </p>
            <hr className="m-auto md:mx-0 mt-6 w-[70%]" />
          </div>

          <div className="w-full h-full mx-auto items-center overflow-hidden ">
            <Slider autoSlide={true} />
          </div>
        </div>
      </div>

      <section id="form" className="bg-[#E5E5E5] ">
        <div className="grid px-5 md:space-x-5 md:grid-cols-2 mt-16 mb-16  md:mt-24 md:px-28 ">
          <div className="lg:w-[330px]">
            <h1 className="font-bold mb-3 text-[21px] md:text-[26px] ">
              Keep In Touch <span className="text-lidaOrange">With Us</span>{" "}
            </h1>
            <p className="text-[16px] md:text-[18px]">
              If there is anything you may need to make your stay at Lidapearl
              Hotels a more delightful and memorable experience please contact
              us.
              <br />
              <br />
              We look forward to hearing from you!
            </p>
          </div>

          <div className="mt-6 md:mt-0 ">
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              {isSubmit && (
                <div className="-mb-5 text-[18px] text-green-500 font-bold ">
                  Message Sent Successfully
                </div>
              )}
              <div className="grid grid-cols-2 items-baseline space-y-4 space-x-2">
                <div className="block">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    autoComplete="off"
                    {...register("name", { required: true })}
                    className="w-full p-2  border border-lidaOrange outline-lidaOrange"
                  />
                  <span className="text-red-500 text-[13px]">
                    {errors.name?.type === "required" && "Name is required"}
                  </span>
                </div>
                <div className="block">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="off"
                    {...register("email", {
                      required: true,
                      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]{2,4}$/,
                    })}
                    className="w-full p-2  border border-lidaOrange outline-lidaOrange"
                  />
                  <span className="text-red-500 text-[13px]">
                    {errors.email?.type === "required" && "Email is required"}
                  </span>
                  <span className="text-red-500 text-[13px]">
                    {errors.email?.type === "pattern" &&
                      "This is not a valid email"}
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  autoComplete="off"
                  {...register("subject", { required: true })}
                  className="w-full p-2  border border-lidaOrange outline-lidaOrange"
                />
                <span className="text-red-500 text-[13px]">
                  {errors.subject?.type === "required" && "Subject is required"}
                </span>
              </div>

              <textarea
                name="message"
                placeholder="Message"
                {...register("message", { required: true })}
                className="w-full p-2  border border-lidaOrange outline-lidaOrange"
                cols="30"
                rows="10"
              ></textarea>

              <button className="bg-lidaOrange text-white px-6 py-2 hover:bg-lidaLightOrange outline-none transition-shadow rounded-sm">
                {loading ? (
                  <p className="flex items-center">
                    {" "}
                    <Icon icon="gg:spinner" className="animate-spin" />
                    <span className="pl-2">Sending...</span>{" "}
                  </p>
                ) : (
                  <span>Send &nbsp; Now</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <div className="w-full mt-10 mb-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5044993544943!2d3.3636702740463034!3d6.584033122458893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9269241067a5%3A0x48fd7dc301d8ea4a!2s117%20Opebi%20Rd%2C%20Opebi%20101233%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1685713749083!5m2!1sen!2sng"
          title="Lidapearl"
          width="100%"
          height="450"
          style={{ border: "0" }}
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

export default Contacts;
