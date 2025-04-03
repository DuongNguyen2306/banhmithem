import React from "react";

// Import hình ảnh đối tác từ thư mục assets
import huyImg from "../../assets/huy.jpg";
import duongImg from "../../assets/duong.jpg";
import khangImg from "../../assets/khang.jpg";

const testimonialData = [
  {
    name: "Anh Huy Vũng Tàu",
    image: huyImg,
    description: "Chuẩn bị nguyên liệu mỗi ngày là niềm vui của tôi.",
    aosDelay: "0",
  },
  {
    name: "Anh Dương Phú Mỹ",
    image: duongImg,
    description: "Từ lúc tôi kinh doanh bánh mì tôi đã dậy sớm hơn.",
    aosDelay: "300",
  },
  {
    name: "Anh Khang Hồ Chí Minh",
    image: khangImg,
    description:
      "Hiện tôi đang theo học trường đại học FPT, nhưng tôi đã ra ngoài bán bánh mì",
    aosDelay: "1000",
  },
];

const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-roboto-serif"
            >
              Đối tác của bánh mì thêm
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              Các đối tác quan trọng của chúng tôi
            </p>
          </div>

          {/* Nội dung testimonial */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300 rounded-lg"
              >
                <div className="grid place-items-center">
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="rounded-full w-20 h-20 object-cover"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
