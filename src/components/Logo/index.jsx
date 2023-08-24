import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>SKYDEUS</div>
      <div className={styles.logoSubText}>Easy Flight Search</div>
    </div>
  );
}

export default Logo;
