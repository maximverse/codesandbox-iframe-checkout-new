import React from "react";

function CircleSvg() {
  return (
    <>
      <svg
        className="MuiCircularProgress-svg css-13o7eu2"
        viewBox="22 22 44 44"
      >
        <circle
          className="MuiCircularProgress-circle MuiCircularProgress-circleDeterminate css-nbfpn7"
          cx={44}
          cy={44}
          r="19.5"
          fill="none"
          strokeWidth={5}
          style={{
            strokeDasharray: "122.522",
            strokeDashoffset: "122.522px",
          }}
        />
      </svg>
    </>
  );
}

export default CircleSvg;
