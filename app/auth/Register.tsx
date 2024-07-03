"use client";
import React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
  Button,
} from "@mui/material";
import { IoCloseOutline } from "react-icons/io5";
import styles from "./auth.module.css";
import Image from "next/image";
const Register = () => {
  return (
    <>
      <FormControl className={styles.formRegister}>
        <TextField
          required
          id="outlined-basic"
          label="Email or phone number"
          variant="outlined"
        />
        <TextField
          required
          id="outlined-basic"
          type="password"
          label="Password"
          variant="outlined"
        />
        <FormGroup>
          <div style={{ display: "flex", alignItems: "center" }}>
            <FormControlLabel
              control={<Checkbox size="medium" />}
              label={`I agree to the`}
            />{" "}
            <span
              style={{ marginLeft: "4px", color: "#605DEC", fontWeight: "500" }}
            >
              terms and conditions
            </span>
          </div>
          <FormControlLabel
            control={<Checkbox size="medium" />}
            color="#605DEC"
            label={`Send me the latest deal alerts`}
          />
        </FormGroup>
        <Button style={{ height: "3rem" }} variant="contained">
          Create account
        </Button>
      </FormControl>
    </>
  );
};

export default Register;
