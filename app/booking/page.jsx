"use client";

import { useState } from "react";
import "./booking.css";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    request: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const bookTable = () => {
    if (
      !form.name ||
      !form.phone ||
      !form.date ||
      !form.time ||
      !form.guests
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const message = `☕ *Table Booking Request*

This booking form is created for development practice.

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📅 Date: ${form.date}
⏰ Time: ${form.time}
👥 Guests: ${form.guests}
📝 Request: ${form.request || "None"}
`;

    const whatsappLink = `https://wa.me/919101648595?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <main className="booking-container">
      <h1>Book Your Table</h1>

      <p>
        Reserve your table in just a few seconds.
      </p>

      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
      />

      <input
        type="time"
        name="time"
        value={form.time}
        onChange={handleChange}
      />

      <input
        type="number"
        name="guests"
        placeholder="Number of Guests"
        value={form.guests}
        onChange={handleChange}
      />

      <textarea
        name="request"
        placeholder="Special Request"
        value={form.request}
        onChange={handleChange}
      />

      <button onClick={bookTable}>
        📲 Book via WhatsApp
      </button>
    </main>
  );
}