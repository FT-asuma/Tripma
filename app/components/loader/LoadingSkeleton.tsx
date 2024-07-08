import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import styles from "./loader.module.css";
import { FormHelperText } from "@mui/material";
export default function LoadingSkeleton() {
  return (
    <div className={styles.loader}>
      <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
        <CircularProgress size={48} color="success" />
      </Stack>
      <FormHelperText style={{ color: "#2e7d32", fontSize: 24 }}>
        Please wait page is loading...
      </FormHelperText>
    </div>
  );
}
