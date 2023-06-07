import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const BackToTop = () => {
  const [toTop, setToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setToTop(true);
      } else {
        setToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {toTop && (
        <button
          className="bg-lidaOrange text-white text-2xl w-[50px] h-[50px] rounded-full
                     p-4 fixed bottom-[50px] right-[30px] z-50 cursor-pointer"
          onClick={scrollUp}
        >
          <Icon icon="formkit:arrowup" width="15" className="-mt-1" />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
