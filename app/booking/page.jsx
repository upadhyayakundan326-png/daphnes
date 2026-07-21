


"use client";

import { useState } from "react";
import "./booking.css"

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

    const message = `
    its just for my development practice purpose 

I want to book a table.

Name: ${form.name}
Phone: ${form.phone}
Date: ${form.date}
Time: ${form.time}
Guests: ${form.guests}
Request: ${form.request}
    `;


    const whatsappLink = 
    `https://wa.me/919101648595?text=${encodeURIComponent(message)}`;


    window.open(whatsappLink, "_blank");

  };


  return (
    <main>

      <h1>Book Your Table</h1>


      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        onChange={handleChange}
      />


      <input
        type="number"
        name="phone"
        placeholder="Phone Number"
        onChange={handleChange}
      />


      <input
        type="date"
        name="date"
        onChange={handleChange}
      />


      <input
        type="time"
        name="time"
        onChange={handleChange}
      />


      <input
        type="number"
        name="guests"
        placeholder="Number of Guests"
        onChange={handleChange}
      />


      <textarea
        name="request"
        placeholder="Special Request"
        onChange={handleChange}
      />


      <button onClick={bookTable}>
        Book via WhatsApp
      </button>


    </main>
  );
}