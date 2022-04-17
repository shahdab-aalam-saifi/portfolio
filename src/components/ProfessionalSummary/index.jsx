import Stack from "@mui/material/Stack";
import React from "react";
import BulletPoint from "../common/BulletPoint";
import SectionHeader from "../common/SectionHeader";

const ProfessionalSummary = () => {
  return (
    <>
      <SectionHeader text="Professional Summary" />
      <Stack spacing={2}>
        <BulletPoint>
          Possess expertise in taking any requirement through all the phases of
          the development lifecycle.
        </BulletPoint>
        <BulletPoint>
          Have been working in a fully <strong>Agile</strong> environment for
          past several years.
        </BulletPoint>
      </Stack>
    </>
  );
};

export default ProfessionalSummary;
