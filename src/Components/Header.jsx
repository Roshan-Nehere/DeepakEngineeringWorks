import { Link } from "react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpeg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
  ];

  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 transition-transform hover:scale-105 duration-300">
            <img
              src={logo}
              alt="Company Logo"
              className="h-12 w-auto sm:h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-15">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative px-4 py-2 text-gray-200 font-bold text-base hover:text-white transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-orange-500 text-white px-6 py-2.5 rounded-full font-semibold text-sm lg:text-base hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-200 hover:text-white transition-colors duration-300 p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <nav className="px-4 pt-2 pb-6 space-y-2 bg-slate-900/95 backdrop-blur-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-1 text-gray-200 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-300 font-medium"
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="block text-center bg-gradient-to-r from-blue-500 to-orange-500 text-white px-4 py-3 rounded-lg font-semibold mt-4 hover:shadow-lg transition-all duration-300"
          >
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;