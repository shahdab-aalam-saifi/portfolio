import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const TextIcon = ({ type, name, size, text, rest }) => {
  return (
    <span style={{ paddingRight: "0.5rem", paddingLeft: "0.5rem", display: "inline-block" }}>
      <FontAwesomeIcon
        icon={[type, name]}
        size={size}
        style={{ marginRight: "0.5rem" }}
      />
      {text}
    </span>
  );
};
