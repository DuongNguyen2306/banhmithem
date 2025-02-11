import React from "react";
import { FaUserCircle, FaEnvelope, FaClock, FaPhone } from "react-icons/fa";
import { Navlinks } from "./Navbar";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      {/* Lớp phủ nền */}
      {showMenu && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"
          onClick={closeMenu}
        ></div>
      )}

      {/* Menu chính */}
      <div
        className={`${
          showMenu ? "left-0" : "-left-[100%]"
        } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between 
          bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black 
          transition-all duration-300 md:hidden rounded-r-xl shadow-md`}
      >
        {/* Thông tin User */}
        <div className="card">
          <div className="flex items-center justify-start gap-3">
            <FaUserCircle size={50} />
            <div>
              <h1>Hello User</h1>
              <h1 className="text-sm text-slate-500">Premium user</h1>
            </div>
          </div>
        </div>

        {/* Điều hướng menu */}
        <nav className="mt-8">
          <ul className="space-y-4 text-xl">
            {Navlinks.map((data) => (
              <li key={data.id}>
                <a href={data.link} className="inline-block hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
                  {data.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Thông tin liên hệ */}
        <div className="mt-10 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <FaEnvelope /> <span>LIÊN HỆ</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaClock /> <span>08:00 - 17:00</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaPhone /> <span>0981051510</span>
          </div>
        </div>

        {/* Footer */}
        <div className="footer mt-10 text-center text-gray-500 text-sm">
          <h1>
            Made with ❤ by <a href="https://dilshad-ahmed.github.io/" className="text-blue-500">Dilshad</a>
          </h1>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
