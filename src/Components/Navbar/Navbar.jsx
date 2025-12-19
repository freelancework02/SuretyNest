import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../../assets/Logo/logobg.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Products", path: "/product" },
    { name: "Partnership", path: "/partnership" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Events", path: "/events" },
  ];

  return (
    <header className="w-full bg-[#ffff] text-[#011634] shadow-lg py-3 px-2 fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo Section */}
        <div className="flex items-center logosection">
          <img
            src={Logo}
            alt="Logo"
            id="logo"
            className="w-auto h-40 sm:h-20 md:h-50 lg:h-28 object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex text-2lg font-semibold">
          <div className="flex space-x-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-2 py-2 text-[17px] transition duration-300 ${location.pathname === item.path
                    ? "border-[#fff] border-b-2 text-[#333]"
                    : "hover:border-b-2 hover:border-[#333]"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-black"
        >
          <AiOutlineMenu className="text-4xl" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-white shadow-lg flex flex-col items-start pt-12 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          } lg:hidden`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6"
        >
          <AiOutlineClose className="text-3xl text-black" />
        </button>

        {/* Mobile Links */}
        <div className="flex flex-col w-full text-left space-y-2 mt-4 px-6">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`w-full py-3 text-[16px] border-b px-4 transition ${location.pathname === item.path
                  ? "bg-[#f7d88b] text-white"
                  : "hover:bg-[#f7d88b] hover:text-white"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
