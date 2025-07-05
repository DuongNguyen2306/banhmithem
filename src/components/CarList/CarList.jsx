import React from "react";
import { Link } from "react-router-dom";
import goiCoBan from "../../assets/12.jpg";
import goiNangCao from "../../assets/13.jpg";

const carList = [
  {
    name: "Gói cơ bản",
    image: goiCoBan,
    aosDelay: "0",
    path: "/package-details/basic",
  },
  {
    name: "Gói nâng cao",
    image: goiNangCao,
    aosDelay: "500",
    path: "/package-details/advanced",
  },
];

const CarList = () => {
  return (
    <div className="pb-24" style={{ fontFamily: "'Bahnschrift', Arial, sans-serif" }}>
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
          style={{ color: "#9e1c20", fontFamily: "'Bahnschrift', Arial, sans-serif" }}
        >
          CÁC GÓI
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-sm pb-10"
          style={{ fontFamily: "'Bahnschrift', Arial, sans-serif" }}
        >
          Lựa chọn phù hợp với nhu cầu kinh doanh của bạn.
        </p>

        {/* Gói - chỉ hiển thị ảnh full khung */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {carList.map((data) => (
            <Link
              key={data.name}
              to={data.path}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="border-2 border-gray-300 hover:border-primary rounded-xl overflow-hidden block"
            >
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-full object-cover hover:scale-105 duration-500"
              />
            </Link>
          ))}
        </div>

        {/* Nút đăng ký */}
        <div className="grid place-items-center mt-8">
          <a
            href="#register-form"
            className="button-outline"
            style={{
              color: "#9e1c20",
              backgroundColor: "#ebdbb8",
              fontFamily: "'Bahnschrift', Arial, sans-serif",
              padding: "8px 16px",
              borderRadius: "4px",
            }}
          >
            Đăng ký nhượng quyền ngay
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarList;