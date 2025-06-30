"use client"
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, FaTiktok } from "react-icons/fa"

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
]

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 mt-14 rounded-t-3xl">
      <section className="container">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              Thêm
            </h1>
            <p className="text-sm">Bánh mì được thêm chả, để bạn ráng thêm xíu nghen!
</p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Gò Vấp, HCM</p>
            </div>
            <a
              href="https://www.facebook.com/BanhMiThemSG"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 mt-3 hover:text-yellow-600 transition-colors"
            >
              <FaMobileAlt />
              <p>+84 794442282</p>
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
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link, index) => (
                    <li
                      key={index}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-yellow-600 space-x-1 text-gray-500 dark:text-gray-200"
                    >
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Links</h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, index) => (
                    <li
                      key={index}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-yellow-600 space-x-1 text-gray-500 dark:text-gray-200"
                    >
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Location</h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, index) => (
                    <li
                      key={index}
                      className="cursor-pointer hover:translate-x-1 duration-300 hover:!text-yellow-600 space-x-1 text-gray-500 dark:text-gray-200"
                    >
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
