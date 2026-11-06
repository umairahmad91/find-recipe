import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router'

function Recipedetail() {
const [recipe,setRecipe]=useState([])
const [loading,setLoading]=useState(true)
const {id}=useParams()
async function fetchrecipe(params) {
 try{
   const {data}=await axios.get(`https://dummyjson.com/recipes/${id}`)
   setRecipe(data)
   setLoading(false)
  console.log(data)
 }
 catch (error) {}
}

useEffect(()=>{
  fetchrecipe()
},[])
if(loading){
  return <div className="loading"><p >Loding...</p></div>
}

  return (
    <div className='recipe_detail'>
      <Link to="/">Back to Home</Link>
      <div className="image_detail">
       
          <img src={recipe.image} alt="" />
          <div className="content">
        <div className="recipe_content">
          <h1>{recipe.name}</h1>
          <p>{recipe.cuisine} - {recipe.difficulty}</p>
          <p><strong>{recipe.rating}</strong></p>
        </div>
         <div className="time">
        <div ><p><strong>Prep time </strong> {recipe.prepTimeMinutes}</p>
        <p><strong>Cook time </strong> {recipe.cookTimeMinutes}</p></div>
        <div ><p><strong> Saving</strong> {recipe.servings}</p>
        <p><strong>Calories </strong> {recipe.caloriesPerServing}</p></div>
      </div>
         <p className='meal_type'>Meal type : {recipe.mealType?.join(", ")}</p>
        <p className='tags'>Tags : {recipe.tags?.join(", ")}</p>
        </div>
      </div>
      <div className="ingredients_instruction">
        <div className="ingredient">
          <h2>Ingredients</h2>
          <ul>
           {recipe.ingredients?.map((ingredient,idx)=> <li key={idx}>{ingredient}</li>)}
          </ul>
        </div>
        <div className="instruction">
          <h2>Instruction</h2>
            <ol type='number'>
              {recipe.instructions?.map((instruction,idx)=> <li key={idx}>{instruction}</li>)}
            </ol>
        </div>
      </div>
     
    </div>
  )
}

export default Recipedetail
