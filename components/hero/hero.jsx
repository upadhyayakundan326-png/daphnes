import "./hero.css"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Image using Next.js Image component */}
      <Image
        src="/ex2.jpg"
        alt="Cafe Background"
        fill
        priority
        quality={90}
        style={{ objectFit: 'cover' }}
        className="hero-bg-image"
      />

      {/* Dark Overlay for better text readability */}
      <div className="hero-overlay"></div>

      {/* Hero Content (Centered like Leaf Deck) */}
      <div className="hero-content">
        <span className="tag">WELCOME TO</span>

        <h1>
          Daphnes <span>Cafe</span>
        </h1>

        <p className="sub-tag">CAFE · BAR · DINE-IN</p>

        <p className="description">
          Crafted flavours. Memorable moments.
        </p>

        <div className="button-group">
          <Link href="/menu">
            <button className="btn-primary">
              EXPLORE MENU &rarr;
            </button>
          </Link>
          <a href="tel:+1234567890">
            <button className="btn-secondary">
              📞 CALL US
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}