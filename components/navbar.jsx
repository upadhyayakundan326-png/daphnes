import Link from "next/link";
import "./navbar.css";
export default function Navbar() {
  return (
    <nav className="nav"
>
      <div>

        
       

        
       <ul className="navlinks">
  <li className="link"><a href="/">Home</a></li>

  
  <li className="link"><a href="#gallery">Gallery</a></li>
  <li className="link"><a href="#reviews">Reviews</a></li>
  <li className="link"><Link href="/book">Booking</Link></li>
</ul>
     
       

      </div>

    </nav>
  );
}

