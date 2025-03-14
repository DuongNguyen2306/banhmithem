import React from "react";
import bannerxe from "../../assets/banner-xebanhmi.jpg"

const About = () => {
  return (
    <div className="dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={bannerxe}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
            <h1
  data-aos="fade-up"
  className="text-3xl sm:text-4xl font-bold font-roboto-serif"
>
  Câu chuyện về bánh mì thêm
</h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                Sáng sớm, tụi em mở tiệm bánh như mọi ngày. Hương bánh mì nóng giòn lan tỏa khắp con phố nhỏ. Một cậu bé nghèo đứng nhìn quầy bánh với ánh mắt thèm thuồng.

                tụi em mỉm cười, đưa cho cậu một ổ bánh và nói:
                “Ăn đi  bánh mì không chỉ để no bụng, mà còn giúp người bước tiếp!”

                Nhiều năm sau, cậu bé ấy thành đạt, nhưng mỗi lần cầm trên tay ổ bánh mì, cậu vẫn nhớ về bác chúng tôi – người đã cho cậu không chỉ một bữa sáng, mà còn cả hy vọng. 🥖✨
              </p>
              {/* <p data-aos="fade-up">
               
              </p> */}
              <button data-aos="fade-up" className="button-outline">
                Đăng ký nhượng quyền
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
