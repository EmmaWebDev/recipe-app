import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Recipes from "./pages/Recipes";
import Welcome from "./pages/Welcome";
import Categories from "./pages/Categories";
import NewRecipe from "./pages/NewRecipe";


const router = createBrowserRouter([
  { path: '/', element: <Welcome /> },
  { path: '/recipes', element: <Recipes /> },
  { path: '/categories', element: <Categories /> },
  { path: '/favorites', element: <Favorites /> },
  { path: '/recipes/new', element: <NewRecipe /> },


]);

function App() {

  return (
    <>
      <RouterProvider router={router} />


    </>

  )
}

export default App

