import { ReactElement, useState } from "react";
import star from "../../assets/icons/ic_star.svg";
import heart from "../../assets/icons/ic-favorite.svg";
import "./styles.scss";
import type { card } from "./types";

interface props {
  cards: card[];
  title: string;
}

function RecipesCards({ cards, title }: props): ReactElement {
  const list = cards.map((item) => {
    const [show, cardShow] = useState(false);
    const score = item.healthScore / 2;
    return (
      <li
        key={item.id}
        className={`cards__item ${show}? cards__item--open : ""`}
        onMouseEnter={() => cardShow(true)}
        onMouseLeave={() => cardShow(false)}
      >
        <div className="cards__item--containerImg">
          <img src={item.image} alt="" className="cards__item--image" />
        </div>
        <div className="cards__item--titles">
          <p className="cards__item--title">{item.title}</p>
          <p className="cards__item--subtitle">{item.sourceName}</p>
        </div>
        <div className="cards__item--calification">
          <img src={star} alt="star" className="cards__item--star" />
          <p className="cards__item--score">{score.toFixed(1)}</p>
          <img src={heart} alt="heart" className="cards__item--heart" />
        </div>
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
