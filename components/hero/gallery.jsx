import "./gallery.css"
import Image from "next/image";
export default function Gallery(){
    const gallery = [
  {
    id: 1,
    image: "/pastre.jpg",
    title: "Our Signature Pastree",
  },
  {
    id: 2,
    image: "/special.jpg",
    title: "Menu Special",
  },
  {
    id: 3,
    image: "/outer1.jpg",
    title: "Cozy Interior",
  },
  {
    id: 4,
    image: "/fav.jpg",
    title: "Most ordered",
  },
  {
    id: 5,
    image: "/upgrade.jpg",
    title: "Indoor Seating"
  },
  {
    id: 6,
    image: "/famouse.jpg",
    title: "Beverage Specials",
  },
    {
    id: 7,
    image: "/daphnes2.0.avif",
    title: "Rooftop Cafe",
  },
    {
    id: 8,
    image: "/coffe.jpg",
    title: "coffee Specials",
  },
  {
    id: 9,
    image: "/more.jpg",
    title: "Main course",
  },
  {
    id: 10,
    image: "/1more.jpg",
    title: "Delicious",
  },
  {
    id: 11,
    image: "/2more.jpg",
    title: "Cheat Meal",
  },
  {
    id: 12,
    image: "/3more.jpg",
    title: "Last on the gallery",
  },

     
];
return(
    <section className="gallery">

<div className="gallery-heading">
    <h1>MOMENTS WORTH <br/>SHARING✨</h1>
    <br/>
        <p>Discover the taste, comfort, and memories captured in every frame.💖</p>
</div>
     
     <div className="gallery-container">
     {gallery.map((ga,id)=>(
        <div className="gallery-cards"key={id}>
              <img src={ga.image}/>
              <p>{ga.title}</p>

            </div>
     ))}
     

     </div>



    </section>
)

}