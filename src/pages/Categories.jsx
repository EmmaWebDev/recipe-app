import React, { useState } from 'react'
import { HomeIcon, PlusCircleIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import breakfastImage from "../assets/images/pancake.png";
import lunchImage from "../assets/images/sandwich.png";
import drinksImage from "../assets/images/cocktail.png";
import pastasImage from "../assets/images/spagetti.png";
import saladsImage from "../assets/images/salad.png";
import dessertsImage from "../assets/images/birthdaycake.png";
import soupsImage from "../assets/images/soup.png";
import CategoryTile from '../components/CategoryTile';


export default function Categories() {
  //Define a state to store categories
  const [categories, setCategories] = useState([]);
  //Define a function to get categories
  const getCategories = async () => {
    const response = await axios.get(`${import.meta.env.VITE_RECIPES_API}/categories`);
    setCategories(response.data);
  }
  //Fetch data with UseEffect
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <div className="px-[42px] py-[70px] mb-[96px]">
        <h3 className="text-[27px] text-center font-semibold mb-[16px]">
          Categories
        </h3>
        <div className="flex flex-col gap-[13px]">
          {categories.map(category => (
            <CategoryTile
              key={category.id}
              name={category.name}
              image={`${import.meta.env.VITE_RECIPES_API}/${category.image}`} />

          ))}


        </div>
        
      </div>
      <BottomNavigation />
    </>
  );
};
