import styles from "./CardItem.module.css";

const CardItem = ({ productTitle, productPrice, productImage }) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-header"]}>
        <img src={productImage} id="prodImg" width="200" height="190px" />
      </div>
      <div className={styles["card-body"]}>
        <h2 id="title">{productTitle}</h2>
      </div>
      <div className={styles["card-footer"]}>
        <h8 id="Price">{productPrice}</h8>
        <div className={styles["btn"]}>ADD TO CART</div>
      </div>
    </div>
  );
};

export default CardItem;
