import styles from "./Logo.module.css";
import {useNavigate} from "react-router-dom";

function Logo() {
    const navigate = useNavigate();
    return (
        <div className={styles.container} onClick={
            () => {
                navigate("/");
            }
        }>
            <div className={styles.logo}>SKYDEUS</div>
            <div className={styles.logoSubText}>Easy Flight Search</div>
        </div>
    );
}

export default Logo;
