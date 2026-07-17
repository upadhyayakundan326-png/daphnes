import "./hero.css";
import Image from "next/image";
import Link from "next/link";
function Hero(){



return(
<section className="hero1">

  <image src="/daphnes.webp" alt="coffee" className="img" />

  <div className="hero-content">
     <h1 className="welcome"> Welocome to <strong className="strong">Daphnes</strong></h1>
    <br/>
    <h2>Freshly Brewed Coffee</h2>
    
    
    <p >experience rich flavors, handcrafted coffee and cozy moments
    at your favorite cafe..</p>

   
   <Link href="/menu" ><button className="menu"><em>Explore Menu</em></button></Link> 
  
</div>
</section>
)}
export default Hero;