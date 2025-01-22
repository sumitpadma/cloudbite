import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your food here..</h2>
        <p>
          A food delivery website provides a user-friendly platform for
          customers to browse local restaurants, view menus, and easily place
          orders from home. With real-time order tracking and secure payment
          options, it ensures convenient and timely delivery of a variety of
          delicious meals, enhancing dining experiences.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
