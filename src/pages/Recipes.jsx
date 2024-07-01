import React from 'react'
import RecipeCard from '../components/RecipeCard';
import recipeOneImage from "../assets/images/recipe1.png";
import recipeTwoImage from "../assets/images/squash-curry.png";
import recipeThreeImage from "../assets/images/rancheros.png";
import recipeFourImage from "../assets/images/cake.png";

const Recipes = () => {
  return (
    <div className="px-10 py-10">
      <h4>Search</h4>
      <div>
        <h4>What is in your kitchen?</h4>
        <p>Enter some ingredients</p>
      </div>
      <div>

        <i>MG</i>
        <input type="text" />
      </div>
      <div className="grid grid-cols-2 gap-5  ">
        <RecipeCard
          image={recipeOneImage}
          name="Chorizo & mozzarella gnocchi bake"
        />
        <RecipeCard
          image={recipeTwoImage}
          name="Coconut & squash curry"
        />
        <RecipeCard
          image={recipeThreeImage}
          name="Huevos Rancheros"
        />
        <RecipeCard
          image={recipeFourImage}
          name="Black forest Gateau"
        />
      </div>
    </div>
  );
}

export default Recipes() {
  return (
    <>
      <div className="px-10 py-10">
      </div>
      <BottomNavigation />
    </>

  );
}