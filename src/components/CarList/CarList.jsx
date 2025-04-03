import React from "react";
import goiCoBan from "../../assets/5555.png";
import goiNangCao from "../../assets/6666.png";

const carList = [
  {
    name: "Gói cơ bản",
    image: goiCoBan,
    aosDelay: "0",
  },
  {
    name: "Gói nâng cao",
    image: goiNangCao,
    aosDelay: "500",
  },
];

const CarList = () => {
  return (
    <div className="pb-24">
      <div className="container">
        {/* Heading */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3"
        >
          Các gói
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          Lựa chọn phù hợp với nhu cầu kinh doanh của bạn.
        </p>

        {/* Gói - chỉ hiển thị ảnh full khung */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {carList.map((data) => (
            <div
              key={data.name}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="border-2 border-gray-300 hover:border-primary rounded-xl overflow-hidden"
            >
              <img
                src={data.image}
                alt={data.name}
                className="w-full h-full object-cover hover:scale-105 duration-500"
              />
            </div>
          ))}
        </div>

        {/* Nút đăng ký */}
        <div className="grid place-items-center mt-8">
          <button data-aos="fade-up" className="button-outline">
            Đăng ký nhượng quyền ngay
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
