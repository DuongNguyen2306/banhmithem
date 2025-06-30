"use client"
import { Link } from "react-router-dom" // Import Link
import { FaUserCircle, FaEnvelope, FaClock, FaPhone, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"
import { Navlinks } from "./Navbar"

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const closeMenu = () => {
    setShowMenu(false)
  }

  return (
    <>
      {/* Lớp phủ nền */}
      {showMenu && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" onClick={closeMenu}></div>
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
                {data.link.startsWith("/#") ? (
                  <a
                    href={data.link}
                    className="inline-block hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
                    onClick={closeMenu}
                  >
                    {data.name}
                  </a>
                ) : (
                  <Link
                    to={data.link}
                    className="inline-block hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
                    onClick={closeMenu}
                  >
                    {data.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Thông tin liên hệ */}
        <div className="mt-10 text-sm text-gray-600 dark:text-gray-400">
          <Link
            to="/our-story"
            className="flex items-center gap-2 hover:text-blue-500 transition-colors"
            onClick={closeMenu}
          >
            <FaEnvelope /> <span>LIÊN HỆ</span>
          </Link>
          <div className="flex items-center gap-2 mt-2">
            <FaClock /> <span>08:00 - 17:00</span>
          </div>
          <Link
            to="/our-story"
            className="flex items-center gap-2 mt-2 hover:text-blue-500 transition-colors"
            onClick={closeMenu}
          >
            <FaPhone /> <span>0981051510</span>
          </Link>

          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.facebook.com/BanhMiThemSG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors"
              title="Facebook"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/banhmithemsaigon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600 transition-colors"
              title="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                alert("TikTok đang cập nhật!")
              }}
              className="text-gray-500 hover:text-gray-600 transition-colors"
              title="TikTok"
            >
              <FaTiktok size={20} />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="footer mt-10 text-center text-gray-500 text-sm">
          <h1>
            Made with ❤ by{" "}
            <a href="#" className="text-blue-500">
              Bánh Mì Thêm
            </a>
          </h1>
        </div>
      </div>
    </>
  )
}

export default ResponsiveMenu
