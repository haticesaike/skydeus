import Logo from "../components/Logo";
import Card from "../components/Card";
import styles from "./Schedules.module.css";
import { Box, ScrollArea } from "@mantine/core";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Schedules() {
  const location = useLocation();
  console.log(location.state);
  const [data, setData] = useState([]);
  useEffect(() => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const filteredFlights = location.state.flightDetail.filter(
      (flight) =>
        flight.from === location.state.from &&
        flight.to === location.state.to &&
        new Date(flight.date).toLocaleDateString("tr-TR", options) ===
          new Date(location.state.departureDate).toLocaleDateString(
            "tr-TR",
            options
          )
    );
    console.log("filteredFlights", filteredFlights);
    setData(filteredFlights);
  }, [location.state]);
  return (
    <Box className={styles.container}>
      <Box>
        <Logo />
      </Box>
      <ScrollArea h={600}>
        <Box className={styles.cards}>
          {data.map((flight) => (
            <Card
              key={flight.id}
              from={flight.from}
              to={flight.to}
              departureDate={flight.date}
            />
          ))}
        </Box>
      </ScrollArea>
    </Box>
  );
}

export default Schedules;
