import { useRef, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

export default function BookingPage() {
  const form = useRef();
  const [searchParams] = useSearchParams();
  const defaultRoom = searchParams.get("room") || "";
  const [roomName, setRoomName] = useState(defaultRoom);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const today = new Date().toISOString().split("T")[0];
  const roomOptions = ["Room 1", "Room 2", "Room 3"];

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const name = form.current.name.value;
    const checkin = form.current.checkin.value;
    const checkout = form.current.checkout.value;
    const notes = form.current.notes.value;

    if (!roomName || !checkin || !checkout || !name) {
      alert("Please fill in all required fields.");
      return;
    }

    if (new Date(checkout) <= new Date(checkin)) {
      alert("Check-out date must be after check-in date.");
      return;
    }

   const message = `*Tareynehma Homestay Booking Request*\n` +
  `Name: ${name}\n` +
  `Room: ${roomName}\n` +
  `Check-in: ${checkin}\n` +
  `Check-out: ${checkout}\n` +
  `Adults: ${adults}\n` +
  `Children: ${children}\n` +
  `Notes: ${notes || "None"}`;




    const phone = "917001356966";
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMsg}`, "_blank");

    alert("✅ Thank you for your booking!.");
    form.current.reset();
    setRoomName("");
    setAdults(1);
    setChildren(0);
  };

  return (
    <section className="bg-[#fdf8f0] min-h-screen py-16 px-4 md:px-10">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#D2B48C]">
        <h2 className="text-2xl font-semibold text-[#002366] mb-6 text-center tracking-wide">
          Book Your Stay
        </h2>

        <form ref={form} onSubmit={handleWhatsApp} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="w-full border border-[#D2B48C] px-4 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email Address (optional)"
            className="w-full border border-[#D2B48C] px-4 py-2 rounded text-sm focus:outline-none"
          />

          <select
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            required
            className="w-full border border-[#D2B48C] px-4 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#D2B48C]"
          >
            <option value="">Select a Room</option>
            {roomOptions.map((room, i) => (
              <option key={i} value={room}>
                {room}
              </option>
            ))}
          </select>

          <div className="flex gap-4">
            <input
              type="date"
              name="checkin"
              min={today}
              required
              className="w-1/2 border border-[#D2B48C] px-4 py-2 rounded text-sm"
            />
            <input
              type="date"
              name="checkout"
              min={today}
              required
              className="w-1/2 border border-[#D2B48C] px-4 py-2 rounded text-sm"
            />
          </div>

          <div className="flex gap-6 text-sm">
            <div className="flex items-center gap-2">
              <label className="text-[#002366] font-medium">Adults</label>
              <button
                type="button"
                onClick={() => setAdults(Math.max(1, adults - 1))}
                className="p-1 border rounded"
              >
                <FaMinus size={12} />
              </button>
              <span>{adults}</span>
              <button
                type="button"
                onClick={() => setAdults(adults + 1)}
                className="p-1 border rounded"
              >
                <FaPlus size={12} />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <label className="text-[#002366] font-medium">Children</label>
              <button
                type="button"
                onClick={() => setChildren(Math.max(0, children - 1))}
                className="p-1 border rounded"
              >
                <FaMinus size={12} />
              </button>
              <span>{children}</span>
              <button
                type="button"
                onClick={() => setChildren(children + 1)}
                className="p-1 border rounded"
              >
                <FaPlus size={12} />
              </button>
            </div>
          </div>

          <textarea
            name="notes"
            placeholder="Notes (optional)"
            rows="3"
            className="w-full border border-[#D2B48C] px-4 py-2 text-sm rounded"
          />

          <button
            type="submit"
            className="w-full bg-[#002366] text-[#D2B48C] py-2 rounded font-medium hover:bg-[#001a4d] transition"
          >
            Confirm Booking on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
