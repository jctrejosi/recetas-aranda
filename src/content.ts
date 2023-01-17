import vegetarian from "./assets/icons/ic_vegetarian.svg";
import main from "./assets/icons/ic_main.svg";
import cake from "./assets/icons/ic_cake.svg";
import fast from "./assets/icons/ic_fast-food.svg";
import kids from "./assets/icons/ic_kids.svg";
import soup from "./assets/icons/ic_soup.svg";

export const links = [
  {
    text: "Home",
    route: "",
    active: true,
  },
  {
    text: "Vegetarianos",
    route: "",
    active: false,
  },
  {
    text: "Platos Principales",
    route: "",
    active: false,
  },
  {
    text: "Tortas",
    route: "",
    active: false,
  },
  {
    text: "Comida Rápida",
    route: "",
    active: false,
  },
  {
    text: "Menú Niños",
    route: "",
    active: false,
  },
  {
    text: "Sopas",
    route: "",
    active: false,
  },
];

export const options = [
  {
    image: vegetarian,
    text: "Vegetarianos",
  },
  {
    image: main,
    text: "Principales",
  },
  {
    image: cake,
    text: "Tortas",
  },
  {
    image: fast,
    text: "Rápida",
  },
  {
    image: kids,
    text: "Menú Niños",
  },
  {
    image: soup,
    text: "Sopas",
  },
];

export default null;
