import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Shop = () => {
  return (
    <div>
      <h2 className="titleShopping">PACKAGE</h2>
      <div className="picShopping">
        <img src="pic.jpg" alt="our package" width={"300px"} />
      </div>
      <div className="dokme">
        <Link to="/items">
          <button className="neon-button">CHOOSE YOUR ITEMS</button>
        </Link>
      </div>
    </div>
  );
};

export default Shop;
