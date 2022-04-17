import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

const BulletPoint = ({ children }) => {
  return (
    <>
      <Grid container>
        <Grid item xs>
          <Typography> &#9635; {children}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default BulletPoint;
