import React from "react";

const Order = ({ order }) => {
  console.log(order.strMeal);
  return (
    <div>
      <h1 className="text-start">{order.strMeal}</h1>
    </div>
  );
};

export default Order;
