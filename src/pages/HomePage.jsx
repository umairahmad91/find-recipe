import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
import CardRecipe from "../Components/CardRecipe";
import { Link } from "react-router";

function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loadin, setLoadin] = useState(true);
  const [total, setTotal] = useState(0);
  const [searchquery, setSearchquery] = useState("");

  async function fetchrecipies(skipCount, query) {
    setLoadin(true);
    try {
      let url = `https://dummyjson.com/recipes?limit=6&skip=${skipCount}`;
      if (query) {
        url = `https://dummyjson.com/recipes/search?limit=6&skip=${skipCount}&q=${query}`;
      }
      const { data } = await axios.get(url);
      //  setRecipes(data.recipes)
      setRecipes((prev) =>
        skipCount == 0 ? data.recipes : [...prev, ...data.recipes],
      );
      setTotal(data.total);
      setLoadin(false);
      // console.log(data)
    } catch (error) {}
  }

  useEffect(() => {
    fetchrecipies(0);
  }, []);
  if (loadin) {
    return (
      <div className="loading">
        <p>Loding...</p>
      </div>
    );
  }

  function handleSearch(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    let query = form.get("query").trim();
    setSearchquery(query);
    if (query) {
      fetchrecipies(0, query);
    }
  }

  return (
    <>
      <div className="search">
        <form action="" onSubmit={handleSearch}>
          <input type="text" placeholder="search recipe..." name="query" />
          <button>Search</button>
        </form>
      </div>
      
  
        {recipes.length === 0 && (
          <div className="recipe_not_found">
          <p>{`No recipe found for "${searchquery}"`}</p><br />
      </div>

        )}

      <div className="cardcontainer">
        {recipes.map((recipe) => (
          <CardRecipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
      {recipes.length < total && (
        <div className="loadrmore">
          <button onClick={() => fetchrecipies(recipes.length, searchquery)}>
            Load more
          </button>
        </div>
      )}
    </>
  );
}

export default HomePage;
