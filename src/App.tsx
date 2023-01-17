import React from "react";
import axios from "axios";
import HeaderNavbar from "./components/HeaderNavbar/HeaderNavbar";
import Background from "./components/Background/Background";
import Footer from "./components/Footer/Footer";
import Options from "./components/OptionsMenu/OptionsMenu";
import Cards from "./components/RecipesCards/RecipesCards";
import { links, options } from "./content";
import bgImage from "./assets/bcq.jpg";
import footerImage from "./assets/Grupo7610.png";
import "./styles/main.scss";
import { useAppDispatch, useAppSelector } from "./hooks";
import { updateRecipes, setRecipes } from "./store/recipes";

const number = 4;
const key = "c142b191cf9549ba886935dd216a4efc";

function App() {
  const dispatch = useAppDispatch();

  axios
    .get(
      `https://api.spoonacular.com/recipes/random?number=${number}&apiKey=${key}`
    )
    .then((response) => {
      dispatch(updateRecipes(response.data.recipes));
    })
    .catch((e) => console.log(e));

  const recetas = useAppSelector(setRecipes);

  return (
    <div className="main-container">
      <HeaderNavbar links={links} />
      <Background title="Recetas" subtitle="para todos" image={bgImage} />
      <Options options={options} />
      <Cards title="Nuevas Recetas" cards={recetas} />
      <Footer slogan="Con el Patrocinio de" image={footerImage} />
    </div>
  );
}

export default App;
