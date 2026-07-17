import "./footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-line"></div>

      <h2>☕ Thank You for Being Part of Daphnes</h2>

      <p className="footer-text">
        Every cup of coffee tells a story, and we're grateful you've chosen
        Daphnes to be a part of yours. Whether you're here for a peaceful
        morning coffee, a delightful meal, or moments with loved ones, our
        doors are always open to welcome you with warmth, comfort, and genuine
        hospitality.
      </p>

      <p className="quote">
        "Life begins after coffee... and every beautiful memory begins at
        Daphnes."
      </p>

      <div className="footer-btns">
        <Link href="/contact">
          <button>Contact Us 📞</button>
        </Link>
      </div>

      <div className="footer-bottom">
        <p>Made with ❤️ for coffee lovers.</p>

        <p className="copyright">
          © 2026 Daphnes Cafe • All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}