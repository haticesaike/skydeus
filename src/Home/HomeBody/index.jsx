import styles from "./HomeBody.module.css";
import {Box, Select, ActionIcon, Button} from "@mantine/core";
import {DatePickerInput} from "@mantine/dates";
import {IconArrowRight, IconArrowsRightLeft} from "@tabler/icons-react";
import {motion, useDragControls} from "framer-motion";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import 'dayjs/locale/tr';

function HomeBody() {
    const controls = useDragControls();
    const navigate = useNavigate();
    const [showComeBack, setShowComeBack] = useState(true);
    const [flightDetail, setFlightDetail] = useState([]);
    const [fromCities, setFromCities] = useState([]);
    const [toCities, setToCities] = useState([]);
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [returnDate, setReturnDate] = useState("");

    useEffect(() => {
        axios
            .get("https://64e65cb709e64530d17fed82.mockapi.io/flightDetail")
            .then((response) => {
                console.log(response.data);
                setFlightDetail(response.data);
                const newFromCities = [];
                const newToCities = [];
                response.data.map((res) => {
                    if (
                        !fromCities.includes(res.from) &&
                        !newFromCities.includes(res.from)
                    ) {
                        newFromCities.push(res.from);
                    }

                    if (!toCities.includes(res.to) && !newToCities.includes(res.to)) {
                        newToCities.push(res.to);
                    }
                });

                setFromCities((prev) => [...prev, ...newFromCities]);
                setToCities((prev) => [...prev, ...newToCities]);
            });

    }, []);

    function getIsoDateWihUTC(date) {
        const inputDate = new Date(date);

        const localYear = inputDate.getFullYear();
        const localMonth = inputDate.getMonth() + 1;
        const localDay = inputDate.getDate();
        const localHours = inputDate.getHours();
        const localMinutes = inputDate.getMinutes();
        const localSeconds = inputDate.getSeconds();
        return `${localYear}-${localMonth.toString().padStart(2, '0')}-${localDay.toString().padStart(2, '0')}T${localHours.toString().padStart(2, '0')}:${localMinutes.toString().padStart(2, '0')}:${localSeconds.toString().padStart(2, '0')}`;

    }

    if (!flightDetail.length) return (<div style={{color: "#fefefe", fontSize: 50}}>Loading...</div>);

    return (
        <Box className={styles.HomeBody}>
            <Box className={styles.container}>
                <Box className={styles.leftSide}>
                    <Button
                        styles={{root: {":active": {transform: "none"}}}}
                        sx={
                            !showComeBack
                                ? {
                                    display: "flex",
                                    flex: 2,
                                    borderTopLeftRadius: 32,
                                    backgroundColor: " #f7a828",
                                    color: "#fff",
                                    width: "100%",
                                    height: "100%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderColor: "#f7a828",
                                    "&:hover": {
                                        backgroundColor: "#f7a828",
                                    },
                                    "&.active": {
                                        backgroundColor: "#f7a828",
                                        marginTop: -1,
                                    },
                                }
                                : {
                                    display: "flex",
                                    flex: 2,
                                    backgroundColor: " #015fb7",
                                    borderTopLeftRadius: 32,
                                    color: "#fff",
                                    width: "100%",
                                    height: "100%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderColor: "#015fb7",
                                    "&:hover": {
                                        backgroundColor: "#015fb7",
                                    },
                                }
                        }
                        onClick={() => {
                            setShowComeBack(false);
                        }}
                    >
                        TEK YÖN
                    </Button>

                    <Button
                        styles={{root: {":active": {transform: "none"}}}}
                        sx={
                            showComeBack
                                ? {
                                    display: "flex",
                                    flex: 2,
                                    borderBottomLeftRadius: 32,
                                    backgroundColor: " #f7a828",
                                    color: "#fff",
                                    width: "100%",
                                    height: "100%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    "&:hover": {
                                        backgroundColor: "#f7a828",
                                    },
                                }
                                : {
                                    display: "flex",
                                    flex: 2,
                                    borderBottomLeftRadius: 30,
                                    backgroundColor: " #015fb7",
                                    color: "#fff",
                                    width: "100%",
                                    height: "100%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    "&:hover": {
                                        backgroundColor: "#015fb7",
                                    },
                                }
                        }
                        onClick={() => {
                            setShowComeBack(true);
                        }}
                    >
                        GİDİŞ DÖNÜŞ
                    </Button>
                </Box>
                <Box className={styles.middle}>
                    <Box className={styles.locations}>
                        <Select
                            data={fromCities}
                            placeholder="Şehir Seçiniz"
                            label="Nereden"
                            variant="default"
                            radius="md"
                            size="lg"
                            value={from}
                            onChange={(value) => {
                                setFrom(value);
                            }}
                            withAsterisk
                            searchable
                            labelProps={{
                                style: {
                                    marginLeft: "1rem",
                                    marginBottom: "1rem",
                                },
                            }}
                            rightSectionProps={{
                                style: {
                                    display: "none",
                                },
                            }}
                        />
                        <ActionIcon
                            sx={{alignSelf: "flex-end", marginBottom: ".3rem"}}
                            size="2xl"
                            radius="md"
                            variant="transparent"
                            onClick={() => {
                                const temp = from;
                                setFrom(to);
                                setTo(temp);
                            }}
                        >
                            <IconArrowsRightLeft size="2.3rem"/>
                        </ActionIcon>
                        <Select
                            data={toCities}
                            placeholder="Şehir Seçiniz"
                            label="Nereye"
                            variant="default"
                            radius="md"
                            size="lg"
                            value={to}
                            onChange={(value) => {
                                setTo(value);
                            }}
                            withAsterisk
                            searchable
                            labelProps={{
                                style: {
                                    marginLeft: "1rem",
                                    marginBottom: "1rem",
                                },
                            }}
                            rightSectionProps={{
                                style: {
                                    display: "none",
                                },
                            }}
                        />
                    </Box>
                    <motion.div layout className={styles.dates}>
                        <motion.div
                            layout
                            dragControls={controls}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{
                                duration: 0.8,
                                ease: [0, 1.1, 0.2, .9],
                            }}
                        >
                            <DatePickerInput
                                placeholder="Tarih Seçiniz"
                                label="Gidiş Tarihi"
                                variant="default"
                                radius="md"
                                size="lg"
                                locale="tr"
                                valueFormat="DD MMMM YYYY"
                                minDate={new Date()}
                                value={departureDate ? new Date(departureDate) : null}
                                onChange={(value) => {
                                    setDepartureDate(getIsoDateWihUTC(value));
                                }}
                                w={showComeBack ? 270 : 650}
                                withAsterisk
                                labelProps={{
                                    style: {
                                        marginLeft: "1rem",
                                        marginBottom: "1rem",
                                    },
                                }}
                            />
                        </motion.div>

                        {showComeBack && (
                            <motion.div
                                dragControls={controls}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{
                                    duration: 2,
                                    ease: [0, 0.71, 0.2, 1.01],
                                }}
                            >
                                <DatePickerInput
                                    placeholder="Tarih Seçiniz"
                                    label="Dönüş Tarihi"
                                    variant="default"
                                    radius="md"
                                    size="lg"
                                    valueFormat="DD MMMM YYYY"
                                    locale="tr"
                                    w={275}
                                    value={returnDate ? new Date(returnDate) : null}
                                    onChange={(value) => {
                                        setReturnDate(getIsoDateWihUTC(value));

                                    }}
                                    minDate={new Date(departureDate)}
                                    withAsterisk
                                    labelProps={{
                                        style: {
                                            marginLeft: "1rem",
                                            marginBottom: "1rem",
                                        },
                                    }}
                                />
                            </motion.div>
                        )}
                    </motion.div>
                </Box>
                <Box
                    className={styles.rightSide}
                    onClick={() => {
                        from.length < 1 || to.length < 1
                            ? alert("Lütfen Şehir Seçiniz")
                            : from === to
                                ? alert("Lütfen Farklı Şehirler Seçiniz")
                                : departureDate.length < 1
                                    ? alert("Lütfen Tarih Seçiniz")
                                    : showComeBack && returnDate.length < 1
                                        ? alert("Lütfen Tarih Seçiniz")
                                        :
                                        navigate("/schedules", {
                                            state: {
                                                from,
                                                to,
                                                departureDate,
                                                returnDate,
                                                flightDetail,
                                            },
                                        });
                    }}
                >
                    <Box className={styles.button}>
                        <IconArrowRight size="5rem"/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default HomeBody;
