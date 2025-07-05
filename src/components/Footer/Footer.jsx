
"use client"
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, FaTiktok } from "react-icons/fa"
import logoImage from '../../assets/logoto.png'

const Footer = () => {
  return (
    <div className="mt-14" style={{ backgroundColor: '#ebdbb8', fontFamily: 'Bahnschrift, sans-serif' }}>
      <section className="container">
        <div className="flex flex-col md:flex-row justify-between items-start py-5">
          {/* company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3" style={{ color: '#9e1c20' }}>
              Thêm
            </h1>
            <p className="text-sm">Bánh mì được thêm chả, để bạn ráng thêm xíu nghen!</p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <a
                href="https://www.google.com/maps?q=B%C3%A1nh+m%C3%AC+Th%C3%AAm,+238+%C4%90.+Nguy%E1%BB%85n+V%C4%83n+Kh%E1%BB%91i,+Ph%C6%B0%E1%BB%9Dng+8,+G%C3%B2+V%E1%BA%A5p,+H%E1%BB%93+Ch%C3%AD+Minh&ftid=0x3175290044cc40cb:0xde547445c71ca263&entry=gps&lucs=,94275304,94224825,94227247,94227248,94231188,47071704,47069508,94218641,94203019,47084304&g_ep=CAISEjI1LjI1LjMuNzcyMTMyNjA2MBgAINeCAypaLDk0Mjc1MzA0LDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDk0MjMxMTg4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjAzMDE5LDQ3MDg0MzA0QgJWTg%3D%3D&skid=8c958203-5c47-4920-a4dd-ed5c389717f4&g_st=ipc"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-600 transition-colors"
              >
                238 Nguyễn Văn Khối, Gò Vấp, HCM
              </a>
            </div>
            <a
              href="https://www.facebook.com/BanhMiThemSG"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 mt-3 hover:text-yellow-600 transition-colors"
            >
              <FaMobileAlt />
              <p>+84 379151466</p>
            </a>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/banhmithemsaigon"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <FaInstagram className="text-3xl hover:text-pink-500 duration-300" />
              </a>
              <a
                href="https://www.facebook.com/BanhMiThemSG"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
              >
                <FaFacebook className="text-3xl hover:text-blue-500 duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/company/banhmithem"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin className="text-3xl hover:text-blue-600 duration-300" />
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  alert("TikTok đang cập nhật!")
                }}
                className="text-3xl hover:text-gray-600 duration-300"
                title="TikTok"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
          {/* Logo */}
          <div className="py-8 px-4 flex justify-end">
            <img
              src={logoImage}
              alt="Logo Thêm"
              className="w-64 h-64 sm:w-80 sm:h-80 object-contain rounded-none"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
