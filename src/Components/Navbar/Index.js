import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import moralisMerchLogo from "./../../assets/icons/moralis_merch.svg";

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.NavbarLogo}>
        <img src={moralisMerchLogo} alt="Moralis Merch logo" />
      </div>
      <div className={styles.NavbarLink} >
        <Link to={"/"}>Home</Link>
        <Link to={"/collections/all"}>Catalog</Link>
        <Link to={"/apps/help-center"}>FAQ</Link>
      </div>
    </nav>
  );
}

export default Navbar;
