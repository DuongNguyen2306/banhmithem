import React from "react";
import xanh from "../../assets/xanh.png";
import red from "../../assets/red.png";
import vang from "../../assets/vang.png";

const carList = [
  {
    name: "Bánh mì thêm (Xanh nước)",
    price: "2,300,000 VND",
    image: xanh,
    aosDelay: "0",
  },
  {
    name: "Bánh mì thêm (Đỏ)",
    price: "2,300,000 VND",
    image: red,
    aosDelay: "500",
  },
  {
    name: "Bánh mì thêm (Vàng)",
    price: "2,300,000 VND",
    image: vang,
    aosDelay: "1000",
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
          Mẫu xe bánh mì
        </h1>
        <p data-aos="fade-up" aos-delay="400" className="text-sm pb-10">
          Nhiều mẫu mã theo sở thích.
        </p>
        {/* Car listing */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((data) => (
              <div
                key={data.name}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group"
              >
                <div className="w-full h-[120px]">
                  <img
                    src={data.image}
                    alt={data.name}
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-primary font-semibold">{data.name}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>{data.price}</p>
                    <a href="#" className="text-primary hover:underline">Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End of car listing */}
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
