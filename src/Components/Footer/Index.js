import styles from "./Footer.module.scss";
import moralisBadge from "./../../assets/icons/moralis_glass_badge.svg";

import { RiTwitterFill, RiYoutubeFill } from "react-icons/ri";

function Footer() {
  return (
    <div className={styles.Footer}>
      <h4>Need further support?</h4>
      <p>Reach out to our Moralis Support team at hello@moralis.io</p>
      <div>
        <a target="_blank" href="https://twitter.com/moralisWeb3">
          <RiTwitterFill className={styles.icons} />
        </a>
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCgWS9Q3P5AxCWyQLT2kQhBw"
        >
          <RiYoutubeFill className={styles.icons} />
        </a>
      </div>
      <span>
        <small>© 2022, Moralis Merch Store</small>
      </span>
      <img src={moralisBadge} alt="Moralis Badge" />
    </div>
  );
}

export default Footer;
