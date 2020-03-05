import React from "react";
export default () => {
  return (
    <center>
      <div
        class="spinner-border"
        style={{
          width: "4rem",
          height: "4rem",
          marginTop: "3rem",
          color: "#ff0"
        }}
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
    </center>
  );
};
