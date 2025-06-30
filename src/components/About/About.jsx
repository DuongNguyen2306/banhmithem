import React, { useState } from "react";
import bannerxe from "../../assets/banner-xebanhmi.jpg";

const About = () => {
  const [showBranches, setShowBranches] = useState(false);

  const branches = [
    { name: "Chi nhánh Gò Vấp", address: "238 Nguyễn Văn Khối, Gò Vấp, Việt Nam" }
    
  ];

  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          {/* Hình ảnh */}
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={bannerxe}
              alt="Xe bánh mì Thêm truyền thống Sài Gòn"
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>

          {/* Nội dung */}
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-roboto-serif"
              >
                Câu chuyện về Bánh mì Thêm
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide whitespace-pre-line">
                Thừa hưởng sự hào sảng của nét văn hoá Sài Gòn, những bữa ăn của con người nơi đây thêm phần trọn vẹn khi có chén cơm, dĩa rau trụng, chén nước mắm, ly trà đá... thêm miễn phí.

                Thêm một chút, chẳng tốn gì nhiều, nhưng cả người bán lẫn người mua đều thêm nhiều chút niềm vui.

                Bữa ăn của người lao động thêm no, mấy đứa học trò thêm chút năng lượng để học cho hết buổi sáng, anh văn phòng có sức chạy hết deadline cho khách,... tinh thần đó đã truyền cảm hứng để thổi hồn vào một thương hiệu mới - Bánh mì Thêm - nơi lấy tôn chỉ phát triển là sự đủ đầy của thực khách và nét văn hoá dễ thương của người Sài Gòn.

                Ở Thêm, ai cũng được chả thêm mà hổng phải trả thêm.

                Sài Gòn mà, ai cũng ráng, cùng Thêm ráng thêm chút nữa nghen!
              </p>
              <div className="flex gap-4">
                <a href="#register-form" data-aos="fade-up" className="button-outline">
                  Đăng ký nhượng quyền
                </a>
                <button
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="button-outline"
                  onClick={() => setShowBranches(!showBranches)}
                  aria-label="Xem danh sách chi nhánh Bánh mì Thêm"
                >
                  Xem chi nhánh
                </button>
              </div>
              {showBranches && (
                <div
                  data-aos="fade-up"
                  className="mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-2">Danh sách chi nhánh</h3>
                  <ul className="space-y-2">
                    {branches.map((branch) => (
                      <li key={branch.name} className="text-sm">
                        <strong>{branch.name}</strong>: {branch.address}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;