import { useState, useEffect } from "react";
import Modal from "react-modal";

const images = [
  {
    src: "/ima/banner4.jpeg",
    label: "Peaceful nature view",
  },
  {
    src: "/ima/banner5.jpeg",
    label: "Warm rooms & cozy meals",
  },
  {
    src: "/ima/banner6.jpeg",
    label: "Darap's beauty outside your door",
  },
];

Modal.setAppElement("#root");

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[300px] md:h-[420px] lg:h-[500px] overflow-hidden shadow-xl">
      <img
        src={images[currentIndex].src}
        alt="Tareynehma Homestay Banner"
        onClick={() => setModalOpen(true)}
        className={`w-full h-full object-cover cursor-pointer transition-opacity duration-700 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

      {/* Hero Text */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">
          Welcome to <span className="text-[#D2B48C]">Tareynehma Homestay</span>
        </h1>
        <p className="mt-3 text-sm sm:text-lg max-w-md drop-shadow-md">
          Experience tranquility, comfort, and nature in the heart of Darap.
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="mt-6 w-fit px-6 py-2 bg-[#D2B48C] text-[#002366] font-semibold tracking-wide hover:bg-[#c0a16b] transition"
        >
          View Gallery
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Image Viewer"
        className="outline-none"
        overlayClassName="fixed inset-0 bg-black/80 z-50 flex justify-center items-center px-4"
      >
        <div className="relative bg-white rounded-lg shadow-xl overflow-hidden w-full max-w-4xl max-h-[90vh] p-4 md:p-6">
          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-3 right-3 text-gray-700 hover:text-black text-xl font-bold"
          >
            &times;
          </button>
          <img
            src={images[currentIndex].src}
            alt="Tareynehma Full Image"
            className="w-full max-h-[75vh] object-contain rounded-md"
          />
          <p className="mt-4 text-center text-gray-700 text-sm font-medium">
            {images[currentIndex].label}
          </p>
        </div>
      </Modal>
    </section>
  );
}
