import Stack from "@mui/material/Stack";
import React from "react";
import Course from "../common/Course";
import SectionHeader from "../common/SectionHeader";

const Education = () => {
  return (
    <>
      <SectionHeader text="Education" />
      <Stack spacing={2}>
        <Course
          year="2018"
          score="80.00"
          institute="AKI's Poona College of Arts, Science &amp; Commerce, Pune, MH"
        >
          <strong>Master of Science</strong> (Computer Science)
        </Course>
        <Course
          year="2016"
          score="80.00"
          institute="AKI's Poona College of Arts, Science &amp; Commerce, Pune, MH"
        >
          <strong>Bechalor of Science</strong> (Computer Science)
        </Course>
        <Course
          year="2013"
          score="80.00"
          institute="AKI's Poona College of Arts, Science &amp; Commerce, Pune, MH"
        >
          <strong>Higher Secondary</strong>
        </Course>
        <Course
          year="2011"
          score="80.00"
          institute="B. T. Shahani Navin Hind High School, Pune, MH"
        >
          <strong>Secondary</strong>
        </Course>
      </Stack>
    </>
  );
};

export default Education;
