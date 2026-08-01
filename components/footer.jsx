import "./footer.css";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

export default function Footer() {
  return (
    <section className="footer-wrapper" id ="footer">
      <div className="footer-box">

        {/* Left */}
        <div className="left">
          <img src="/d.jpg" alt="Daphnes" className="logo" />

          <h1>We'd Love To Welcome You</h1>

          <p>
            Whether it's your morning coffee, lunch with friends or a peaceful
            evening, we're ready to make every visit memorable at Cafe Daphnes.
          </p>

          <div className="info">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h4>Location</h4>
              <span>Machkhowa, Guwahati, Assam</span>
            </div>
          </div>

          <div className="info">
            <FaPhoneAlt className="icon" />
            <div>
              <h4>Phone</h4>
<a href="tel:+919101648595">9101648595</a>
            </div>
          </div>

          <div className="info">
            <FaClock className="icon" />
            <div>
              <h4>Opening Hours</h4>
              <span>Every Day • 9:00 AM - 10:00 PM</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="right">
          <h2>Stay Connected</h2>

          <p>
            Follow Cafe Daphnes for menu updates, coffee stories,
            events and exclusive offers.
          </p>

          <div className="social">
           <Link
  href="https://www.instagram.com/daphnescafe/"
  target="_blank"
>
  <div className="circle">
    <FaInstagram />
  </div>
</Link>

<Link
  href="https://www.facebook.com/YOUR_PAGE_NAME"
  target="_blank"
>
  <div className="circle">
    <FaFacebookF />
  </div>
</Link>

         </div>   

          {/* Buttons */}
          <div className="buttons">

            <a
              href="https://www.google.com/maps/search/?api=1&query=Daphnes+Family+Cafe+Machkhowa+Guwahati+Assam"
              target="_blank"
              rel="noopener noreferrer"
              className="direction-btn"
            >
              Get Directions
            </a>

           <a
  href="https://www.zomato.com/guwahati/daphnes-bharalumukh/book"
  target="_blank"
  rel="noopener noreferrer"
  className="outline"
>
  Reserve Table
</a>
          </div>
        </div>

      </div>

      <p className="copyright">
        © 2026 Cafe Daphnes • All Rights Reserved
      </p>
    </section>
  );
}