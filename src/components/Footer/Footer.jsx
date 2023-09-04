import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer>
      <div>
        <div className={styles["footer-brand-name"]}>
          <span>BUY LARGE</span>
        </div>
        <div>
          <span className="bi bi-facebook"></span>
          <span className="bi bi-twitter"></span>
          <span className="bi bi-instagram"></span>
          <span className="bi bi-youtube"></span>
        </div>
      </div>
      <div>
        <div className="title">SUPPORT</div>
        <div>Contact Us</div>
        <div>FAQs</div>
        <div>Size Guide</div>
        <div>Shipping & Returns</div>
      </div>
      <div>
        <div className="title">SHOP</div>
        <div>Men's Shopping</div>
        <div>Women's Shopping</div>
        <div>Kids' Shopping</div>
        <div>Discounts</div>
      </div>
      <div>
        <div className="title">COMPANY</div>
        <div>Our Story</div>
        <div>Careers</div>
        <div>Terms & Conditions</div>
        <div>Privacy & Cookie policy</div>
      </div>
      <div>
        <div className="title">CONTACT</div>
        <address>
          <div>+91 90------</div>
          <div>+91 90------</div>
          <div>BOUGHTGOODS@gmail.com</div>
        </address>
      </div>
    </footer>
  );
};

export default Footer;
