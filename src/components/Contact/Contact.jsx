import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  console.log("Contact component is rendering"); // Kiểm tra component render

  const [formData, setFormData] = useState({
    xungHo: "",
    hoTen: "",
    soDienThoai: "",
    email: "",
    diaChiThanhPho: "",
    diaChiQuanHuyen: "",
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
    console.log("handleSubmit triggered with form data:", formData); // Kiểm tra sự kiện submit

    // Kiểm tra trước khi gửi EmailJS
    if (!formData.xungHo || !formData.hoTen || !formData.soDienThoai || !formData.email) {
      console.log("Missing required fields");
      setStatus("Vui lòng điền đầy đủ thông tin bắt buộc!");
      return;
    }

    console.log("Attempting to send email with EmailJS..."); // Log trước khi gửi

    // Gửi email thông báo
    emailjs
      .send(
        "service_vpxlbn4", // Service ID
        "template_w9b0ozl", // Template ID cho thông báo
        {
          xungHo: formData.xungHo,
          hoTen: formData.hoTen,
          soDienThoai: formData.soDienThoai,
          email: formData.email,
          diaChiThanhPho: formData.diaChiThanhPho,
          diaChiQuanHuyen: formData.diaChiQuanHuyen,
          coMatBang: formData.coMatBang,
          coNguoiBan: formData.coNguoiBan,
          nguonVon: formData.nguonVon,
          nhuongQuyenChoAi: formData.nhuongQuyenChoAi,
        },
        "gTLx7aR5s8G42mdIG" // User ID
      )
      .then(
        (response) => {
          console.log("Notification email sent successfully:", response);

          // Gửi email xác nhận
          return emailjs.send(
            "service_vpxlbn4", // Service ID
            "template_keoog7y", // Template ID cho xác nhận
            {
              xungHo: formData.xungHo,
              hoTen: formData.hoTen,
              email: formData.email,
            },
            "gTLx7aR5s8G42mdIG" // User ID
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
          setStatus("Email đã được gửi thành công! Vui lòng kiểm tra email để xác nhận.");
          setFormData({
            xungHo: "",
            hoTen: "",
            soDienThoai: "",
            email: "",
            diaChiThanhPho: "",
            diaChiQuanHuyen: "",
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
    <div className="bg-yellow-500 dark:text-white py-14">
      <div className="container flex flex-col md:flex-row items-center gap-8">
        {/* Left Side - Image and Information */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-orange-700 uppercase">
            Tư vấn nhượng quyền <br /> Bánh mì Thêm
          </h1>
          <p className="text-lg font-semibold text-orange-800 mt-2">
            Chỉ từ 5,5 triệu để bắt đầu
          </p>
          <ul className="text-gray-900 mt-4 space-y-2">
            <li>✔ Thời gian hoàn vốn 2 - 4 tháng</li>
            <li>✔ Lợi nhuận lên đến 15 triệu/tháng/kiosk</li>
          </ul>
        </div>

        {/* Right Side - Form */}
        <div id="register-form" className="md:w-1/2 bg-yellow-600 p-6 rounded-lg shadow-lg w-full">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-900">Xưng hô</label>
              <select
                name="xungHo"
                value={formData.xungHo}
                onChange={handleChange}
                className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded"
                required
              >
                <option value="">Chọn xưng hô</option>
                <option value="Anh">Anh</option>
                <option value="Chị">Chị</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-900">Họ và tên</label>
              <input
                type="text"
                name="hoTen"
                value={formData.hoTen}
                onChange={handleChange}
                placeholder="Nhập để điền"
                className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-900">Số điện thoại</label>
              <input
                type="text"
                name="soDienThoai"
                value={formData.soDienThoai}
                onChange={handleChange}
                placeholder="Nhập để điền"
                className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-900">Email nhận thông tin</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Nhập để điền"
                className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-900">Địa chỉ</label>
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
              <input
                type="text"
                name="diaChiQuanHuyen"
                value={formData.diaChiQuanHuyen}
                onChange={handleChange}
                placeholder="Quận / Huyện"
                className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-900">Bạn đã có mặt bằng kinh doanh chưa?</label>
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
              <label className="block text-gray-900">Bạn đã có người bán hàng chưa?</label>
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
              <label className="block text-gray-900">Bạn có nguồn vốn là bao nhiêu?</label>
              <select
                name="nguonVon"
                value={formData.nguonVon}
                onChange={handleChange}
                className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded"
              >
                <option value="">Chọn</option>
                <option value="Nhiều hơn 7,5 triệu">Nhiều hơn 7,5 triệu</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-900">Bạn dự định nhượng quyền cho ai?</label>
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
              {status && <p className="mt-4 text-white">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;