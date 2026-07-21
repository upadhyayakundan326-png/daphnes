"use client";
import "./contact.css";
import { motion } from "framer-motion";


export default function Contact() {
  return (
    <motion.section 
    className="contact-us"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
viewport={{once:false,amount:0.3}}


    >

      <h1>Contact Us</h1>

      <p>
        Whether you have a question, want to reserve a table,
        place an order, or plan a special event, we're always
        here to help.
      </p>

      <p>
        <strong>
          Thank you for choosing Daphnes Family Cafe.
          We look forward to welcoming you soon!
        </strong>
      </p>

      <div className="contact-info">

        <p>📍 Machkhowa, Guwahati, Assam 781009</p>

        <a href="tel:+919101648595">
          📞 +91 91016 48595
        </a>

        <a href="mailto:upadhyayakundan326@gmail.com">
          ✉️ upadhyayakundan326@gmail.com
        </a>

        <a
          href="https://instagram.com/daphnesfamilycafe"
          target="_blank"
          rel="noopener noreferrer"
        >
          📸 @daphnesfamilycafe
        </a>

        <p>🕒 Mon – Sun | 9:00 AM – 10:00 PM</p>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Daphnes+Family+Cafe+Machkhowa+Guwahati+Assam"
          target="_blank"
          rel="noopener noreferrer"
          className="direction-btn"
        >
          📍 Get Directions
        </a>

      </div>

    </motion.section>
  );
}