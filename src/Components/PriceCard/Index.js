import styles from "./PriceCard.module.scss";
import MaticLogo from "./../../assets/icons/polygon_token.svg";

function PriceCard({ imgSrc, Title, Price }) {
  return (
    <div className={styles.PriceCard}>
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
