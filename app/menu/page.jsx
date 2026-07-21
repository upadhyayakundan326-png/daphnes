import "./menu.css";
import menuData from "./menudata";

export default function Menu() {
  const featuredItems = [
    menuData[0].items[0],
    menuData[1].items[0],
    menuData[4].items[1],
  ];

  return (
    <section className="menu-page">

      {/* Header */}

      <div className="menu-header">

        <div className="menu-heading">
          
         
        </div>

        <h1
  style={{
    fontSize: "58px",
    fontWeight: "700",
    lineHeight: "1.2",
    marginBottom: "20px",
    fontFamily: "Georgia, serif",
  }}
>
  <span
    style={{
      color: "#8B5E3C",
    }}
  >
    Discover
  </span>{" "}
  <span
    style={{
      color: "#8B5E3C",
    }}
  >
    Our Signature Dishes
  </span>
</h1>
        <p>
          Fresh ingredients, handcrafted recipes, and unforgettable
          flavors. Explore our carefully curated menu made with love
          at Daphnes Cafe.
        </p>

      </div>

      {/* Featured Dishes */}

      <div className="featured-grid">

        {featuredItems.map((item) => (
          <div className="food-card" key={item.name}>

            <img src={item.image} alt={item.name} />

            <div className="food-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <span>{item.price}</span>
            </div>

          </div>
        ))}

      </div>

      {/* Full Menu */}

      <div className="menu-container">

        {menuData.map((category) => (

          <div className="menu-category" key={category.category}>

            <h2 className="category-title">
              {category.category}
            </h2>

            {category.items.map((item) => (

              <div className="menu-item" key={item.name}>

                <img
                  src={item.image}
                  alt={item.name}
                  className="menu-image"
                />

                <div className="item-content">

                  <div className="title-price">

                    <h3>{item.name}</h3>

                    <span className="price">
                      {item.price}
                    </span>

                  </div>

                  <p>{item.description}</p>

                </div>

              </div>

            ))}

          </div>

        ))}

      </div>

    </section>
  );
}