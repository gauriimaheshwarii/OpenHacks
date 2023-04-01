import React from "react";
import Products from "./Products";
const Home = () => {
  return (
    <div className="hero">
      <div class="card text-bg-dark border-0">
        <img src="/assets/bg.jpg" class="card-img" alt="bg" height="350px" />
        <div className="container">
          <div class="card-img-overlay d-flex flex-column justify ">
            <h5 class="card-title display-3 fw-bolder mb-0">
              Are you ready to make a difference? Take the Sustainable Oath
              today!
            </h5>
            <p class="card-text lead fs-2" style={{ color: "brown" }}>
              Turn your trash into treasure!
            </p>
            <p class="text" style={{ color: "black" }}>
              We plant a tree for every product you buy! Send in your recyclable
              products and watch your savings soar. Our trusted partner will
              even come to your doorstep to collect your items. Don't miss out
              on this opportunity to save and make a positive impact on the
              environment. Earn points and get free deliverables and coupons for
              sending us your recyclable items.
            </p>

            <blockquote class="blockquote mb-0">
              <p>
                “The best way to predict the future is to create it.” - Peter
                Drucker
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};
export default Home;
