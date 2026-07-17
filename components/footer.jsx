import "./footer.css";
import Link from "next/link";

export default function Footer(){

return(

<footer className="footer">
  <h2>Thank You for Visiting Daphnes 💕</h2>

  <p>
    We truly appreciate you taking the time to visit our cafe.
    We hope to welcome you soon and serve you the finest coffee,
    delicious food, and unforgettable moments.
  </p>

  <div className="footer-btns">
    

    <Link href="#contact">
      <button>Contact Us 📞</button>
    </Link>
  </div>

  <p className="copyright">
    © 2026 Daphnes Cafe • Brewed with Love ❤️
  </p>
</footer>
)}