"use client";
import React from "react";
import Container from "../components/container/Container";
import styles from "./flights.module.css";
import { Form } from "../components/entrance/Form";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}$`;
}

const marks = [
  {
    value: 0,
    label: "0$",
  },
  {
    value: 10,
    label: "100$",
  },
  {
    value: 20,
    label: "200$",
  },
  {
    value: 30,
    label: "300$",
  },
  {
    value: 40,
    label: "400$",
  },
  {
    value: 50,
    label: "500$",
  },
  {
    value: 60,
    label: "600$",
  },
  {
    value: 70,
    label: "700$",
  },
  {
    value: 80,
    label: "800$",
  },
  {
    value: 90,
    label: "900$",
  },
  {
    value: 100,
    label: "1000$",
  },
];

const Flights = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div className={styles.flights}>
      <Container>
        <div className={styles.container}>
          <div className={styles.form}>
            <Form />
            <div className={styles.findSuitable}>
              
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Flights;
