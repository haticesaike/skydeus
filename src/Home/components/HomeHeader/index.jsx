import styles from './HomeHeader.module.css';

function HomeHeader() {
    return (
        <div className={styles.homeHeader}>
            <div className={styles.logo}>
                SKYDEUS
            </div>
            <div className={styles.logoSubText}>
                Easy Flight Search
            </div>
        </div>
    );
}

export default HomeHeader;