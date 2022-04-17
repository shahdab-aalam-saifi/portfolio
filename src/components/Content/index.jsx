import Grid from "@mui/material/Grid";
import React from "react";
import Education from "../Education";
import ProfessionalSummary from "../ProfessionalSummary";

const Content = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{
          marginTop: "0rem",
          paddingBottom: "1rem",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Grid item xs={7}>
          <ProfessionalSummary />
        </Grid>
        <Grid item xs>
          <Education />
        </Grid>
      </Grid>
    </>
  );
};

export default Content;
