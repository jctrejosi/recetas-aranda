import React from "react";
import HeaderNavbar from "./components/HeaderNavbar/HeaderNavbar";
import Background from "./components/Background/Background";
import { links } from "./content";
import bgImage from "./assets/bcq.jpg";
import "./styles/main.scss";

function App() {
  return (
    <div className="main-container">
      <HeaderNavbar
        icon="https://dummyimage.com/300x60/000/fff"
        links={links}
      />
      <Background title="Recetas" subtitle="para todos" image={bgImage} />
    </div>
  );
}

export default App;
