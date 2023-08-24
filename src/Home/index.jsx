import styles from "./Home.module.css";
import Logo from "../components/Logo";
import HomeBody from "./HomeBody/index.jsx";

function Home() {
  return (
    <div className={styles.container}>
      <Logo />
      <HomeBody />
    </div>
  );
}

export default Home;
