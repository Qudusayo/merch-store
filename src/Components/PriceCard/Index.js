import styles from "./PriceCard.module.scss";
import { useNavigate } from "react-router-dom";
import MaticLogo from "./../../assets/icons/polygon_token.svg";

function PriceCard({ imgSrc, Title, Price }) {
  let navigate = useNavigate();

  return (
    <div className={styles.PriceCard} onClick={() => navigate("/products/1")}>
      <img src={imgSrc} alt={Title} />
      <span>{Title}</span>
      <span>
        <img src={MaticLogo} alt="PolygonLogo" width={"25em"} />
        {Price} MATIC
      </span>
    </div>
  );
}

export default PriceCard;
