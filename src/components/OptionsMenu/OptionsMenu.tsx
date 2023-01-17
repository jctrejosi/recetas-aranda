import { ReactElement } from "react";
import "./styles.scss";
import type { option } from "./types";

interface props {
  options: option[];
}

function OptionsMenu({ options }: props): ReactElement {
  const items = options.map((item) => {
    return (
      <li key={`${item.text}_option`} className="options__item">
        <img src={item.image} alt="" className="options__item--image" />
        <p className="options__item--text">{item.text}</p>
      </li>
    );
  });
  return (
    <div className="options">
      <ul className="options__list">{items}</ul>
    </div>
  );
}

export default OptionsMenu;
