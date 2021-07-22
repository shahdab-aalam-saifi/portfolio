import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const SocialAccount = ({ social }) => {
  return (
    <>
      <a
        key={`social-badge-${social.rank}`}
        href={social.url}
        target="_blank"
        rel="noreferrer"
        style={{ paddingRight: "1rem", textDecoration: "none" }}
      >
        <FontAwesomeIcon
          icon={["fab", social.name]}
          size="lg"
        />
      </a>
    </>
  );
};
