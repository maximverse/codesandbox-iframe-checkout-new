import React from "react";

function OrderFooter() {
  return (
    <div>
      <div
        height="100pxundefined"
        id="FooterContainer"
        className="sc-cnMZnH gEjBms"
      >
        <div className="sc-iOdfRm gJdEyU">
          <button
            id="UnderlineHoverActionContainer"
            className="sc-jWOkvS TuRzV"
          >
            <h4 id="BodyText" className="sc-dGQEGF ilvhwF">
              ←
            </h4>
            <h4
              id="CancelOrderButtonText"
              className="sc-dGQEGF sc-kAuIVs ilvhwF kutXiz"
            >
              CANCEL ORDER
            </h4>
          </button>
        </div>
        <div id="FooterButtonsInnerContainer" className="sc-ePBJll eSojrj">
          <div id="CouponCodeButtonContainer" className="sc-kpPvGe kiBAJW">
            <input
              placeholder="Enter code"
              id="CodeInput"
              className="sc-fmixVB sc-czpcHH hfgKIg kwhLFu form-control"
              defaultvalue
            />
          </div>
          <div id="CouponCodeContainer" className="sc-cBBlDJ igcfpW">
            <div id="CouponCodeMainContainer" className="sc-dovKpQ bUJsKP">
              <div id="UtilDiv" className="sc-jIkldg ildJsr">
                <button
                  id="AddCouponButtonWrapper"
                  className="sc-jFYche jBwgLF"
                >
                  <p
                    id="ParagraphText"
                    color="white"
                    className="sc-eCrewB liXPCk"
                  >
                    Add a coupon
                  </p>
                </button>
              </div>
            </div>
          </div>
          <button
            id="PurchaseButton"
            disabled={false}
            className="sc-bgzEgf jKNQoM"
          >
            <p id="ParagraphText" color="white" className="sc-eCrewB ijGxPO">
              Complete purchase
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderFooter;
