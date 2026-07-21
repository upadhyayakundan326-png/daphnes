"use client";
import "./about.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section 
    className="brew-story" id="about"
     initial={{opacity:0,y:40}}
     whileInView={{opacity:1,y:0}}
     transition={{duration:0.8}}
     viewport={{once:false ,amount:0.3}}
    >
      <div className="brew-wrapper">

        <div className="brew-img">
          <Image
            src="/daphnes.webp"
            alt="Daphnes Cafe"
            width={500}
            height={500}
            className="brew-image"
            priority
          />
        </div>

        <div className="brew-info">

          

          <h2>
            Welcome to <span>Daphnes Cafe</span>
          </h2>

          <p>
            Located in the heart of Guwahati, Daphnes Cafe is more than just
            a place to eat—it's where delicious food, handcrafted coffee,
            and memorable moments come together in a warm and inviting
            atmosphere.
          </p>

          <p>
            Every dish is carefully prepared using fresh ingredients and
            served with genuine hospitality. Whether you're catching up
            with friends, enjoying a quiet coffee, or celebrating a
            special occasion, Daphnes Cafe is the perfect place to relax
            and create lasting memories.
          </p>

          <a href="/menu" className="brew-btn">
            Explore Menu
          </a>

          <div className="brew-count">

            <div className="count-box">
              <h3>2022</h3>
              <p>Established</p>
            </div>

            <div className="count-box">
              <h3>25+</h3>
              <p>Signature Dishes</p>
            </div>

            <div className="count-box">
              <h3>20K+</h3>
              <p>Happy Guests</p>
            </div>

            <div className="count-box">
              <h3>4.8★</h3>
              <p>Customer Rating</p>
            </div>

          </div>

        </div>

      </div>
    </motion.section>
  );
}