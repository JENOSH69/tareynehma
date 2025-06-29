import { Helmet } from "react-helmet-async";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Tareynehma Homestay | Darap, West Sikkim</title>
        <meta
          name="description"
          content="Stay peacefully in Darap, West Sikkim at Tareynehma Homestay. Great food, warm stay, and nature all around."
        />
      </Helmet>

      <section className="w-full px-4 py-5 bg-[#002366] border-b border-[#D2B48C]/30">
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
          {/* Left: Welcome text */}
          <p className="text-sm text-[#D2B48C] font-medium whitespace-nowrap">
            Welcome to
          </p>

          {/* Center: Homestay name */}
          <h1 className="text-base sm:text-lg font-semibold text-[#D2B48C] text-center whitespace-nowrap">
            Tareynehma Homestay
          </h1>

          {/* Right: Social Icons */}
          <div className="flex gap-3 text-[#D2B48C]">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#f0e3cc] transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#f0e3cc] transition"
              aria-label="Instagram"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="https://wa.me/918000000000"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#f0e3cc] transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={14} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
