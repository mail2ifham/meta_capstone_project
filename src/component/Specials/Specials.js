import React from "react";
import './Specials.css'
import { MdDeliveryDining } from "react-icons/md";
import  greekSalad from "../../assets/greek_salad.jpg"
import  bruchetta from "../../assets/bruchetta.png"
import  lemonDessert from "../../assets/lemon_dessert.jpg"


function Specials() {
  return (
    <section className="Specials">
      <div className="specials-container">
        <div className="specials-title">
          <h2>This week specials!</h2>
          <button>Online Menu</button>
        </div>
        <div className="specials-card-container">
          <div className="specials-card">
            <img src={greekSalad} alt="greek salad" />
            <div className="specials-card-details">
              <h3>Greek salad <span>$12.99</span></h3>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and our
                Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.

              </p>
              <p>
                Order a delivery
                <span>
                  <MdDeliveryDining />
                </span>
              </p>
            </div>
          </div>
          <div className="specials-card">
            <img src={bruchetta} alt="bruchetta " />
            <div className="specials-card-details">
              <h3>Bruchetta <span>$5.99</span></h3>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <p>
                Order a delivery
                <span>
                  <MdDeliveryDining />
                </span>
              </p>
            </div>
          </div>
          <div className="specials-card">
            <img src={lemonDessert} alt="Lemon Dessert" />
            <div className="specials-card-details">
              <h3>Lemon Dessert <span>$5.00</span></h3>
              <p>
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <p>
                Order a delivery
                <span>
                  <MdDeliveryDining />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specials;
