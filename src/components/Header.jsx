import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navlinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-18 xl:px-40 2xl:px-64 py-3 sm:py-4 bg-[#faf3f3]/85 fixed top-0 left-0 right-0 z-50 shadow-md backdrop-blur-sm">
      <h1 className="text-[#9e1212] font-serif text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold shrink-0">
        <NavLink to="/">Commint Buka</NavLink>
      </h1>
      
      {/* Hamburger Menu Button - Tablet and Below */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <span className={`block w-6 h-0.5 bg-[#9e1212] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-[#9e1212] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-[#9e1212] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Desktop Navigation - Large Screens Only */}
      <nav className="hidden lg:block">
        <ul className="flex gap-4 xl:gap-6 items-center font-jakarta">
          {navlinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end
                className={({ isActive }) =>
                  isActive
                    ? "text-xs sm:text-sm xl:text-sm transition-all duration-200 pb-1 whitespace-nowrap text-[#9e1212] font-bold border-b-2 border-[#9e1212]"
                    : "text-xs sm:text-sm xl:text-sm transition-all duration-200 pb-1 whitespace-nowrap text-gray-600 hover:text-[#9e1212] font-medium"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Button - Large Screens Only */}
      <button className="hidden lg:block bg-[#9e1212] text-white px-6 xl:px-7 py-2 rounded-4xl hover:bg-[#8a0f0f] font-semibold text-xs xl:text-sm transition-colors shrink-0 cursor-pointer">
        Order via Chowdeck
      </button>

      {/* Mobile/Tablet Menu */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-[#faf3f3] shadow-md lg:hidden z-50 border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-2 p-4 sm:p-5 md:p-6">
            {navlinks.map((link) => (
              <li key={link.path} className="font-jakarta">
                <NavLink
                  to={link.path}
                  end
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm md:text-base transition-all duration-200 px-3 py-2 block text-[#9e1212] font-bold"
                      : "text-sm md:text-base transition-all duration-200 px-3 py-2 block rounded-md text-gray-600 hover:text-[#9e1212] hover:bg-gray-50 font-medium"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li>
              <button className="w-full bg-[#9e1212] text-white px-6 py-2 rounded-4xl hover:bg-[#8a0f0f] font-semibold text-sm transition-colors mt-3 cursor-pointer">
                Order via Chowdeck
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
