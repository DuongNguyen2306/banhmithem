"use client"
import { useEffect } from "react"
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaHeart,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa"
import AOS from "aos"
import "aos/dist/aos.css"
import huyImg from "../../assets/huy.jpg"
import duongImg from "../../assets/duong.jpg"
import khangImg from "../../assets/khang.jpg"
import logoImage from "../../assets/logoto.png"

const OurStory = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
    AOS.refresh()
  }, [])

  const teamMembers = [
    {
      name: "Anh Huy",
      location: "Vũng Tàu",
      story: "Chuẩn bị nguyên liệu mỗi ngày là niềm vui của tôi.",
      image: huyImg,
      role: "Đối tác kinh doanh",
      experience: "2 năm",
    },
    {
      name: "Anh Dương",
      location: "Phú Mỹ",
      story: "Từ lúc tôi kinh doanh bánh mì tôi đã dậy sớm hơn.",
      image: duongImg,
      role: "Chủ cửa hàng",
      experience: "3 năm",
    },
    {
      name: "Anh Khang",
      location: "Hồ Chí Minh",
      story: "Hiện tôi đang theo học trường đại học FPT, nhưng tôi đã ra ngoài bán bánh mì",
      image: khangImg,
      role: "Sinh viên kinh doanh",
      experience: "1 năm",
    },
  ]

  const brandStory = [
    {
      title: "Khởi nguồn từ tình yêu",
      content:
        "Thừa hưởng sự hào sảng của nét văn hoá Sài Gòn, những bữa ăn của con người nơi đây thêm phần trọn vẹn khi có chén cơm, dĩa rau trụng, chén nước mắm, ly trà đá... thêm miễn phí.",
      icon: <FaHeart className="text-red-500" size={40} />,
    },
    {
      title: "Tinh thần 'Thêm'",
      content:
        "Thêm một chút, chẳng tốn gì nhiều, nhưng cả người bán lẫn người mua đều thêm nhiều chút niềm vui. Bữa ăn của người lao động thêm no, mấy đứa học trò thêm chút năng lượng.",
      icon: <FaStar className="text-yellow-500" size={40} />,
    },
    {
      title: "Sứ mệnh của chúng tôi",
      content:
        "Ở Thêm, ai cũng được chả thêm mà hổng phải trả thêm. Sài Gòn mà, ai cũng ráng, cùng Thêm ráng thêm chút nữa nghen!",
      icon: <FaQuoteLeft className="text-blue-500" size={40} />,
    },
  ]

  return (
    <div className="min-h-screen" style={{ background: "#ebdbb8" }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden text-white py-20" style={{ background: "#ebdbb8" }}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container relative z-10">
          <div className="text-center" data-aos="fade-up">
            {/* Logo Section */}
            <div className="mb-8" data-aos="zoom-in" data-aos-delay="200">
              <img
                src={logoImage || "/placeholder.svg"}
                alt="Bánh Mì Thêm Logo"
                className="w-48 h-32 sm:w-64 sm:h-40 lg:w-80 lg:h-48 mx-auto mb-6 object-contain shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-300 rounded-2xl bg-white/10 backdrop-blur-sm p-4"
              />
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-gray-900">
              Câu Chuyện Của <span style={{ color: "#9e1c20" }}>Thêm</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-gray-800">
              Hành trình từ những chiếc bánh mì đầu tiên đến thương hiệu được yêu thích
            </p>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="py-12 bg-white border-b-2 border-gray-100">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Kết Nối Với Chúng Tôi</h3>
            <div className="flex justify-center gap-8">
              <a
                href="https://www.facebook.com/BanhMiThemSG"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="bg-blue-600 hover:bg-blue-700 p-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 group-hover:scale-110">
                  <FaFacebookF size={28} className="text-white" />
                </div>
                <span className="mt-3 text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                  Facebook
                </span>
              </a>

              <a
                href="https://www.instagram.com/banhmithemsaigon"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 group-hover:scale-110">
                  <FaInstagram size={28} className="text-white" />
                </div>
                <span className="mt-3 text-gray-700 font-medium group-hover:text-pink-600 transition-colors">
                  Instagram
                </span>
              </a>

              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  alert("TikTok đang cập nhật!")
                }}
                className="group flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="bg-black hover:bg-gray-800 p-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-2 group-hover:scale-110">
                  <FaTiktok size={28} className="text-white" />
                </div>
                <span className="mt-3 text-gray-700 font-medium group-hover:text-black transition-colors">TikTok</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Story Section */}
      <div className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Câu Chuyện Thương Hiệu</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Từ những giá trị văn hóa Sài Gòn đến thương hiệu bánh mì được yêu thích
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandStory.map((story, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex justify-center mb-6">{story.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{story.title}</h3>
                <p className="text-gray-700 leading-relaxed text-center">{story.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Khách hàng Của Chúng Tôi</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những người bạn đồng hành cùng Bánh Mì Thêm trên hành trình phát triển
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-yellow-300">{member.location}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                      {member.role}
                    </span>
                    <span className="text-gray-500 text-sm">{member.experience}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaQuoteLeft className="text-yellow-500 mt-1 flex-shrink-0" size={16} />
                    <p className="text-gray-700 italic leading-relaxed">"{member.story}"</p>
                  </div>
                  <div className="flex justify-center mt-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} size={16} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-20 text-white" style={{ background: "#ebdbb8" }}>
        <div className="container">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Liên Hệ Với Chúng Tôi</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto text-gray-800">
              Hãy cùng chúng tôi viết tiếp câu chuyện thành công của bạn
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              data-aos="fade-up"
              data-aos-delay="0"
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaPhone size={24} className="text-gray-800" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Điện Thoại</h3>
              <a
                href="https://www.facebook.com/BanhMiThemSG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                0379151466
              </a>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaEnvelope size={24} className="text-gray-800" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Email</h3>
              <a
                href="https://www.facebook.com/BanhMiThemSG"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                contact@banhmithem.com
              </a>
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock size={24} className="text-gray-800" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Giờ Làm Việc</h3>
              <p className="text-gray-700">08:00 - 17:00</p>
              <p className="text-gray-700">Thứ 2 - Chủ Nhật</p>
            </div>
            <a
              href="https://www.google.com/maps?q=B%C3%A1nh+m%C3%AC+Th%C3%AAm,+238+%C4%90.+Nguy%E1%BB%85n+V%C4%83n+Kh%E1%BB%91i,+Ph%C6%B0%E1%BB%9Dng+8,+G%C3%B2+V%E1%BA%A5p,+H%E1%BB%93+Ch%C3%AD+Minh&ftid=0x3175290044cc40cb:0xde547445c71ca263&entry=gps&lucs=,94275304,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94203019,47084304&g_ep=CAISEjI1LjI1LjMuNzcyMTMyNjA2MBgAINeCAypaLDk0Mjc1MzA0LDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjAzMDE5LDQ3MDg0MzA0QgJWTg%3D%3D&skid=8c958203-5c47-4920-a4dd-ed5c389717f4&g_st=ipc"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="600"
              className="block text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkerAlt size={24} className="text-gray-800" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Địa Chỉ</h3>
              <p className="text-gray-700 hover:text-gray-900 transition-colors">238 Đ. Nguyễn Văn Khối</p>
              <p className="text-gray-700 hover:text-gray-900 transition-colors">Phường 8, Gò Vấp</p>
              <p className="text-gray-700 hover:text-gray-900 transition-colors">TP. Hồ Chí Minh</p>
              <p className="text-sm text-gray-600 mt-2 italic">📍 Nhấn để xem bản đồ</p>
            </a>
          </div>
          {/* CTA Section */}
          <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="800">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Sẵn sàng bắt đầu hành trình kinh doanh?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.facebook.com/BanhMiThemSG"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                💬 Nhắn tin Facebook
              </a>
              <a
                href="tel:0379151466"
                className="bg-white/20 backdrop-blur-sm text-gray-900 border-2 border-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                📞 Gọi ngay
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto" data-aos="fade-up">
            <FaQuoteLeft className="text-yellow-500 mx-auto mb-6" size={48} />
            <blockquote className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 leading-relaxed">
              "Sài Gòn mà, ai cũng ráng, cùng Thêm ráng thêm chút nữa nghen!"
            </blockquote>
            <cite className="text-xl text-gray-600 font-medium">- Tinh thần Bánh Mì Thêm -</cite>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurStory
