import "./review.css";

const reviews = [
  {
    id: 1,
    name: "ANANYA ROY",
    rating: 5,
    review:
         "daphnes cafe is one of the best cafe in ghy,bcoz of it gives us a very premium vibe and tasty food item."
  },
  {
    id: 2,
    name: "PRITAM DAS",
    rating: 5,
    review:
      "Impressed by the quality of their items and  Coffee. Clean patio seating, attentive staff, and convenient location."
  },
  {
    id: 3,
    name: "BISHAL SHARMA",
    rating: 5,
    review:
      "A refined atmosphere ideal for business discussions and evening dining. Their Double Cheese Burger and Cappuccino are highly recommended."
  }
];

export default function Review() {
  return (
    <section className="review-section">

      <span className="review-tag">
        GUEST TESTIMONIALS
      </span>

      <h1>
        Guest Feedback <span>& Ratings</span>
      </h1>

      <div className="rating-box">
        ⭐⭐⭐⭐⭐
        <strong>4.6 / 5.0 Rating</strong>
        <span>| 300+ Customer Reviews</span>
      </div>

      <div className="review-container">

        {reviews.map((item) => (

          <div className="review-card" key={item.id}>

            <div className="quote">❝</div>

            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>

            <p>{item.review}</p>

            <hr />

            <div className="bottom">

              <div>
                <h3>{item.name}</h3>
                <small>Verified Visitor</small>
              </div>

              <span className="verified">
                ✔ VERIFIED
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}