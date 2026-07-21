
"use client";
import "./menu.css";
import menuData from "./menudata";
import Image from "next/image";
import { motion } from "framer-motion";



export default function Menu(){

  const featuredItems = [
    menuData[0].items[0],
    menuData[1].items[0],
    menuData[4].items[1],
  ];

  return (
    <motion.section
  className="menu-page"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8}}
  viewport={{ once: false }}
>
      {/* Header */}

      <div className="menu-header">

        <div className="menu-heading"></div>

        <h1
          style={{
            fontSize: "58px",
            fontWeight: "700",
            lineHeight: "1.2",
            marginBottom: "20px",
            fontFamily: "Georgia, serif",
          }}
        >
          <span style={{ color: "#8B5E3C" }}>
            Discover
          </span>{" "}
          <span style={{ color: "#8B5E3C" }}>
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

            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={280}
              className="food-image"
            />

            <div className="food-info">

              <h3>{item.name}</h3>

              <p>{item.description}</p>

              <span>{item.price}</span>

            </div>

          </div>

        ))}

      </div>

      {/* Full Menu */}

      <motion.div
       className="menu-container"
       
       
       >

        {menuData.map((category) => (

          <motion.div
            className="menu-category"
             initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
 viewport={{ once: false, amount: 0.3 }}
            key={category.category}

            
          >

            <h2 className="category-title">
              {category.category}
            </h2>

            {category.items.map((item) => (

              <div
                className="menu-item"
                key={item.name}
                
              >

                <Image
                  src={item.image}
                  alt={item.name}
                  width={350}
                  height={250}
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

          </motion.div>

        ))}

      </motion.div>

    </motion.section>
  );
}