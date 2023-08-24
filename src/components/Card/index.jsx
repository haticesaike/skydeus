import styles from "./Card.module.css";
import { useLocation } from "react-router-dom";
import { Box } from "@mantine/core";
function Card() {
  const location = useLocation();
  console.log(location.state);
  return (
    <Box className={styles.container}>
      <Box className={styles.leftSide}></Box>
      <Box className={styles.middle}></Box>
      <Box className={styles.rightSide}>
        <Box className={styles.button}></Box>
      </Box>
    </Box>
  );
}

export default Card;
