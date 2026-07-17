import Link from "next/link";
import "./navbar.css";
export default function Navbar() {
  return (
    <nav className="nav"
>
      <div>

        
       

        
       <ul className="navlinks">
  <li className="link"><a href="/">Home</a></li>

  <li className="link"><a href="/menu">Menu</a></li>
  <li className="link"><Link href="/contact">Contact</Link></li>
  <li className="link"><a href="/order">Delievery</a></li>

</ul>
     
       

      </div>

    </nav>
  );
}

