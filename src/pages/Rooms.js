import { useState } from "react";
import Modal from "react-modal";
import { FaUtensils, FaRupeeSign, FaBed } from "react-icons/fa";
import BookingForm from "../components/BookingForm";

const rooms = [
  {
    id: 1,
    name: "Room 1",
    description: "A cozy room with hillside views and traditional décor.",
    images: ["/ima/room1.jpeg", "/ima/room2a.jpeg", "/ima/room3a.jpeg"],
    price: 1200,
  },
  {
    id: 2,
    name: "Room 2",
    description: "Comfortable space for two, ideal for quiet evenings.",
    images: ["/ima/room2.jpeg", "/ima/room2a.jpeg", "/ima/room2a.jpeg"],
    price: 1200,
  },
  {
    id: 3,
    name: "Room 3",
    description: "Spacious room with natural lighting and warm ambiance.",
    images: ["/ima/room3.jpeg", "/ima/room3a.jpeg", "/ima/room3a.jpeg"],
    price: 1200,
  },
];

Modal.setAppElement("#root");

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeRoom, setActiveRoom] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [bookingRoom, setBookingRoom] = useState(null);

  const filteredRooms =
    selectedRoom === "All"
      ? rooms
      : rooms.filter((room) => room.name === selectedRoom);

  const openModal = (room) => {
    setActiveRoom(room);
    setActiveImage(0);
    setModalOpen(true);
  };

  const openBookingForm = (room) => {
    setBookingRoom(room);
    setFormModalOpen(true);
  };

  return (
    <section className="bg-[#fdf8f0] py-16 px-4 md:px-12">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-extrabold text-[#002366] uppercase tracking-wider relative inline-block after:block after:w-20 after:h-[2px] after:bg-[#D2B48C] after:mx-auto after:mt-2">
          Our Rooms
        </h1>
        <p className="mt-2 text-sm text-[#002366] font-medium">Select a Room</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <select
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value)}
          className="border border-[#D2B48C] bg-white text-[#002366] px-5 py-2 rounded-md text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D2B48C] transition"
        >
          <option value="All">All Rooms</option>
          {rooms.map((room) => (
            <option key={room.id} value={room.name}>
              {room.name}
            </option>
          ))}
        </select>

        <select className="border border-[#D2B48C] bg-white text-[#002366] px-5 py-2 rounded-md text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D2B48C] transition">
          <option>Sort by</option>
          <option>Price</option>
          <option>Name</option>
        </select>
      </div>

      <div className="space-y-16">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="max-w-5xl mx-auto bg-white border-l-4 border-[#D2B48C] shadow-xl rounded-lg overflow-hidden transition transform hover:scale-[1.01] duration-300"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  onClick={() => openModal(room)}
                  className="w-full h-60 object-cover cursor-zoom-in hover:opacity-90 transition duration-300 ease-in-out"
                />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-[#002366] mb-2 tracking-wide uppercase">
                    {room.name}
                  </h2>
                  <p className="text-[#002366] text-sm mb-4 font-medium">
                    {room.description}
                  </p>
                  <div className="space-y-2 text-[#002366] text-sm font-medium">
                    <div className="flex items-center gap-2">
                      <FaRupeeSign className="text-[#D2B48C]" />
                      <span>₹{room.price} / night</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaUtensils className="text-[#D2B48C]" />
                      <span>Breakfast, Lunch & Dinner Included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaBed className="text-[#D2B48C]" />
                      <span>Cozy Beds with Comfort</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => openBookingForm(room)}
                    className="bg-[#002366] text-[#D2B48C] px-6 py-2 rounded-md text-sm font-semibold tracking-wide hover:bg-[#001a4d] transition duration-300"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Room Gallery"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 shadow-lg w-[95%] max-w-md sm:max-w-xl outline-none rounded-md"
        overlayClassName="fixed inset-0 bg-black/70 z-50 flex justify-center items-center"
      >
        {activeRoom && (
          <div className="text-center">
            <img
              src={activeRoom.images[activeImage]}
              alt="Room preview"
              className="w-full h-[220px] sm:h-[260px] object-cover mb-4 transition duration-300 hover:scale-[1.02]"
            />
            <div className="flex justify-center gap-3">
              {activeRoom.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setActiveImage(index)}
                  className={`w-14 h-10 object-cover cursor-pointer border ${
                    activeImage === index ? "border-[#D2B48C]" : "border-transparent"
                  } hover:opacity-80 transition rounded-sm`}
                />
              ))}
            </div>
          </div>
        )}
      </Modal>

      <Modal
        isOpen={formModalOpen}
        onRequestClose={() => setFormModalOpen(false)}
        contentLabel="Booking Form"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 shadow-lg w-[95%] max-w-lg outline-none rounded-md"
        overlayClassName="fixed inset-0 bg-black/60 z-50 flex justify-center items-center"
      >
        {bookingRoom && (
          <BookingForm
            roomName={bookingRoom.name}
            onClose={() => setFormModalOpen(false)}
          />
        )}
      </Modal>
    </section>
  );
}
