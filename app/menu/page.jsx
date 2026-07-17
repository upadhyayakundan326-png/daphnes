
import "./menu.css"

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
  <img src="/rose.jpg" alt="rose"></img>
</div>
        
        <div className="joined">
       <div className="our-menu">

        <h1>Fresh Flavors💕</h1>
            <br/>
            <h2>From hearty breakfasts to authentic pasta, juicy burgers <br/> and sweet desserts, there's something to satisfy every craving.</h2>

</div>

    <div className="under">
        
<img src="/burger.jpg"alt="menu"></img>

<img src="/breakfast.jpg"alt="menu"></img>

<img src="/dolci.jpg"alt="menu"></img>

<img src="/pasta.avif"alt="menu"></img>
</div>
    </div>





        </section>
    )
}