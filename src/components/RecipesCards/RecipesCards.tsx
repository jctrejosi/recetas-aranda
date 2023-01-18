import { ReactElement, useState } from "react";
import star from "../../assets/icons/ic_star.svg";
import heart from "../../assets/icons/ic-favorite.svg";
import portion from "../../assets/icons/ic_portion.svg";
import time from "../../assets/icons/ic_time.svg";
import chef from "../../assets/icons/ic_chef.svg";
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
        className="cards__item"
        onMouseEnter={() => cardShow(true)}
        onMouseLeave={() => cardShow(false)}
      >
        <div className="cards__item--containerImg">
          <img src={item.image} alt="" className="cards__item--image" />
        </div>
        <div className={`cards__item--titles ${show ? "close" : "open"}`}>
          <p className="cards__item--title">{item.title.slice(0, 15)}</p>
          <p className="cards__item--subtitle">{item.sourceName}</p>
        </div>
        <div className={`cards__item--calification ${show ? "close" : "open"}`}>
          <img src={star} alt="star" className="cards__item--star" />
          <p className="cards__item--score">{score.toFixed(1)}</p>
          <img src={heart} alt="heart" className="cards__item--heart" />
        </div>
        <div className={`cards__item--content ${show ? "open" : "close"}`}>
          <div className="cards__item--section">
            <img
              src={portion}
              alt="portion"
              className="cards__item--section-ico"
            />
            <p className="cards__item--section-title">Tamaño de la porción</p>
            <p className="cards__item--section-text">
              {item.servings} raciones
            </p>
          </div>
          <div className="cards__item--section">
            <img src={time} alt="time" className="cards__item--section-ico" />
            <p className="cards__item--section-title">Tiempo de preparación</p>
            <p className="cards__item--section-text">
              {item.readyInMinutes} minutos
            </p>
          </div>
          <div className="cards__item--section">
            <img
              src={chef}
              alt="dificult"
              className="cards__item--section-ico"
            />
            <p className="cards__item--section-title">Dificultad</p>
            {item.lowFodmap ? (
              <p className="cards__item--section-text">difícil</p>
            ) : (
              <p className="cards__item--section-text">fácil</p>
            )}
          </div>
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
