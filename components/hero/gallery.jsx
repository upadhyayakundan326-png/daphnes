import "./gallery.css"
import Image from "next/image";
export default function Gallery(){
    

const dishes = [
  {
    id: 1,
    title: "Truffle Mushroom Pasta",
    price: "₹450",
    description: "Creamy fettuccine infused with wild mushrooms, black truffle oil, and freshly grated parmesan.",
    image: "trufle.jpg",
  },
  {
    id: 2,
    title: "Avocado & Salmon Toast",
    price: "₹520",
    description: "Artisanal sourdough toasted, layered with smashed avocado, smoked salmon, and poached egg.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Wood-Fired Margherita",
    price: "₹380",
    description: "Classic Neapolitan pizza with fresh mozzarella, San Marzano tomato sauce, and fragrant basil.",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=800&auto=format&fit=crop"
  },
  {       id:4,
        title: "Paneer Tikka",
        image: "/tika.jpg",
        description: "Marinated cottage cheese grilled with Indian spices.",
        price: "₹249",
      },
      {  id:5,
        name: "Crispy Chicken",
        image: "/chic.jpg",
        description: "Golden fried chicken served with spicy dip.",
        price: "₹299",
      },
      {  id:6,
        name: "Veg Spring Roll",
        image: "/roll.jpg",
        description: "Crispy rolls stuffed with fresh vegetables.",
        price: "₹199",
      },
      
];


  return (
    <section className="signature-section">
      <p className="section-subtitle">Crafted Flavours</p>
      <h2 className="section-title">Our Signature Dishes</h2>

      <div className="dishes-grid">
        {dishes.map((dish) => (
          <div key={dish.id} className="dish-card">
            <div className="image-wrapper">
              <img
                src={dish.image}
                alt={dish.title}
                className="dish-image"
              />
            </div>
            
            <div className="dish-info">
              <div className="dish-header">
                <h3 className="dish-title">{dish.title}</h3>
                <span className="dish-price">{dish.price}</span>
              </div>
              <p className="dish-description">{dish.description}</p>
           
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

   