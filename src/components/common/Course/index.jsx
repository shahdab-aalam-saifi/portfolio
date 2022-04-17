import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

const Course = ({ year, score, institute, children }) => {
  return (
      <Grid container>
        <Grid item xs={1}>
          <Typography variant="caption">{year}</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography>{children}</Typography>
          <Typography variant="caption" color={"text.secondary"}>
            {institute}
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography>
            <strong>{score}%</strong>
          </Typography>
        </Grid>
      </Grid>
  );
};

export default Course;
