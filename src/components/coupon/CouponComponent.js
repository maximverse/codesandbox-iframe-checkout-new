import React from "react";

function CouponComponent({displayCoupon, couponField, handleCouponClick}) {
  return (
    <div>
      <div id="CouponCodeWrapper" className="clivIu">
        <div id="CouponCodeMainContainer" className="inxTnH">
          <div
            id="UtilDiv"
            hidden=""
            className="ebBRnt"
            style={{ display: displayCoupon ? "block" : "none" }}
          >
            <div id="RowWrapper" width="100%" className="gVXtdP row">
              <div className="enuuvf">
                <input
                  placeholder="Enter code"
                  id="CodeInput"
                  className="fIfmaf lgWrbL form-control"
                  defaultValue=""
                  ref={couponField}
                />
                {/* new button */}
                <div
                  onClick={() => console.log("coupon applied")}
                  className="dxoLOM"
                >
                  <button color="#0080E9" cursor="pointer" className="bDqFIu">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            id="UtilDiv"
            className="ebGFBo"
            // style={{ display: displayCoupon ? "block" : "hidden" }}
            style={{ display: displayCoupon ? "none" : "block" }}
            // style={{ display: "none" }}
            onClick={handleCouponClick}
          >
            <div
              id="AddCouponContainer"
              className="eUtgzI"
              style={{ paddingLeft: 10 }}
            >
              <span id="Marginer" className="ieymL"></span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                id="AddCouponButton"
                className="QJcxx"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M256 112v288m144-144H112"
                ></path>
              </svg>
              <h4 id="BodyText" className="gMIgWT">
                Add a promotional code
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CouponComponent;
