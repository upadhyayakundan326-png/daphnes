import "./review.css";
import Image from "next/image";

export default function Review() {

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    rating: 5,
    comment: "Quality bahut achhi hai, product bilkul image jaisa mila."
  },
  {
    id: 2,
    name: "Amit Das",
    rating: 4,
    comment: "Delivery fast thi aur packaging bhi kaafi achhi thi."
  },
  {
    id: 3,
    name: "Priya Singh",
    rating: 5,
    comment: "Amazing product! Quality aur fitting dono perfect hai."
  },
  {
    id: 4,
    name: "Rohan Verma",
    rating: 4,
    comment: "Price ke hisaab se product value for money hai."
  },
  {
    id: 5,
    name: "Neha Gupta",
    rating: 5,
    comment: "Customer service bahut helpful thi. Highly recommended."
  },
  {
    id: 6,
    name: "Arjun Patel",
    rating: 3,
    comment: "Product thik tha, lekin delivery thodi late hui."
  },
  {
    id: 7,
    name: "Karan Mehta",
    rating: 5,
    comment: "Bahut comfortable aur premium quality ka product hai."
  },
  {
    id: 8,
    name: "Sneha Roy",
    rating: 4,
    comment: "Design bahut pasand aaya, overall experience acha raha."
  },
  {
    id: 9,
    name: "Vikas Kumar",
    rating: 5,
    comment: "Second time order kiya aur experience phir se great raha."
  },
  {
    id: 10,
    name: "Anjali Sharma",
    rating: 4,
    comment: "Product acha hai, quality expected se better mili."
  }
];





  return (
    <section className="review" id="reviews"
>
  <div className="txt">

    <h1>BREWING, </h1>
    <br/>
        <h1>HAPPINESS💕</h1>
    
        
       
        
      <h2>Loved by Coffee Lovers

Our guests enjoy the perfect blend of great taste, cozy ambience, and memorable moments.
Every visit brings us closer to creating a better cafe experience.</h2>

     <image src="daphnes2.0.avif" alt="daphnes" />
        </div>
     <div className="container">
      {reviews.map((user,id)=>(
        <div className="card" key={id}>
            <h3>{user.name}</h3>
            <div><p>{user.rating}⭐</p></div>
             <div><p>{user.comment}</p></div>

          </div>
))}
      </div>
      </section>
  )}