"use client"
import { useState } from "react"
import { Link } from "react-router-dom"
import { BiSolidSun, BiSolidMoon } from "react-icons/bi"
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi"
import { FaEnvelope, FaClock, FaPhone, FaFacebookF, FaInstagram, FaTiktok, FaChevronDown } from "react-icons/fa"
import ResponsiveMenu from "./ResponsiveMenu"

export const Navlinks = [
  { id: 1, name: "HOME", link: "/" },
  { id: 2, name: "Về bánh mì Thêm", link: "/#about" },
  { id: 3, name: "Cửa hàng bánh mì Thêm", link: "" },
  {
    id: 4,
    name: "Các gói nhượng quyền",
    link: "#",
    dropdown: [
      { name: "Gói cơ bản", link: "/package-details/basic" },
      { name: "Gói nâng cao", link: "/package-details/advanced" },
    ],
  },
  { id: 5, name: "Liên Hệ", link: "/our-story" },
]

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleMenu = () => setShowMenu(!showMenu)

  const handleDropdownToggle = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id)
  }

  const handleMouseEnter = (id) => {
    setActiveDropdown(id)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <header className="relative z-10 shadow-md w-full duration-300">
      {/* Thanh thông tin trên cùng - Ẩn trên mobile */}
      <div
        className="top-bar text-white py-2 px-8 hidden md:flex justify-between items-center"
        style={{ backgroundColor: "#ebdbb8" }}
      >
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" alt="Bánh Mì Thêm Logo" className="w-10 h-10 object-contain" />
          </Link>
        </div>
        <div
          className="contact-info flex gap-6 text-sm items-center"
          style={{ color: "#9e1c20", fontFamily: "'Bahnschrift', Arial, sans-serif" }}
        >
          <Link
            to="/our-story"
            className="flex items-center gap-2 hover:text-yellow-200 transition-colors"
            style={{ fontFamily: "'Bahnschrift', Arial, sans-serif" }}
          >
            <FaEnvelope /> LIÊN HỆ
          </Link>
          <span className="flex items-center gap-2" style={{ fontFamily: "'Bahnschrift', Arial, sans-serif" }}>
            <FaClock /> 08:00 - 17:00
          </span>
          <Link
            to="/our-story"
            className="flex items-center gap-2 hover:text-yellow-200 transition-colors"
            style={{ fontFamily: "'Bahnschrift', Arial, sans-serif" }}
          >
            <FaPhone /> 0379151466
          </Link>
          {/* Social Media Icons */}
          <div className="flex gap-3 ml-4">
            <a
              href="https://www.facebook.com/BanhMiThemSG"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-200 transition-colors"
              title="Facebook"
              style={{ color: "#9e1c20" }}
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://www.instagram.com/banhmithemsaigon"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-200 transition-colors"
              title="Instagram"
              style={{ color: "#9e1c20" }}
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                alert("TikTok đang cập nhật!")
              }}
              className="hover:text-yellow-200 transition-colors"
              title="TikTok"
              style={{ color: "#9e1c20" }}
            >
              <FaTiktok size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Thanh menu chính */}
      <div className="navbar bg-white py-3 px-8">
        <div className="container flex justify-between items-center">
          {/* Mobile view */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Logo cho mobile */}
            <Link to="/">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CjIlDq4C1dluhSm2w4FbPFMaa24WFS.png"
                alt="Bánh Mì Thêm Logo"
                className="w-8 h-8 object-contain mr-2 cursor-pointer"
              />
            </Link>
            {theme === "dark" ? (
              <BiSolidSun onClick={() => setTheme("light")} className="text-2xl text-black cursor-pointer" />
            ) : (
              <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl text-black cursor-pointer" />
            )}
            {showMenu ? (
              <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer text-black" size={30} />
            ) : (
              <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer text-black" size={30} />
            )}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link, dropdown }) => (
                <li
                  key={id}
                  className="py-2 relative"
                  onMouseEnter={() => dropdown && handleMouseEnter(id)}
                  onMouseLeave={() => dropdown && handleMouseLeave()}
                >
                  {dropdown ? (
                    // Dropdown menu item
                    <div className="relative">
                      <button
                        className="text-lg font-medium hover:text-gray-700 transition-colors duration-500 flex items-center gap-1"
                        style={{ color: "#9e1c20", fontFamily: "'Bahnschrift', Arial, sans-serif" }}
                        onClick={() => handleDropdownToggle(id)}
                      >
                        {name}
                        <FaChevronDown
                          className={`text-sm transition-transform duration-300 ${
                            activeDropdown === id ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {activeDropdown === id && (
                        <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                          {dropdown.map((item, index) => (
                            <Link
                              key={index}
                              to={item.link}
                              className="block px-4 py-3 text-sm font-medium hover:bg-gray-50 transition-colors duration-200"
                              style={{
                                color: "#9e1c20",
                                fontFamily: "'Bahnschrift', Arial, sans-serif",
                              }}
                              onClick={() => setActiveDropdown(null)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : // Regular menu item
                  link.startsWith("/#") ? (
                    <a
                      href={link}
                      className="text-lg font-medium hover:text-gray-700 transition-colors duration-500"
                      style={{ color: "#9e1c20", fontFamily: "'Bahnschrift', Arial, sans-serif" }}
                    >
                      {name}
                    </a>
                  ) : (
                    <Link
                      to={link}
                      className="text-lg font-medium hover:text-gray-700 transition-colors duration-500"
                      style={{ color: "#9e1c20", fontFamily: "'Bahnschrift', Arial, sans-serif" }}
                    >
                      {name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </header>
  )
}

export default Navbar
