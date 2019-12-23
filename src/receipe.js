import React from "react";
import "./recipe.css";

const recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipes">
      <h1>{title}</h1>
      <p>{calories}</p>
      <img className="image"src={image} alt="" />
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
    </div>
  );
};

export default recipe;
