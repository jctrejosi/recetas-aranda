import React from "react";
import HeaderNavbar from "./components/HeaderNavbar/HeaderNavbar";
import { links } from "./content";

function App() {
  return (
    <HeaderNavbar icon="https://dummyimage.com/300x60/000/fff" links={links} />
  );
}

export default App;
