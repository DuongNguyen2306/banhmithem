import React, { useEffect } from "react";
import bannerxe from "../../assets/xebanhmi.png";
import AOS from "aos";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="dark:bg-black dark:text-white duration-300">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? bannerxe : bannerxe}
              alt=""
              className="sm:scale-125 translate-x-40 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32">
            <p
              data-aos="fade-up"
              className="text-2xl font-serif"
              style={{ color: "#9e1c20", fontFamily: "'Bahnschrift', Arial, sans-serif" }}
            >
              Xe bánh mì Thêm
            </p>
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl lg:text-7xl font-semibold font-serif"
              style={{ color: "#9e1c20", fontFamily: "'Bahnschrift', Arial, sans-serif" }}
            >
              Thêm
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="1000"
              style={{ fontFamily: "'Bahnschrift', Arial, sans-serif" }}
            >
              Bánh mì nóng giòn – Hương vị truyền thống!
            </p>
            <a
              href="#register-form"
              data-aos="fade-up"
              data-aos-delay="1500"
              className="rounded-md hover:bg-[#ebdbb8]/80 transition duration-500 py-2 px-6 inline-block"
              style={{ backgroundColor: "#ebdbb8", color: "#9e1c20", fontFamily: "'Bahnschrift', Arial, sans-serif" }}
            >
              Đăng ký nhượng quyền
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;