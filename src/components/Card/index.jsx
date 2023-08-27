import styles from "./Card.module.css";
import {useLocation} from "react-router-dom";
import {Box} from "@mantine/core";
import {IconArrowGuide} from "@tabler/icons-react";

function Card({
                  from,
                  to,
                  date,
                  price,
                  flightId,
                  company,
                  time,

              }) {
    const location = useLocation();
    console.log(location.state);
    return (
        <Box className={styles.container}>
            <Box className={styles.leftSide}>

                <Box className={styles.from}>
                    {from}
                </Box>
                <IconArrowGuide className={styles.fromToIcon} size={50} color={"#fefefe"}/>
                <Box className={styles.to}>
                    {to}
                </Box>


            </Box>
            <Box className={styles.middle}>
                <Box className={styles.company}>
                    {company}
                </Box>
                <Box className={styles.info}>
                    <Box>
                        <Box className={styles.dateText}>
                            Yolculuk Tarihi:
                        </Box>
                        <Box className={styles.infoValue}>
                            {String(date).split("T")[0].split("-")[2]}.{String(date).split("T")[0].split("-")[1]}.{String(date).split("T")[0].split("-")[0] + " "}
                        </Box>
                    </Box>
                    <Box>
                        <Box>Yolculuk Süresi:</Box>
                        <Box className={styles.infoValue}>{time} saat</Box>
                    </Box>
                    <Box>
                        <Box>
                            Yolculuk Saati:
                        </Box>
                        <Box className={styles.infoValue}>
                            {String(date).split("T")[1].split(".")[0].split(":")[0]}:{String(date).split("T")[1].split(".")[0].split(":")[1]}
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className={styles.rightSide}>
                <Box className={styles.priceArea}>
                    <Box className={styles.priceText}>
                        Fiyat:
                    </Box>
                    <Box className={styles.price}>
                        {price} TL
                    </Box>
                </Box>
                <Box className={styles.flightId}>
                    Uçuş No: {flightId}
                </Box>
            </Box>
        </Box>
    );
}

export default Card;
