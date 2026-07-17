 import "./hero.css"
 import Link from "next/link"
 export default function Hero(){
return(
<section className="hero">

  <div className="hero-left">
    <div className="image-box">
      <img src="/new.jpg" alt="coffee" />
    </div>
   
  </div>

  <div className="hero-right">
    <span className="tag">COFFEE SHOP</span>

    <h1>
      Welcome to <span>Daphnes</span>
    </h1>

    <p>
      Freshly brewed coffee, handcrafted drinks, delicious food
      and unforgettable moments in a warm and cozy atmosphere.
    </p>

    <Link href="/menu">
      <button>Explore Menu</button>
    </Link>

  </div>

</section>
)
 }