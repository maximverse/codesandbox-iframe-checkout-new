import React from "react";

function CouponComponent({
  displayCoupon,
  couponField,
  handleCouponClick,
  couponValue,
}) {
  return (
    <div>
      <div id="CouponCodeWrapper" className="CouponCodeWrapper">
        <div id="CouponCodeMainContainer" className="CouponCodeMainContainer">
          <div
            id="UtilDiv"
            hidden=""
            className="UtilDiv__holder"
            style={{ display: displayCoupon ? "block" : "none" }}
          >
            <div
              id="RowWrapper"
              width="100%"
              className="RowWrapper__div rowDiv"
            >
              <div className="wrapper_coupon">
                <input
                  placeholder="Coupon code (optional)"
                  id="CodeInput"
                  className="inputClass input-class-styles new-form-control"
                  value={couponValue}
                  ref={couponField}
                />
                {/* new button */}
                <div
                  onClick={() => console.log("coupon applied")}
                  className="dxoLOM"
                >
                  <button
                    color="#0080E9"
                    cursor="pointer"
                    className="button-apply-class"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            id="UtilDiv"
            className="UtilDiv__div"
            style={{ display: displayCoupon ? "none" : "block" }}
            onClick={handleCouponClick}
          >
            <div
              id="AddCouponContainer"
              className="AddCouponContainer"
              style={{ paddingLeft: 10 }}
            >
              <span id="Marginer" className="inputcl__el"></span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                id="AddCouponButton"
                className="AddCouponButton"
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
              <h4 id="BodyText" className="BodyText__div">
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
