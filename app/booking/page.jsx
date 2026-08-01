"use client";

import "./booking.css";
import { useState } from "react";

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

  const bookTable = (e) => {
    e.preventDefault();

    const message = `☕ *Cafe Daphnes - Table Reservation*

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📅 Date: ${form.date}
⏰ Time: ${form.time}
👥 Guests: ${form.guests}
📝 Special Request: ${form.request}`;

    // Daphnes WhatsApp Number
    const whatsappLink = `https://wa.me/9101648595?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="booking-container">
      <h1>Reserve Your Table</h1>

      <p>
        Fill in your details and book instantly through WhatsApp.
      </p>

      <form onSubmit={bookTable}>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="guests"
          placeholder="Number of Guests"
          value={form.guests}
          onChange={handleChange}
          required
        />

        <textarea
          name="request"
          placeholder="Special Request (Optional)"
          value={form.request}
          onChange={handleChange}
        />

        <button type="submit">
          Book via WhatsApp
        </button>

      </form>
    </div>
  );
}