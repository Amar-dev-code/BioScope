import React from "react";
import spinner from "./loading.gif";

export function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        style={{ width: "200px", margin: "auto", display: "bloack" }}
        alt="Loading..."
      />
    </div>
  );
}
