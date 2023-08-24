import styles from './Home.module.css';
import HomeHeader from "./components/HomeHeader/index.jsx";
import HomeBody from "./components/HomeBody/index.jsx";

function Home() {
    return (
        <div className={styles.container}>
            <HomeHeader/>
            <HomeBody/>
        </div>
    );
}

export default Home;