"use client";
import "./features.css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export default function(){
    return(
<motion.section

className="about"

   initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
viewport={{once:false,amount:0.3}}

    >

  <div className="about-content">

    <span>ABOUT US</span>

    <h2>
      EAT, DRINK,<br />
      WORK, PLAY
    </h2>

    <p>
      At Daphne's Cafe, we believe every cup tells a story.
      Enjoy freshly brewed coffee, delicious meals, and a
      cozy atmosphere perfect for work, meetings, or relaxing
      with friends.
    </p>

   <a
  href="https://www.zomato.com/guwahati/daphnes-bharalumukh"
  target="_blank"
  rel="noopener noreferrer"
  className="delivery-btn"
>
  Order Online
</a>
  </div>

 <div className="about-image">
  <Image
    src="/coffe.jpg"
    alt="Coffee"
    width={400}
    height={500}
    className="coffee-image"
  />
</div>

</motion.section>
)}