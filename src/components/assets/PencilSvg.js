import React from "react";

function PencilSvg({ handleClicked }) {
  return (
    <div onClick={handleClicked}>
      {" "}
      <svg
        onClick={handleClicked}
        width={15}
        height={15}
        viewBox="0 0 11 11"
        fill="none"
        className="sc-enHPVx MkNnu"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.84007 1.85361L9.07772 4.09123L3.41361 9.75534L1.17723 7.51771L6.84007 1.85361ZM10.7757 1.31394L9.77776 0.316036C9.3921 -0.0696195 8.76588 -0.0696195 8.37891 0.316036L7.42302 1.27193L9.66066 3.50958L10.7757 2.39458C11.0748 2.09544 11.0748 1.61306 10.7757 1.31394ZM0.00622685 10.6629C-0.0344955 10.8461 0.130973 11.0104 0.314265 10.9658L2.80775 10.3612L0.571369 8.1236L0.00622685 10.6629Z"
          fill="#757476"
        />
      </svg>
    </div>
  );
}

export default PencilSvg;
