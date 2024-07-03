import React from "react";
import Button from "@mui/material/Button";
import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
const Form = () => {
  return (
    <FormControl>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">
        We'll never share your email.
      </FormHelperText>
    </FormControl>
  );
};

export default Form;
