import RecipeCard from "../components/RecipeCard"
import recipe1Image from "../assets/images/recipe-1.png"
import recipe2Image from "../assets/images/recipe-2.png"
import recipe3Image from "../assets/images/recipe-3.png"
import recipe4Image from "../assets/images/recipe-4.png"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

const Recipes = () => {
  return (
    <div className="px-10 py-10 flex flex-col gap-y-10">
      <h4 className="text-center text-2xl font-bold font-sans">Search</h4>

      <div className="flex flex-col gap-y-2">
        <h4 className="text-2xl font-bold">What is in your kitchen?</h4>
        <p className="text-xl font-light">Enter some ingredients</p>
      </div>

      <div
        className="flex items-center gap-x-4 bg-white h-10 rounded-lg border border-[#00b4bf] hover:border-4 max-w-md"
      >
        <MagnifyingGlassIcon className="w-6 h-6 ml-3 text-[#00b4bf]" />

        <input
          type="text"
          className="flex-grow bg-transparent border-none focus:outline-none"
          placeholder="Type your ingredients"
        />
      </div>

      <div className="grid grid-cols-2 gap-5">
        <RecipeCard image={recipe1Image} name="Chorizo & mozzarella gnocchi bake" />
        <RecipeCard image={recipe2Image} name="Coconut & squash curry" />
        <RecipeCard image={recipe3Image} name="Huevos Rancheros" />
        <RecipeCard image={recipe4Image} name="Black forest Gateau" />
      </div>
    </div>
  );
};

export default Recipes;

