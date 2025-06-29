import { useState, useEffect } from "react";
import Modal from "react-modal";
import { FaLeaf, FaHotdog, FaUtensils } from "react-icons/fa";

// Import images from src/assets
import food1 from "../assets/food1.jpeg";
import food2 from "../assets/food2.jpeg";
import food3 from "../assets/food3.jpeg";
import food4 from "../assets/food4.jpeg";
import food5 from "../assets/food5.jpeg";
import food6 from "../assets/food6.jpeg";

const foodImages = [food1, food2, food3, food4, food5, food6];

const menuItems = [
  { icon: <FaLeaf />, img: food1, text: "Local Organic Veggies" },
  { icon: <FaUtensils />, img: food2, text: "Traditional Rice Meals" },
  { icon: <FaHotdog />, img: food3, text: "Homemade Pickles" },
  { icon: <FaUtensils />, img: food4, text: "Daily Cooked Breakfast" },
  { icon: <FaLeaf />, img: food5, text: "Sikkimese Cuisine" },
  { icon: <FaHotdog />, img: food6, text: "Warm Evening Snacks" },
];

Modal.setAppElement("#root");

export default function FoodMenuSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [sliderIndex, setSliderIndex] = useState(0);

  const openModal = (img) => {
    setModalImage(img);
    setModalOpen(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderIndex((prev) => (prev + 1) % foodImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#fdf8f0] py-20 px-4 md:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-[#002366] uppercase tracking-wide relative inline-block after:block after:w-24 after:h-[2px] after:bg-[#D2B48C] after:mx-auto after:mt-3">
          Menu Provided
        </h2>
        <p className="mt-3 text-base text-[#002366] max-w-xl mx-auto">
          Taste the tradition! We offer home-style meals prepared with care, using local ingredients and authentic Sikkimese flavors.
        </p>
      </div>

      {/* Food Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {menuItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition duration-300"
          >
            <img
              src={item.img}
              alt="Food"
              className="w-20 h-20 object-cover rounded-md cursor-pointer hover:scale-105 transition duration-300"
              onClick={() => openModal(item.img)}
            />
            <div className="flex flex-col text-[#002366] font-medium">
              <span className="text-lg flex items-center gap-2">
                {item.icon} {item.text}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Auto Slider */}
      <div className="mt-16 w-full max-w-2xl mx-auto h-48 sm:h-56 overflow-hidden rounded-xl shadow-xl">
        <img
          src={foodImages[sliderIndex]}
          alt="Food Slider"
          className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition"
          onClick={() => openModal(foodImages[sliderIndex])}
        />
      </div>

      {/* Modal Viewer */}
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Image Viewer"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-lg w-[90%] max-w-3xl outline-none rounded-md"
        overlayClassName="fixed inset-0 bg-black/70 z-50 flex justify-center items-center"
      >
        <div className="text-center">
          <img
            src={modalImage}
            alt="Zoomed Food"
            className="max-h-[70vh] w-full object-contain mb-6 rounded-md"
          />
          <div className="flex justify-center gap-3 flex-wrap">
            {foodImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                onClick={() => setModalImage(img)}
                className={`w-14 h-10 object-cover cursor-pointer border rounded-sm transition ${
                  modalImage === img ? "border-[#D2B48C]" : "border-transparent"
                } hover:opacity-80`}
              />
            ))}
          </div>
        </div>
      </Modal>
    </section>
  );
}
