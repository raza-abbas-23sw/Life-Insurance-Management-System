import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = ["Home", "Generate Plan", "See Plans", "Search","Add", "Contact"];

  return (
    <header className="bg-[#007ACC] shadow-lg w-full fixed z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="LifeSecure Logo" className="w-10 h-10" />
          <span className="text-white text-2l font-extrabold tracking-wide">
            State Life Insurance
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase().replace(" ", "-")}`}              className="text-white font-medium hover:scale-105 transform transition-all duration-300 px-3 py-1 rounded-md hover:bg-white/20 hover:shadow-lg"
            >
              {item}
            </Link>
          ))}
          <a
            href="/login"
            className="ml-4 bg-white text-[#007ACC] px-5 py-2 rounded-full font-semibold hover:bg-blue-100 hover:scale-105 transition-all duration-300 shadow-md"
          >
            Login
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#007ACC] px-6 pb-4 pt-2 space-y-4 text-white transition-all">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase().replace(" ", "-")}`}
              className="block text-lg font-medium bg-white/10 rounded-md px-3 py-2 hover:bg-white/20 transition-all duration-300"
            >
              {item}
            </Link>
          ))}
          <a
            href="/login"
            className="block mt-2 bg-white text-[#007ACC] text-center py-2 rounded-full font-bold shadow-md hover:bg-blue-100 transition-all duration-300"
          >
            Login
          </a>
        </div>
      )}
    </header>
  );
}
