import React from "react";

const Contact = () => {
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
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-900">Xưng hô</label>
              <select className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded">
                <option value="">Chọn xưng hô</option>
                <option value="Anh">Anh</option>
                <option value="Chị">Chị</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-900">Họ và tên</label>
              <input
                type="text"
                placeholder="Nhập để điền"
                className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-900">Số điện thoại</label>
              <input
                type="text"
                placeholder="Nhập để điền"
                className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-900">Email nhận thông tin</label>
              <input
                type="email"
                placeholder="Nhập để điền"
                className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-900">Địa chỉ</label>
              <input
                type="text"
                placeholder="Thành phố/Tỉnh"
                className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Quận / Huyện"
                className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded"
              />
            </div>
            <div>
              <label className="block text-gray-900">Bạn đã có mặt bằng kinh doanh chưa?</label>
              <select className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded">
                <option value="">Chọn</option>
                <option value="Đã có">Đã có</option>
                <option value="Chưa có">Chưa có</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-900">Bạn đã có người bán hàng chưa?</label>
              <select className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded">
                <option value="">Chọn</option>
                <option value="Đã có">Đã có</option>
                <option value="Chưa có">Chưa có</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-900">Bạn có nguồn vốn là bao nhiêu?</label>
              <select className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded">
                <option value="">Chọn</option>
                <option value="Nhiều hơn 7,5 triệu">Nhiều hơn 7,5 triệu</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-900">Bạn dự định nhượng quyền cho ai?</label>
              <select className="w-full p-2 bg-yellow-400 text-black border border-gray-700 rounded">
                <option value="">Chọn</option>
                <option value="Bản thân">Bản thân</option>
                <option value="Người khác">Người khác</option>
              </select>
            </div>
          </form>
          <div className="mt-6 text-center">
            <button className="bg-orange-700 text-white py-2 px-6 rounded-lg text-lg font-bold hover:bg-orange-800">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;