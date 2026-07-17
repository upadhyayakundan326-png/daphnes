
import "./menu.css"
import Image from "next/image"

export default function Menu(){
    return(
        <section className="rest-menu">
            <div className="visit">
  <h2>Visit Us</h2>

  <p>
    We'd love to welcome you! Visit our café in the heart of
    Machkhowa, Guwahati, and enjoy freshly brewed coffee,
    delicious meals, and a warm atmosphere.
  </p>

  <h4>📍 Machkhowa, Guwahati, Assam 781009</h4>

  <a
    href="https://www.google.com/maps/search/?api=1&query=Machkhowa+Guwahati+Assam"
    target="_blank"
    rel="noopener noreferrer"
  >
    Get Directions
  </a>
  <image src="/rose.jpg" alt="rose"/>
</div>
        
        <div className="joined">
       <div className="our-menu">

        <h1>Fresh Flavors💕</h1>
            <br/>
            <h2>From hearty breakfasts to authentic pasta, juicy burgers <br/> and sweet desserts, there's something to satisfy every craving.</h2>

</div>

    <div className="under">
        
<image src="/burger.jpg"alt="menu"/>

<image src="/breakfast.jpg"alt="menu"/>

<image src="/dolci.jpg"alt="menu"/>

<image src="/pasta.avif"alt="menu"/>
</div>
    </div>





        </section>
    )
}