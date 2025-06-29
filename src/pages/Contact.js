import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const text = `Hi, my name is ${name}. My email is ${email}. ${message}`;
    const whatsappURL = `https://wa.me/917001356966?text=${encodeURIComponent(text)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="min-h-screen bg-white text-[#002366] px-6 py-12 md:px-24">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center border-b-2 border-[#D2B48C] inline-block">
        Contact Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-[#D2B48C] text-xl mt-1" />
            <p>
              Tareynehma Homestay, Darap, West Sikkim – 737113<br />
              Near Petrol Pump, India
            </p>
          </div>
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-[#D2B48C] text-xl mt-1" />
            <a href="tel:+917001356966" className="hover:underline">
              +91 7001356966
            </a>
          </div>
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-[#D2B48C] text-xl mt-1" />
            <a href="mailto:tareynehma@gmail.com" className="hover:underline">
              tareynehma@gmail.com
            </a>
          </div>
          <div className="flex items-start gap-4">
            <FaWhatsapp className="text-[#D2B48C] text-xl mt-1" />
            <a
              href="https://wa.me/917001356966?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20room%20at%20Tareynehma%20Homestay."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-green-600"
            >
              Chat with us on WhatsApp
            </a>
          </div>
        </div>

        {/* Map (Optional: Add iframe later if needed) */}
      </div>

      {/* Contact Form with WhatsApp Integration */}
      <div className="mt-12 max-w-2xl mx-auto bg-[#f8f8f8] p-8 rounded-xl shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-center text-[#002366]">
          Send Us a Message
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#002366] text-[#D2B48C] px-6 py-3 rounded-lg w-full hover:bg-[#001b5a] transition"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
