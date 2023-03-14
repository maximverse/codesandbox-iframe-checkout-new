import React from "react";
import "./ShippingDropdown.css";

function ShippingDropdown() {
  return (
    <div>
      <div
        id="shippingMethodSection AccordionParent"
        className="sc-cgMmbi fFSQEM"
      >
        <div
          id="shippingMethodSection AccordionExpansion"
          className="sc-bJdpDE bnHWxo"
          style={{ maxHeight: "146px" }}
          open
        >
          <div id="ExpandedSection" className="sc-gfMXfM iznuCX">
            <div id="ShippingMethodFormContainer" className="sc-kfldip dKUpb">
              <div
                id="ShippingMethodsSelectionContainer"
                className="sc-eNdSTA gRAsEv"
              >
                <div
                  id="DeliveryMethodsAccordionSummaryContainer"
                  className="sc-fgrVEr eEjXQC"
                >
                  <div
                    id="ShippingMethodsContainer"
                    className="sc-ldGuOy fHMXpS"
                  >
                    <div
                      id="ShippingMethodsContainer"
                      className="sc-fWsWPG gOAXaw"
                      style={{ padding: "0px" }}
                    >
                      <div
                        id="ShippingMethodMainContainer"
                        className="sc-hsnvbA cJpxPa"
                      >
                        <span
                          className="MuiButtonBase-root MuiIconButton-root jss3 MuiRadio-root jss1"
                          aria-disabled="false"
                        >
                          <span className="MuiIconButton-label">
                            <input
                              className="jss6"
                              id="GreenRadioSmall"
                              type="radio"
                              defaultValue
                            />
                            <div className="jss7">
                              <svg
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                              </svg>
                              <svg
                                className="MuiSvgIcon-root jss8 MuiSvgIcon-fontSizeSmall"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z" />
                              </svg>
                            </div>
                          </span>
                          <span className="MuiTouchRipple-root" />
                        </span>
                        <div
                          id="ShippingMethodDetailsContainer"
                          className="sc-hdNIBJ hcZtjp"
                        >
                          <h4
                            color="black"
                            id="SmallBodyText"
                            className="sc-dGAOeH sc-ivtrNa krhoyo KYZFs"
                          >
                            Star Track - (A$11.95)
                          </h4>
                        </div>
                      </div>
                      <div
                        id="ShippingMethodMainContainer"
                        className="sc-hsnvbA kccAHL"
                      >
                        <span
                          className="MuiButtonBase-root MuiIconButton-root jss3 MuiRadio-root jss1 jss4 Mui-checked jss2"
                          aria-disabled="false"
                        >
                          <span className="MuiIconButton-label">
                            <input
                              className="jss6"
                              id="GreenRadioSmall"
                              type="radio"
                              defaultValue
                              defaultChecked
                            />
                            <div className="jss7 jss9">
                              <svg
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                              </svg>
                              <svg
                                className="MuiSvgIcon-root jss8 MuiSvgIcon-fontSizeSmall"
                                focusable="false"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z" />
                              </svg>
                            </div>
                          </span>
                          <span className="MuiTouchRipple-root" />
                        </span>
                        <div
                          id="ShippingMethodDetailsContainer"
                          className="sc-hdNIBJ hcZtjp"
                        >
                          <h4
                            color="black"
                            id="SmallBodyText"
                            className="sc-dGAOeH sc-ivtrNa krhoyo KYZFs"
                          >
                            Registered Post - (A$8.95)
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingDropdown;
