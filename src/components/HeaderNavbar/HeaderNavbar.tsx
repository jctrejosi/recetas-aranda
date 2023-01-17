import { ReactElement } from "react";
import iconHome from "../../assets/icons/ic_home.svg";
import type { link } from "./types";
import "./styles.scss";

interface props {
  links: link[];
}

function HeaderNavbar({ links }: props): ReactElement {
  const items = links.map((item) => {
    return (
      <li
        key={`navbar_header_${item.text}`}
        className={`header__item ${item.active ? "header__item--active" : ""}`}
      >
        {item.text}
      </li>
    );
  });
  return (
    <div className="header">
      <p className="header__slogan--primary">Recipe</p>
      <p className="header__slogan--secondary">App</p>
      <ul className="header__items">{items}</ul>
      <img src={iconHome} alt="home" className="header__home" />
    </div>
  );
}

export default HeaderNavbar;
