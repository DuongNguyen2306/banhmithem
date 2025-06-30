"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { FaCheck, FaStar, FaCrown, FaPhone, FaEnvelope, FaChartLine, FaUsers, FaTrophy } from "react-icons/fa"
import AOS from "aos"
import "aos/dist/aos.css"
import emailjs from "emailjs-com"
import goiCoBan from "../../assets/10.jpg"
import goiNangCao from "../../assets/11.jpg"

const PackageDetails = () => {
  const { packageType } = useParams()
  const [formData, setFormData] = useState({
    title: "",
    fullName: "",
    phone: "",
    email: "",
    city: "",
    district: "",
    hasLocation: "",
    hasStaff: "",
    capital: "",
    franchiseFor: "",
  })

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
    AOS.refresh()
  }, [])

  const packages = [
    {
      name: "Gói Cơ Bản",
      price: "4 triệu",
      description: "Không có mặt tiền cửa hàng",
      features: [
        "Quyền sử dụng thương hiệu",
        "Xe đẩy rộng 80cm",
        "Kệ trưng bày 1m",
        "Thiết bị nấu ăn (không bao gồm máy nướng)",
        "Website quản lý quy trình & hỗ trợ",
        "Đồng phục (1 bộ)",
      ],
      note: "Lưu ý: Danh sách chi tiết dụng cụ sẽ được cung cấp trong file.",
      image: goiCoBan,
      path: "basic",
      stats: [
        { icon: <FaChartLine className="text-green-500" />, label: "Hoàn vốn", value: "2-3 tháng" },
        { icon: <FaTrophy className="text-yellow-500" />, label: "Doanh Thu", value: "8-12tr/tháng" },
        { icon: <FaUsers className="text-blue-500" />, label: "Phù hợp", value: "Người mới" },
      ],
      colors: {
        gradient: "from-yellow-500 to-orange-500",
        badge: "bg-yellow-100 text-yellow-800",
        accent: "text-yellow-600",
        border: "border-yellow-200",
      },
    },
    {
      name: "Gói Nâng Cao",
      price: "7 triệu",
      description: "Có mặt tiền cửa hàng (chi phí bổ sung có thể áp dụng nếu bạn muốn thêm trang trí cửa hàng)",
      features: [
        "Quyền sử dụng thương hiệu",
        "Xe đẩy rộng 1m",
        "Kệ menu trưng bày 1m²",
        "Bảng hiệu 1m x 1,25m",
        "Ô lớn (bao gồm máy nướng)",
        "Thiết bị nấu ăn (bao gồm máy nướng)",
        "Website quản lý quy trình & hỗ trợ",
        "Đồng phục (3 bộ, tùy chọn)",
      ],
      image: goiNangCao,
      path: "advanced",
      stats: [
        { icon: <FaChartLine className="text-green-500" />, label: "Hoàn vốn", value: "1-2 tháng" },
        { icon: <FaTrophy className="text-yellow-500" />, label: "Doanh Thu", value: "10-15tr/tháng" },
        { icon: <FaUsers className="text-purple-500" />, label: "Phù hợp", value: "Chuyên nghiệp" },
      ],
      colors: {
        gradient: "from-purple-500 via-yellow-500 to-orange-500",
        badge: "bg-gradient-to-r from-purple-100 to-yellow-100 text-purple-800",
        accent: "text-purple-600",
        border: "border-purple-200",
      },
    },
  ]

  const pkg = packages.find((p) => p.path === packageType)

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center p-8">
          <div className="text-6xl mb-4">😔</div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Gói không tồn tại</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Không tìm thấy thông tin gói bạn đang tìm kiếm.</p>
          <button className="bg-yellow-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-700 transition-colors shadow-lg">
            Quay lại trang chủ
          </button>
        </div>
      </div>
    )
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", { ...formData, package: pkg.name, price: pkg.price })

    // Gửi email thông báo
    emailjs
      .send(
        "service_vpxlbn4", // Service ID
        "template_w9b0ozl", // Template ID cho thông báo
        {
          title: formData.title,
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          district: formData.district,
          hasLocation: formData.hasLocation,
          hasStaff: formData.hasStaff,
          capital: formData.capital,
          franchiseFor: formData.franchiseFor,
          package: pkg.name,
          price: pkg.price,
        },
        "gTLx7aR5s8G42mdIG" // User ID
      )
      .then(
        (response) => {
          console.log("Notification email sent successfully:", response)

          // Gửi email xác nhận
          return emailjs.send(
            "service_vpxlbn4", // Service ID
            "template_keoog7y", // Template ID cho xác nhận
            {
              title: formData.title,
              fullName: formData.fullName,
              email: formData.email,
            },
            "gTLx7aR5s8G42mdIG" // User ID
          )
        },
        (error) => {
          console.error("Notification email error:", error)
          alert("Có lỗi xảy ra khi gửi email thông báo. Vui lòng thử lại!")
        }
      )
      .then(
        (response) => {
          console.log("Confirmation email sent successfully:", response)
          alert(`Đăng ký gói ${pkg.name} thành công! Vui lòng kiểm tra email ${formData.email} để xác nhận.`)
          setFormData({
            title: "",
            fullName: "",
            phone: "",
            email: "",
            city: "",
            district: "",
            hasLocation: "",
            hasStaff: "",
            capital: "",
            franchiseFor: "",
          })
        },
        (error) => {
          console.error("Confirmation email error:", error)
          alert("Có lỗi xảy ra khi gửi email xác nhận. Vui lòng thử lại!")
        }
      )
  }

  const isPremium = pkg.path === "advanced"

  return (
    <div
      className={`min-h-screen ${isPremium ? "bg-gradient-to-br from-purple-50 via-yellow-50 to-orange-50" : "bg-gradient-to-br from-yellow-50 to-orange-50"} dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800`}
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-20 pb-16">
        <div className={`absolute inset-0 bg-gradient-to-r ${pkg.colors.gradient}/10`}></div>
        <div className="container relative">
          {/* Header Badge */}
          <div className="text-center mb-12" data-aos="fade-up">
            <div
              className={`inline-flex items-center gap-2 ${pkg.colors.badge} px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg`}
            >
              {isPremium ? <FaCrown size={16} /> : <FaStar size={16} />}
              {isPremium ? "Gói cao cấp - Khuyến nghị" : "Gói phổ biến nhất"}
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Chi Tiết <span className={`${pkg.colors.accent}`}>{pkg.name}</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {isPremium
                ? "Giải pháp kinh doanh chuyên nghiệp với mặt bằng cố định và thiết bị cao cấp"
                : "Bắt đầu kinh doanh bánh mì với chi phí thấp và hiệu quả cao nhất"}
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16" data-aos="fade-up" data-aos-delay="200">
            {pkg.stats.map((stat, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${pkg.colors.border}`}
              >
                <div className="text-4xl mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container pb-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
          {/* Package Details */}
          <div data-aos="fade-right">
            <div
              className={`bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-2xl ${isPremium ? "border-2 border-purple-200 dark:border-purple-800" : "border-2 border-yellow-200 dark:border-yellow-800"}`}
            >
              {/* Package Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  {isPremium && <FaCrown className="text-purple-600 text-3xl" />}
                  <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{pkg.name}</h2>
                </div>
                <div className="text-right">
                  <div
                    className={`text-4xl font-bold ${isPremium ? "bg-gradient-to-r from-purple-600 to-yellow-600 bg-clip-text text-transparent" : pkg.colors.accent}`}
                  >
                    {pkg.price}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">VNĐ</div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">{pkg.description}</p>

              {/* Package Image */}
              <div className="relative mb-10 rounded-2xl overflow-hidden">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={`Hình minh họa ${pkg.name}`}
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* Features List */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {isPremium ? "Bao gồm trong gói cao cấp:" : "Bao gồm trong gói:"}
                </h3>
                {pkg.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:shadow-md ${
                      isPremium
                        ? "bg-gradient-to-r from-purple-50 to-yellow-50 dark:from-purple-900/20 dark:to-yellow-900/20 border border-purple-100 dark:border-purple-800"
                        : "bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-800"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-full ${isPremium ? "bg-purple-100 dark:bg-purple-900" : "bg-green-100 dark:bg-green-900"}`}
                    >
                      <FaCheck
                        className={`${isPremium ? "text-purple-600 dark:text-purple-400" : "text-green-600 dark:text-green-400"}`}
                        size={14}
                      />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Note */}
              {pkg.note && (
                <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/30 border-l-4 border-blue-500 rounded-r-xl">
                  <p className="text-blue-800 dark:text-blue-200 italic font-medium">{pkg.note}</p>
                </div>
              )}
            </div>
          </div>

          {/* Registration Form */}
          <div data-aos="fade-left">
            <div
              className={`bg-gradient-to-br ${pkg.colors.gradient} rounded-3xl p-10 shadow-2xl text-white sticky top-8`}
            >
              {/* Form Header */}
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  {isPremium && <FaCrown size={28} />}
                  <h2 className="text-3xl font-bold">{isPremium ? "Đăng ký gói cao cấp" : "Đăng ký nhượng quyền"}</h2>
                </div>
                <p className="text-white/90 text-lg">Điền thông tin để được tư vấn miễn phí ngay hôm nay</p>
              </div>

              {/* Form */}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Title */}
                  <div>
                    <label className="block text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                      Xưng hô
                    </label>
                    <select
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full p-4 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                    >
                      <option value="" className="text-gray-800">
                        Chọn xưng hô
                      </option>
                      <option value="Anh" className="text-gray-800">
                        Anh
                      </option>
                      <option value="Chị" className="text-gray-800">
                        Chị
                      </option>
                    </select>
                  </div>

                  {/* Full Name */}
                  <div>
                    <label className="block text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Nhập họ và tên đầy đủ"
                      className="w-full p-4 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Nhập số điện thoại"
                      className="w-full p-4 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-whitees font-semibold mb-3 text-sm uppercase tracking-wide">
                      Email nhận thông tin
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Nhập địa chỉ email"
                      className="w-full p-4 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                      Thành phố/Tỉnh
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Thành phố/Tỉnh"
                      className="w-full p-4 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                    />
                  </div>

                  {/* District */}
                  <div>
                    <label className="block text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                      Quận/Huyện
                    </label>
                    <input
                      type="text"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      placeholder="Quận/Huyện"
                      className="w-full p-4 bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                    />
                  </div>

                  {/* Has Location */}
                  <div>
                    <label className="block text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                      Đã có mặt bằng kinh doanh?
                    </label>
                    <select
                      name="hasLocation"
                      value={formData.hasLocation}
                      onChange={handleChange}
                      className="w-full p-4 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                    >
                      <option value="" className="text-gray-800">
                        Chọn
                      </option>
                      <option value="Đã có" className="text-gray-800">
                        Đã có
                      </option>
                      <option value="Chưa có" className="text-gray-800">
                        Chưa có
                      </option>
                    </select>
                  </div>

                  {/* Has Staff */}
                  <div>
                    <label className="block text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                      Đã có người bán hàng?
                    </label>
                    <select
                      name="hasStaff"
                      value={formData.hasStaff}
                      onChange={handleChange}
                      className="w-full p-4 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                    >
                      <option value="" className="text-gray-800">
                        Chọn
                      </option>
                      <option value="Đã có" className="text-gray-800">
                        Đã có
                      </option>
                      <option value="Chưa có" className="text-gray-800">
                        Chưa có
                      </option>
                    </select>
                  </div>

                  {/* Capital */}
                  <div>
                    <label className="block text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                      Chọn Gói
                    </label>
                    <select
                      name="capital"
                      value={formData.capital}
                      onChange={handleChange}
                      className="w-full p-4 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                    >
                      <option value="" className="text-gray-800">
                        Gói
                      </option>
                      <option value="Nhiều hơn 7,5 triệu" className="text-gray-800">
                        Gói cơ bản 4 triệu
                      </option>
                      <option value="" className="text-gray-800">
                        Gói nâng cao 7 triệu 
                      </option>
                    </select>
                  </div>

                  {/* Franchise For */}
                  <div>
                    <label className="block text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                      Nhượng quyền cho ai?
                    </label>
                    <select
                      name="franchiseFor"
                      value={formData.franchiseFor}
                      onChange={handleChange}
                      className="w-full p-4 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-300"
                    >
                      <option value="" className="text-gray-800">
                        Chọn
                      </option>
                      <option value="Bản thân" className="text-gray-800">
                        Bản thân
                      </option>
                      <option value="Người khác" className="text-gray-800">
                        Người khác
                      </option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full bg-white py-5 px-8 rounded-2xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 ${isPremium ? "text-purple-600" : "text-orange-600"}`}
                >
                  {isPremium ? "🚀 Đăng ký gói cao cấp ngay" : "✨ Đăng ký nhượng quyền ngay"}
                </button>
              </form>

              {/* Contact Info */}
              <div className="mt-10 pt-8 border-t border-white/20">
                <div className="text-center mb-6">
                  <p className="text-white/90 font-medium">Hoặc liên hệ trực tiếp với chúng tôi</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:0981051510"
                    className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaPhone size={18} />
                    0981051510
                  </a>
                  <a
                    href="mailto:contact@banhmithem.com"
                    className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <FaEnvelope size={18} />
                    {isPremium ? "Tư vấn cao cấp" : "Gửi email tư vấn"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackageDetails