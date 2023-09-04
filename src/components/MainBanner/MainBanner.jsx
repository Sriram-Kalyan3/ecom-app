import styles from "./MainBanner.module.css";
import CardItem from "../UI/Card/CardItem";
import { useState } from "react";
const MainBanner = () => {
  let sampleProducts = [
    {
      Title: "ICE ROLLER",
      Price: 299,
      Photo:
        "https://www.southernliving.com/thmb/8prSS1F2gVb4QgfNh9fZ4x7fpvw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ice-roller-a27ec68b7dbb495d906fe3994e8a2e7e.jpg",
    },
  ];

  const [products, setProducts] = useState(sampleProducts);
  return (
    <div className={styles["body-section"]}>
      <section className={styles["sec"]}>
        <div className={styles["quote"]}>
          BUY WITH US
          <br />
          <b>BUY LARGE </b>
          AND LIVE LARGE
        </div>
      </section>
      <section>
        {products.map((product) => (
          <CardItem productTitle={product.Title} productPrice={product.Price} productImage={product.Photo} />
        ))}
      </section>
    </div>
  );
};

export default MainBanner;
