import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function BookingForm({ roomName: propRoomName = "", onClose }) {
  const [searchParams] = useSearchParams();
  const [roomName, setRoomName] = useState(propRoomName);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    checkin: "",
    checkout: "",
    notes: "",
  });

  useEffect(() => {
    const roomFromQuery = searchParams.get("room");
    if (!propRoomName && roomFromQuery) {
      setRoomName(roomFromQuery);
    }
  }, [searchParams, propRoomName]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleWhatsAppBooking = () => {
    const message = `Booking Request:
Room: ${roomName}
Name: ${formData.name}
Check-in: ${formData.checkin}
Check-out: ${formData.checkout}
Adults: ${adults}
Children: ${children}
Notes: ${formData.notes || "-"}`;

    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/917001356966?text=${encodedMsg}`, "_blank");

    if (onClose) onClose(); // Close modal if present
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-[#3B5249]">
        Booking for {roomName}
      </h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-2 text-sm rounded"
      />

      <div className="flex gap-4">
        <input
          type="date"
          name="checkin"
          required
          value={formData.checkin}
          onChange={handleChange}
          className="w-1/2 border border-gray-300 px-4 py-2 text-sm rounded"
        />
        <input
          type="date"
          name="checkout"
          required
          value={formData.checkout}
          onChange={handleChange}
          className="w-1/2 border border-gray-300 px-4 py-2 text-sm rounded"
        />
      </div>

      {/* Pax Count */}
      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-2">
          <span>Adults:</span>
          <button onClick={() => setAdults(Math.max(1, adults - 1))}>-</button>
          <span>{adults}</span>
          <button onClick={() => setAdults(adults + 1)}>+</button>
        </div>
        <div className="flex items-center gap-2">
          <span>Children:</span>
          <button onClick={() => setChildren(Math.max(0, children - 1))}>-</button>
          <span>{children}</span>
          <button onClick={() => setChildren(children + 1)}>+</button>
        </div>
      </div>

      <textarea
        name="notes"
        placeholder="Notes (optional)"
        rows="3"
        value={formData.notes}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-2 text-sm rounded"
      />

      <button
        onClick={handleWhatsAppBooking}
        className="w-full bg-[#A47148] text-white py-2 rounded text-sm font-medium hover:bg-[#7a5133] transition"
      >
        Confirm Booking on WhatsApp
      </button>
    </div>
  );
}
