import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "CHI PHÍ THẤP",
    icon: (
      <FaCameraRetro className="text-5xl text-[#9e1c20] group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Tổng chi phí đầu tư chỉ với 5,5tr/kiosk.",
    aosDelay: "0",
  },
  {
    name: "HOÀN VỐN NHANH",
    icon: (
      <GiNotebook className="text-5xl text-[#9e1c20] group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "Hoàn vốn sau 2 tháng.",
    aosDelay: "500",
  },
  {
    name: "KHAI TRƯƠNG NHANH",
    icon: (
      <SlNote className="text-5xl text-[#9e1c20] group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "Từ 3 đến 5 ngày kể từ ngày ký hợp đồng.",
    aosDelay: "1000",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold font-roboto-serif"
              style={{ color: "#9e1c20", fontFamily: "'Bahnschrift', Arial, sans-serif" }}
            >
              LỢI ÍCH NHƯỢNG QUYỀN
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-[#ebdbb8] hover:bg-primary duration-300 hover:text-black rounded-lg"
                style={{ fontFamily: "'Bahnschrift', Arial, sans-serif" }}
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1
                  className="text-2xl font-bold"
                  style={{ color: "#9e1c20", fontFamily: "'Bahnschrift', Arial, sans-serif" }}
                >
                  {skill.name}
                </h1>
                <p style={{ color: "#000000", fontFamily: "'Bahnschrift', Arial, sans-serif" }}>
                  {skill.description}
                </p>
                <a
                  href="#register-form"
                  className="inline-block text-lg font-semibold py-3 text-[#9e1c20] group-hover:text-black duration-300"
                  style={{ fontFamily: "'Bahnschrift', Arial, sans-serif" }}
                >
                  Đăng ký nhượng quyền
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;