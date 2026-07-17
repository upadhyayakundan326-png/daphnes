import "./features.css";
import Image from "next/image";
export default function(){
    return(
<section className="about">

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

    <button className="about-btn">
      Order Online
    </button>

  </div>

  <div className="about-image">
    <img src="/coffe.jpg" alt="Coffee" />
  </div>

</section>
)}