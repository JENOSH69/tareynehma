import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const HamburgerIcon = ({ isOpen }) => (
  <div className="w-6 h-6 relative flex items-center justify-center">
    <motion.span
      animate={{
        rotate: isOpen ? 45 : 0,
        y: isOpen ? 6 : 0,
        backgroundColor: "#D2B48C",
      }}
      className="absolute h-0.5 w-full rounded"
    />
    <motion.span
      animate={{
        opacity: isOpen ? 0 : 1,
        backgroundColor: "#D2B48C",
      }}
      className="absolute h-0.5 w-full rounded"
    />
    <motion.span
      animate={{
        rotate: isOpen ? -45 : 0,
        y: isOpen ? -6 : 0,
        backgroundColor: "#D2B48C",
      }}
      className="absolute h-0.5 w-full rounded"
    />
  </div>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? "hidden" : "auto";
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Rooms", path: "/rooms" },
    { name: "Gallery", path: "/gallery" },
    { name: "Booking", path: "/booking" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`w-full sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#002366]/90 backdrop-blur-sm shadow-md border-b border-[#D2B48C]/40"
            : "bg-[#002366]"
        }`}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4">
          <div
            className="border border-[#D2B48C] px-4 py-1 text-lg font-semibold text-[#D2B48C] tracking-wide bg-white/10 backdrop-blur-sm"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tareynehma
          </div>

          <button onClick={toggleMenu} className="md:hidden">
            <div className="hover:scale-110 transition-transform duration-300">
              <HamburgerIcon isOpen={menuOpen} />
            </div>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center gap-8 py-3 bg-[#002366] border-t border-[#D2B48C]/30">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-white border-b-2 border-white pb-1"
                  : "text-[#D2B48C] hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full h-full bg-white/90 backdrop-blur-sm text-black z-[9999] flex flex-col"
          >
            {/* Close Icon */}
            <div className="flex justify-end pr-6 pt-8">
              <button onClick={toggleMenu} className="text-2xl">
                <FaTimes />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col items-end gap-3 px-8 mt-10 text-right">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={toggleMenu}
                    className="text-[25px] font-bold tracking-wide hover:text-[#002366] transition-all duration-300"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Social Icons + Book Now */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex flex-col items-end gap-4 px-8 mb-10 mt-auto"
            >
              <div className="flex gap-4 text-xl text-[#002366]">
                <a href="#" className="hover:text-teal-700">
                  <FaFacebook />
                </a>
                <a href="#" className="hover:text-teal-700">
                  <FaInstagram />
                </a>
                <a
                  href="https://wa.me/917001356966"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-700"
                >
                  <FaWhatsapp />
                </a>
              </div>
              <button
                onClick={() => {
                  toggleMenu();
                  navigate("/booking");
                }}
                className="bg-[#002366] text-[#D2B48C] px-6 py-2 hover:bg-[#001a4d] transition"
              >
                Book Now
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
