import Logo from "../components/Logo";
import Card from "../components/Card";
import styles from "./Schedules.module.css";
import {Box, ScrollArea, Select} from "@mantine/core";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

function Schedules() {
    const location = useLocation();
    const [departureData, setDepartureData] = useState([]);
    const [arrivalData, setArrivalData] = useState([]);
    useEffect(() => {
        const depFlights = location.state.flightDetail.filter(
            (flight) => flight.from === location.state.from &&
                flight.to === location.state.to &&
                String(flight.date).split("T")[0] ===
                location.state.departureDate.split("T")[0]
        );
        const arrFlights = location.state.flightDetail.filter(
            (flight) => flight.from === location.state.to &&
                flight.to === location.state.from &&
                String(flight.date).split("T")[0] ===
                location.state.returnDate.split("T")[0]
        );
        setArrivalData(arrFlights);
        setDepartureData(depFlights);
    }, [location.state]);
    const sort = (e) => {
        if (e === "departure") {
            const sorted = departureData.sort((a, b) => {
                if (a.time < b.time) {
                    return -1;
                }
                if (a.time > b.time) {
                    return 1;
                }
                return 0;
            });
            setDepartureData(sorted);

        }
        if (e === "price") {
            const sorted = departureData.sort((a, b) => {
                if (a.price < b.price) {
                    return 1;
                }
                if (a.price > b.price) {
                    return -1;
                }
                return 0;
            });
            setDepartureData(sorted);
        }
        if (e === "time") {
            const sorted = departureData.sort((a, b) => {
                if (a.time < b.time) {
                    return 1;
                }
                if (a.time > b.time) {
                    return -1;
                }
                return 0;
            });
            setDepartureData(sorted);
        }
    };
    return (
        <Box className={styles.container}>
            <Box>
                <Logo/>
            </Box>
            <Box className={styles.area}>
                {
                    !departureData.length > 0 &&
                    !arrivalData.length > 0 ? (<Box>
                            <h2 className={styles.notfound}>
                                Aradığınız kriterlere uygun uçuş bulunamadı :/
                            </h2>
                            <h4 className={styles.notfound}>
                                <Link to="/"> Ana sayfaya dön {"<"}< /Link>
                            </h4>
                        </Box>) :
                        (
                            <Box className={styles.sort}>
                                {/*    <Select data={[
                                    {value: "departure", label: "Kalkış Saatine Göre"},
                                    {value: "price", label: "Fiyata Göre"},
                                    {value: "time", label: "Süreye Göre"},
                                ]} placeholder="Sırala" className={styles.select}
                                        onChange={sort}
                                />
*/}
                            </Box>

                        )

                }
                {
                    departureData.length > 0 && (
                        <Box className={styles.subarea}>
                            {
                                arrivalData.length > 0 && (<Box className={styles.title}>
                                    Gidiş Uçuşları
                                </Box>)
                            }

                            <ScrollArea h={650}>
                                <Box className={styles.cards}>
                                    {departureData.map((flight) => (
                                        <Card
                                            key={flight.id}
                                            from={flight.from}
                                            to={flight.to}
                                            date={flight.date}
                                            price={flight.price}
                                            flightId={flight.id}
                                            company={flight.company}
                                            time={flight.time}
                                        />
                                    ))
                                    }
                                </Box>
                            </ScrollArea>
                            {
                                !arrivalData.length > 0 && location.state.returnDate !== "" && (
                                    <Box className={styles.subtitle}>
                                        *Gidiş uçuşları listelendi fakat belirttiğiniz dönüş tarihine uygun uçuş bulunamadı.
                                    </Box>)
                            }
                        </Box>
                    )
                }
                {
                    arrivalData.length > 0 && (
                        <Box className={styles.subarea}>
                            {
                                departureData.length > 0 && (<Box className={styles.title}>
                                    Dönüş Uçuşları
                                </Box>)
                            }
                            <ScrollArea h={650}>
                                <Box className={styles.cards}>
                                    {arrivalData.map((flight) => (
                                        <Card
                                            key={flight.id}
                                            from={flight.from}
                                            to={flight.to}
                                            date={flight.date}
                                            price={flight.price}
                                            flightId={flight.id}
                                            company={flight.company}
                                            time={flight.time}
                                        />
                                    ))
                                    }
                                </Box>
                            </ScrollArea>
                            {
                                !departureData.length > 0 && (<Box className={styles.subtitle}>
                                    *Dönüş uçuşları listelendi fakat belirttiğiniz gidiş tarihine uygun uçuş bulunamadı.
                                </Box>)
                            }
                        </Box>
                    )
                }
            </Box>
        </Box>
    );
}

export default Schedules;
