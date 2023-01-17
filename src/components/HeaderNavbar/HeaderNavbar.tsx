import { ReactElement } from "react";
import iconHome from "../../assets/icons/ic_home.svg";
import type { link } from "./types";
import "./styles.scss";

interface props {
  icon: string;
  links: link[];
}

function HeaderNavbar({ icon, links }: props): ReactElement {
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
      <img src={icon} alt="Logo de la empresa" className="header__logo" />
      <ul className="header__items">{items}</ul>
      <img src={iconHome} alt="home" className="header__home" />
    </div>
  );
}

export default HeaderNavbar;
