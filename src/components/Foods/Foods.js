import React, { useEffect, useState } from "react";
import Food from "../Food/Food";
import Order from "../Order/Order";

const Foods = () => {
  const [meals, setMeals] = useState([]);
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=b`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  const addToCart = (meal) => {
    const newOrder = [...orders, meal];
    setOrder(newOrder);
  };
  return (
    <div className="grid grid-cols-4 mt-10 font-poppins">
      <div className="grid grid-cols-3 col-span-3 gap-4">
        {meals.map((meal) => (
          <Food meal={meal} key={meal.idMeal} addToCart={addToCart}></Food>
        ))}
      </div>
      <div className="grid col-span-1 text-center bg-pink-400 sticky top-0 h-96">
        <h3 className="font-bold my-6">Order Summary</h3>
        <div>
          {orders.map((order, index) => (
            <Order order={order} key={index}></Order>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Foods;
<h3>Food Container</h3>;
