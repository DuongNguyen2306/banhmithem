import React, { useState } from "react";
import { BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaEnvelope, FaClock, FaPhone } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import logo from "../../assets/logo.png";

export const Navlinks = [
  { id: 1, name: "HOME", link: "/#" },
  { id: 2, name: "Về bánh mì Thêm", link: "/#cars" },
  { id: 3, name: "Cửa hàng bánh mì Thêm", link: "/#about" },
  { id: 4, name: "Liên Hệ", link: "/#booking" },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <header className="relative z-10 shadow-md w-full duration-300">
      {/* Thanh thông tin trên cùng - Ẩn trên mobile */}
      <div 
  className="top-bar text-white py-2 px-8 hidden md:flex justify-between items-center"
  style={{ backgroundColor: "#CC9900" }}
>


        <div className="logo">
        <img src={logo} alt="logo" className="w-10 h-10 object-cover" />
        </div>
        <div className="contact-info flex gap-6 text-sm">
          <span className="flex items-center gap-2"><FaEnvelope /> LIÊN HỆ</span>
          <span className="flex items-center gap-2"><FaClock /> 08:00 - 17:00</span>
          <span className="flex items-center gap-2"><FaPhone /> 0981051510</span>
        </div>
      </div>

      {/* Thanh menu chính */}
      <div className="navbar bg-white py-3 px-8">
        <div className="container flex justify-between items-center">
          {/* Mobile view */}
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun onClick={() => setTheme("light")} className="text-2xl text-black" />
            ) : (
              <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl text-black" />
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
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-2">
                  <a href={link} className="text-lg font-medium text-black hover:text-gray-700 transition-colors duration-500">
                    {name}
                  </a>
                </li>
              ))}
              {/* DarkMode feature */}
              {/* {theme === "dark" ? (
                <BiSolidSun onClick={() => setTheme("light")} className="text-2xl text-black cursor-pointer" />
              ) : (
                <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl text-black cursor-pointer" />
              )} */}
            </ul>
          </nav>
        </div>
      </div>

      <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />

    </header>
  );
};

export default Navbar;
