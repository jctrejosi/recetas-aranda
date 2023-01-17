import { ReactElement } from "react";
import "./styles.scss";

interface props {
  image: string;
  title: string;
  subtitle: string;
}

function Background({ image, title, subtitle }: props): ReactElement {
  return (
    <div className="background">
      <img src={image} alt="" className="background__image" />
      <div className="background__caption">
        <p className="background__title">{title}</p>
        <p className="background__subtitle">{subtitle}</p>
      </div>
    </div>
  );
}

export default Background;
