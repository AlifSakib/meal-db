import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Food = ({ meal, addToCart }) => {
  const { strMeal, strMealThumb, idMeal } = meal;
  return (
    <div className="w-56 h-[350px] relative bg-slate-400">
      <img src={strMealThumb} alt="" />
      <div className="mt-2">
        <h2>{strMeal}</h2>
        <p>{idMeal}</p>
      </div>
      <div className="absolute bottom-0 w-full text-center bg-red-500 text-white py-1">
        <button onClick={() => addToCart(meal)}>
          <p>Add To Cart</p>
          <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Food;
