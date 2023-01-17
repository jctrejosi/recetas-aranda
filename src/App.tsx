import React from "react";
import axios from "axios";
import HeaderNavbar from "./components/HeaderNavbar/HeaderNavbar";
import Background from "./components/Background/Background";
import { links } from "./content";
import bgImage from "./assets/bcq.jpg";
import "./styles/main.scss";

const fetchRecipes = () => {
  axios
    .get(
      "https://api.spoonacular.com/recipes/random?apiKey=c142b191cf9549ba886935dd216a4efc"
    )
    .then((response) => {
      console.log(response.data);
    })
    .catch((e) => console.log(e));
};

function App() {
  fetchRecipes();
  return (
    <div className="main-container">
      <HeaderNavbar links={links} />
      <Background title="Recetas" subtitle="para todos" image={bgImage} />
    </div>
  );
}

export default App;
