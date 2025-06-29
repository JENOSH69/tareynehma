  import { motion } from "framer-motion";
  import { FaLeaf } from "react-icons/fa";

  export default function About() {
    return (
      <section className="relative w-full min-h-[60vh] bg-[#fdf8f0] py-20 px-4 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-[900px] w-full bg-white border-l-4 border-[#D2B48C] rounded-xl shadow-lg px-6 sm:px-10 py-12 text-center"
        >
          {/* Leaf Icon */}
          <div className="flex justify-center mb-4">
            <FaLeaf className="text-[#D2B48C] text-4xl opacity-90" />
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-[#002366] mb-4">
            About Us
          </h2>

          {/* Paragraph */}
          <p className="text-base md:text-lg font-medium leading-relaxed text-[#002366]">
            Welcome to <span className="font-semibold">Tareynehma Homestay</span> — a tranquil space nestled in the heart of Darap.
            Our warm hospitality, scenic views, and delicious home-cooked meals invite you
            to rest, rejuvenate, and feel truly at home.
          </p>
        </motion.div>
      </section>
    );
  }
