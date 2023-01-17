import { ReactElement } from "react";
import "./styles.scss";
import type { card } from "./types";

interface props {
  cards: card[];
  title: string;
}

function RecipesCards({ cards, title }: props): ReactElement {
  const list = cards.map((item) => {
    return (
      <li key={item.id} className="cards__item">
        <img src={item.image} alt="" className="cards__item--image" />
      </li>
    );
  });
  return (
    <div className="cards">
      <p className="cards__title">{title}</p>
      <ul className="cards__list">{list}</ul>
    </div>
  );
}

export default RecipesCards;
