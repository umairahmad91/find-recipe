import React from "react";
import { Link } from "react-router";
import { FcRating } from "react-icons/fc";
import { MdOutlineAccessTime } from "react-icons/md";
function CardRecipe({ recipe }) {
  const totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;
  return (
    <div className="card">
      <Link to={`/recipedetail/${recipe.id}`} className="link">
        <div className="image">
          <img src={recipe.image} alt="" />
        </div>
        <div className="detail">
          <h3>{recipe.name}</h3>
          <p>
            {recipe.cuisine} - {recipe.difficulty}
          </p>
          <div className="rating_time">
            <span>
              {" "}
              <FcRating /> {recipe.rating}
            </span>
            <span>
              {" "}
              <MdOutlineAccessTime />
              {totalTime}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardRecipe;
