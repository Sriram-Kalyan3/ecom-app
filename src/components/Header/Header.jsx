import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles["brandname"]}>
      <div>
        <span>BUY LARGE</span>
        <div className={styles["page"]}>
          <nav>
            <span className="bi bi-house-heart-fill"></span>
            <span className={styles["names"]}>HOME</span>
            <span className="bi bi-journal"></span>
            <span className={styles["names"]}>CATLOG</span>
            <span className="bi bi-shop-window"></span>
            <span className={styles["names"]}>SHOP</span>
          </nav>
          <div className={styles["support"]}>
            <nav>
              <span className="bi bi-person-fill"></span>
              <span className="bi bi-cart4"></span>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
