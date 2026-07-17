import Image from "next/image";
import "./menu.css";

export default function RestMenu() {
  return (
    <section className="rest-menu">

      {/* Left */}
      <div className="visit">
        <h2>Visit Us</h2>

        <p>
          We'd love to welcome you! Visit us and enjoy the perfect
          combination of delicious food, cozy ambience and friendly
          service.
        </p>

        <h4>📍 Machkhowa, Guwahati, Assam - 781009</h4>

        <a
          href="https://maps.google.com/?q=Daphne's+Cafe+Machkhowa+Guwahati"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Direction
        </a>

        <Image
          src="/rose.jpg"
          alt="Rose Heart"
          width={400}
          height={400}
          className="visit-img"
        />
      </div>

      {/* Right */}
      <div className="joined">
        <div className="our-menu">
          <h1>Fresh Flavors 💕</h1>

          <h2>
            From hearty breakfasts to artisanal pasta, juicy burgers,
            refreshing beverages and delightful desserts, there's
            something to satisfy every craving.
          </h2>
        </div>

        <div className="under">
          <Image src="/dolci.jpg" alt="Menu 1" width={350} height={500} />
          <Image src="/burger.jpg" alt="Menu 2" width={350} height={500} />
          <Image src="/breakfast.jpg" alt="Menu 3" width={350} height={500} />
          <Image src="/pasta.avif" alt="Menu 4" width={350} height={500} />
        </div>
      </div>

    </section>
  );
}