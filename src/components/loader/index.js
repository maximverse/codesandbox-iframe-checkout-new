import React from "react";

function Loader() {
  return (
    <div>
      <div
        className="page-container"
        style={{ width: 0, height: 0, display: "none" }}
      >
        <div className="inner-container">
          <div
            id="loader"
            className="loader"
            style={{ marginBottom: 15 }}
          ></div>
          <div id="LoadingTextContainer" className="bjoOsA">
            <h4 className="krDUTW">Loading checkout</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
