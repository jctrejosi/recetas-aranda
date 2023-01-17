import { ReactElement } from "react";
import "./styles.scss";

interface props {
  image: string;
  slogan: string;
}

function Footer({ image, slogan }: props): ReactElement {
  return (
    <div className="footer">
      <p className="footer__slogan">{slogan}</p>
      <img src={image} alt="" className="footer__image" />
    </div>
  );
}

export default Footer;
