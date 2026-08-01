"use client";

import "./menu.css";
import menuData from "./menudata";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Menu() {

  const [search, setSearch] = useState("");

  const featuredItems = [
    menuData[0].items[0],
    menuData[1].items[0],
    menuData[4].items[1],
  ];

  // All dishes
  const allItems = menuData.flatMap(category => category.items);

  // Suggestions
  const suggestions = search
    ? allItems.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  // Filter menu
  const filteredMenu = menuData
    .map(category => ({
      ...category,
      items: category.items.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter(category => category.items.length > 0);
return(
 <motion.section
  className="menu-page"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
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

  {/* Featured */}

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

  {/* Search */}

  <div className="search-box">

    <FaSearch className="search-icon" />

    <input
      type="text"
      placeholder="Search your favourite dish..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    {search && suggestions.length > 0 && (

      <div className="suggestions">

        {suggestions.map((item) => (

          <div
            key={item.name}
            className="suggestion-item"
            onClick={() => setSearch(item.name)}
          >
            {item.name}
          </div>

        ))}

      </div>

    )}

  </div>

  {/* Full Menu */}

 <div className="menu-container">

  {filteredMenu.map((category, index) => (

    <motion.div
      key={category.category}
      className="menu-category"
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -120 : 120,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
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

</div>

</motion.section>
);
}
  
  