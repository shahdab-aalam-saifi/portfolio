import React from "react";

const IconText = ({ icon, text }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {icon}&nbsp;{text}
    </div>
  );
};

export default IconText;
