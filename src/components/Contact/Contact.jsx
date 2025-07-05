import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  console.log("Contact component is rendering");

  const [formData, setFormData] = useState({
    xungHo: "",
    hoTen: "",
    soDienThoai: "",
    email: "",
    diaChiThanhPho: "",
    coMatBang: "",
    coNguoiBan: "",
    nguonVon: "",
    nhuongQuyenChoAi: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit triggered with form data:", formData);

    if (!formData.email) {
      console.log("Missing required field: Zalo");
      setStatus("Vui lòng điền Zalo nhận thông tin!");
      return;
    }

    console.log("Attempting to send email with EmailJS...");

    emailjs
      .send(
        "service_vpxlbn4",
        "template_w9b0ozl",
        {
          xungHo: formData.xungHo,
          hoTen: formData.hoTen,
          soDienThoai: formData.soDienThoai,
          email: formData.email,
          diaChiThanhPho: formData.diaChiThanhPho,
          coMatBang: formData.coMatBang,
          coNguoiBan: formData.coNguoiBan,
          nguonVon: formData.nguonVon,
          nhuongQuyenChoAi: formData.nhuongQuyenChoAi,
        },
        "gTLx7aR5s8G42mdIG"
      )
      .then(
        (response) => {
          console.log("Notification email sent successfully:", response);
          return emailjs.send(
            "service_vpxlbn4",
            "template_keoog7y",
            {
              xungHo: formData.xungHo,
              hoTen: formData.hoTen,
              email: formData.email,
            },
            "gTLx7aR5s8G42mdIG"
          );
        },
        (error) => {
          console.error("Notification email error:", error);
          setStatus("Có lỗi xảy ra khi gửi email thông báo. Vui lòng thử lại!");
        }
      )
      .then(
        (response) => {
          console.log("Confirmation email sent successfully:", response);
          setStatus("Thông tin đã được gửi thành công! Vui lòng kiểm tra Zalo để xác nhận.");
          setFormData({
            xungHo: "",
            hoTen: "",
            soDienThoai: "",
            email: "",
            diaChiThanhPho: "",
            coMatBang: "",
            coNguoiBan: "",
            nguonVon: "",
            nhuongQuyenChoAi: "",
          });
        },
        (error) => {
          console.error("Confirmation email error:", error);
          setStatus("Có lỗi xảy ra khi gửi email xác nhận. Vui lòng thử lại!");
        }
      );
  };

  return (
    <div className="bg-[#ebdbb8] dark:text-[#9e1c20] py-14 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#9e1c20] uppercase">
            Tư vấn nhượng quyền <br /> Bánh mì Thêm
          </h1>
          <p className="text-lg font-semibold text-[#9e1c20] mt-2">
            Chỉ từ 5,5 triệu để bắt đầu
          </p>
          <ul className="text-black mt-4 space-y-2">
            <li>✔ Thời gian hoàn vốn 2 - 4 tháng</li>
            <li>✔ Lợi nhuận lên đến 15 triệu/tháng/kiosk</li>
          </ul>
        </div>

        <div id="register-form" className="md:w-1/2 bg-[#f5e8c7] p-6 rounded-lg shadow-lg w-full mt-6 md:mt-0">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#9e1c20]">Xưng hô</label>
              <select
                name="xungHo"
                value={formData.xungHo}
                onChange={handleChange}
                className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded"
              >
                <option value="">Chọn xưng hô</option>
                <option value="Anh">Anh</option>
                <option value="Chị">Chị</option>
              </select>
            </div>
            <div>
              <label className="block text-[#9e1c20]">Họ và tên</label>
              <input
                type="text"
                name="hoTen"
                value={formData.hoTen}
                onChange={handleChange}
                placeholder="Nhập để điền"
                className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded"
              />
            </div>
            <div>
              <label className="block text-[#9e1c20]">Số điện thoại</label>
              <input
                type="text"
                name="soDienThoai"
                value={formData.soDienThoai}
                onChange={handleChange}
                placeholder="Nhập để điền"
                className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded"
              />
            </div>
            <div>
              <label className="block text-[#9e1c20]">Zalo nhận thông tin</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Nhập để điền"
                className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-[#9e1c20]">Địa chỉ</label>
              <input
                type="text"
                name="diaChiThanhPho"
                value={formData.diaChiThanhPho}
                onChange={handleChange}
                placeholder="Thành phố/Tỉnh"
                className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded"
              />
            </div>
            <div>
              <label className="block text-[#9e1c20]">Bạn đã có mặt bằng kinh doanh chưa?</label>
              <select
                name="coMatBang"
                value={formData.coMatBang}
                onChange={handleChange}
                className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded"
              >
                <option value="">Chọn</option>
                <option value="Đã có">Đã có</option>
                <option value="Chưa có">Chưa có</option>
              </select>
            </div>
            <div>
              <label className="block text-[#9e1c20]">Bạn đã có người bán hàng chưa?</label>
              <select
                name="coNguoiBan"
                value={formData.coNguoiBan}
                onChange={handleChange}
                className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded"
              >
                <option value="">Chọn</option>
                <option value="Đã có">Đã có</option>
                <option value="Chưa có">Chưa có</option>
              </select>
            </div>
            <div>
              <label className="block text-[#9e1c20]">Bạn có nguồn vốn là bao nhiêu?</label>
              <select
                name="nguonVon"
                value={formData.nguonVon}
                onChange={handleChange}
                className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded"
              >
                <option value="">Chọn</option>
                <option value="Nhiều hơn 7,5 triệu">Nhiều hơn 7,5 triệu</option>
                <option value="Dưới 7 triệu">Dưới 7 triệu</option>
              </select>
            </div>
            <div>
              <label className="block text-[#9e1c20]">Bạn dự định nhượng quyền cho ai?</label>
              <select
                name="nhuongQuyenChoAi"
                value={formData.nhuongQuyenChoAi}
                onChange={handleChange}
                className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded"
              >
                <option value="">Chọn</option>
                <option value="Bản thân">Bản thân</option>
                <option value="Người khác">Người khác</option>
              </select>
            </div>
            <div className="mt-6 text-center col-span-2">
              <button
                type="submit"
                className="bg-orange-700 text-white py-2 px-6 rounded-lg text-lg font-bold hover:bg-orange-800"
              >
                Đăng ký
              </button>
              {status && <p className="mt-4 text-[#9e1c20]">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;