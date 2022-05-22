import React from "react";
import styles from "./Product.module.scss";
import Gallery from "./../../Components/Gallery/Index";
import MaticLogo from "./../../assets/icons/polygon_token.svg";

import Tshirt from "./../../assets/merch_images/T-shirt.jpg";

function Product() {
  return (
    <div className={styles.Product}>
      <div className={styles.ProductImages}>
        <Gallery mainSrc={Tshirt} />
      </div>
      <div className={styles.ProductInfo}>
        <h1>Classic Moralis - with love from Developers T-shirt</h1>
        <h3>
          <img src={MaticLogo} alt="PolygonLogo" width={"25em"} />
          51 MATIC
        </h3>
        <span>Tax Included.</span>
      </div>
    </div>
  );
}

export default Product;
