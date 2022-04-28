import PriceCard from "../../Components/PriceCard/Index";
import styles from "./Home.module.scss";

import Tshirt from "./../../assets/merch_images/T-shirt.jpg";
import Hoodie from "./../../assets/merch_images/Hoodie.jpg";
import Mug from "./../../assets/merch_images/Mug.jpg";
import Sticker from "./../../assets/merch_images/moralis-stickers.jpg";
import Bottle from "./../../assets/merch_images/stainless-bottle.jpg";
import MageShirt from "./../../assets/merch_images/mage-shirt.jpg";
import Buidler from "./../../assets/merch_images/buidler-sticker.jpg";
import Benie from "./../../assets/merch_images/beanie.jpg";
import Cap from "./../../assets/merch_images/cap.jpg";
import MmousePad from "./../../assets/merch_images/mmouse-pad.jpg";
import BucketHat from "./../../assets/merch_images/bucket-hat.jpg";
import Socks from "./../../assets/merch_images/socks.jpg";
import TshirtDress from "./../../assets/merch_images/t-shirt-dress.jpg";
import MousePad from "./../../assets/merch_images/mouse-pad.jpg";

function Home() {
  return (
    <div className={styles.Home}>
      <PriceCard
        Price={21.0}
        imgSrc={Tshirt}
        Title="Classic Moralis - with love from Developers T-shirt"
      />
      <PriceCard
        Price={57.0}
        imgSrc={Hoodie}
        Title="Classic Moralis pullover hoodie"
      />
      <PriceCard Price={10.0} imgSrc={Mug} Title="White glossy mug" />
      <PriceCard Price={3.5} imgSrc={Sticker} Title="Moralis stickers" />
      <PriceCard
        Price={27.0}
        imgSrc={Bottle}
        Title="Moralis Stainless Steel Water Bottle"
      />
      <PriceCard
        Price={23.5}
        imgSrc={MageShirt}
        Title="The Ultimate Moralis Mage T-shirt"
      />
      <PriceCard Price={7.5} imgSrc={Buidler} Title="Buidler stickers" />
      <PriceCard Price={19.0} imgSrc={Benie} Title="Moralis Beanie" />
      <PriceCard Price={26.5} imgSrc={Cap} Title="Moralis Cap" />
      <PriceCard Price={14.0} imgSrc={MmousePad} Title="Moralis Mouse pad" />
      <PriceCard
        Price={27.0}
        imgSrc={BucketHat}
        Title="Old School Bucket Hat"
      />
      <PriceCard Price={14.0} imgSrc={Socks} Title="Moralis Socks" />
      <PriceCard
        Price={29.0}
        imgSrc={TshirtDress}
        Title="Moralis t-shirt dress"
      />
      <PriceCard Price={14.0} imgSrc={MousePad} Title="Moralis Mouse Pad" />
    </div>
  );
}

export default Home;
