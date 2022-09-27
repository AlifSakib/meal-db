import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between font-poppins bg-orange-400 px-4 py-6">
      <div>
        <h3 className="font-bold text-2xl">Meal-DB</h3>
      </div>
      <div className="space-x-6">
        <a href="/Home">Home</a>
        <a href="/Order">Order</a>
        <a href="/Cart">Cart</a>
        <a href="/Contact">Contact</a>
      </div>
    </div>
  );
};

export default Header;
