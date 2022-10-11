import React from "react";
import { Grid } from "@mui/material";
const Footer = () => {
  return (
    <Grid
      display="flex"
      width="100%"
      justifyContent={"center"}
      style={{
        position: "absolute",
        bottom: 0,
        backgroundColor: "#3493DD",
        color: "black",
      }}
    >
      <div>
        <h3>Check out some of our other work on Github!</h3>
        <p display="flex" align="center">
          <a
            href="https://github.com/BrandonOkman"
            style={{ textDecoration: "none", color: 'black' }}
          >
            Brandon
          </a>
          ---
          <a
            href="https://github.com/cvanauken"
            style={{ textDecoration: "none", color: 'black' }}
          >
            Cooper
          </a>
          ---
          <a
            href="https://github.com/joshuabenzelli"
            style={{ textDecoration: "none", color: 'Black' }}
          >
            Josh
          </a>
          ---
          <a
            href="https://github.com/AugustusXI"
            style={{ textDecoration: "none", color: 'black' }}
          >
            Landon
          </a>
          ---
          <a
            href="https://github.com/MHubert91"
            style={{ textDecoration: "none", color: 'black' }}
          >
            Mar'Quis
          </a>
        </p>
      </div>
    </Grid>
  );
};
export default Footer;
