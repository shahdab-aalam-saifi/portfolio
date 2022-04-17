// import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import IconText from "../common/IconText";

const Introduction = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{
          marginTop: "1rem",
          paddingBottom: "1rem",
          backgroundColor: "#EAE3D6",
        }}
      >
        <Grid item xs={8}>
          <Typography
            variant="h4"
            style={{ fontWeight: "lighter", textTransform: "uppercase" }}
            gutterBottom
          >
            Shahdab Aalam Saifi - Developer
          </Typography>
          <Typography align="justify">
            A skilled developer having more than 3.8 years of experience with
            proven expertise in using new tools and technical developments to
            drive improvements throughout an entire software development
            lifecycle. Having extensive industry experience in banking and
            financial domain, along with good analytical, design and
            problem-solving capabilities. Always keen to learn new skills.
          </Typography>
        </Grid>
        <Grid item xs>
          <Stack spacing={1}>
            <IconText icon={<MailIcon />} text="saalamsaifi04@gmail.com" />
            {/* <IconText
              icon={<AlternateEmailIcon />}
              text="saalamsaifi@gmail.com"
            /> */}
            <IconText icon={<LocationOnIcon />} text="Pune, MH - 411***" />
            <IconText icon={<PhoneIcon />} text="**********" />
            <IconText icon={<GitHubIcon />} text="saalamsaifi" />
            <IconText icon={<LinkedInIcon />} text="shahdab-aalam-saifi" />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Introduction;
