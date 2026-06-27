import { NavLink } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white font-body border-t border-white/5">
      {/* Main Grid Wrapper */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* COLUMN 1: Brand & Socials */}
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold font-playfair text-white tracking-wide">
            Commint Buka
          </h1>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Bringing the authentic taste of premium Nigerian cuisine to your
            table. Quality ingredients, traditional recipes, modern service.
          </p>
          {/* Social Icons with proper flex alignments */}
          <div className="flex space-x-3 pt-2">
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex items-center justify-center w-10 h-10 text-gray-300 bg-white/5 rounded-full hover:bg-[#fba512] hover:text-[#9e1212] hover:scale-110 transition-all duration-200"
            >
              <FaInstagram className="text-lg" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="inline-flex items-center justify-center w-10 h-10 text-gray-300 bg-white/5 rounded-full hover:bg-[#fba512] hover:text-[#9e1212] hover:scale-110 transition-all duration-200"
            >
              <FaTwitter className="text-lg" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="inline-flex items-center justify-center w-10 h-10 text-gray-300 bg-white/5 rounded-full hover:bg-[#fba512] hover:text-[#9e1212] hover:scale-110 transition-all duration-200"
            >
              <FaFacebookF className="text-base" />
            </a>
          </div>
        </div>

        {/* COLUMN 2: Quick Links */}
        <div>
          <h3 className="text-base font-bold uppercase tracking-wider text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a
                href="#menu"
                className="hover:text-white transition duration-200"
              >
                Order Online
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="hover:text-white transition duration-200"
              >
                Full Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition duration-200">
                Catering Services
              </a>
            </li>
          </ul>
        </div>

        {/* COLUMN 3: Company Navigation (Fixed Routing) */}
        <div>
          <h3 className="text-base font-bold uppercase tracking-wider text-white mb-4">
            Company
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-white transition duration-200 ${isActive ? "text-[#fba512]" : ""}`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  `hover:text-white transition duration-200 ${isActive ? "text-[#fba512]" : ""}`
                }
              >
                Menu Grid
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `hover:text-white transition duration-200 ${isActive ? "text-[#fba512]" : ""}`
                }
              >
                Contact & Outlets
              </NavLink>
            </li>
          </ul>
        </div>

        {/* COLUMN 4: Newsletter */}
        <div className="space-y-3">
          <h3 className="text-base font-bold uppercase tracking-wider text-white mb-4">
            Newsletter
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Subscribe for special offers, discount codes, and menu updates.
          </p>
          <div className="relative w-full max-w-sm pt-1">
            <input
              type="email"
              className="w-full bg-[#262626] text-gray-200 placeholder:text-gray-500 rounded-xl py-3 pl-4 pr-28 text-sm border border-white/5 focus:outline-none focus:border-[#fba512] transition-colors"
              placeholder="Email address"
            />
            <button
              type="submit"
              className="absolute right-1 top-2 bottom-1 bg-[#9e1212] text-white px-4 rounded-lg hover:bg-[#b31919] active:scale-95 transition-all text-sm font-medium cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Dividers & Footer Bottom Bar */}
      <hr className="border-white/10 max-w-7xl mx-auto" />

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-500">
        <div className="font-jakarta">
          &copy; {new Date().getFullYear()} Commint Buka. All Rights Reserved.
        </div>
        <div className="flex gap-4 font-jakarta">
          <p className="text-gray-500 hover:text-white transition duration-200">Privacy Policy</p>
          <p className="text-gray-500 hover:text-white transition duration-200">Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
