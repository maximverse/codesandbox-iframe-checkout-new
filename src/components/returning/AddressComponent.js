import React from "react";

function AddressComponent() {
  return (
    <div>
      <div id="addressSection AccordionParent" className="sc-cfQIsQ dNczxK">
        <div id="addressSection AccordionButton" className="sc-jDfIjF czXqCR">
          <button id="OrderPlacedPageGridCell" className="sc-hQIyOC bVOsmc">
            <div id="SummarisedSection" className="sc-hgRfpC foWCkQ">
              <div id="SectionLeftContainer" className="sc-fiSPbx khYJsg">
                {error.msg_code ==
                "shipping_not_available_for_selected_address" ? (
                  <WarningSvg />
                ) : (
                  <CheckSvg />
                )}
              </div>
              <div id="SectionRightContainer" className="sc-lgholE hxAOwI">
                <h4
                  id="SmallBodyText"
                  color="rgba(0, 0, 0, 0.7)"
                  className="sc-dGQEGF sc-iuxOeI mLSed jKvjvD"
                >
                  Shipping to
                </h4>
                <h4
                  color="black"
                  fontWeight={500}
                  id="SmallBodyText"
                  className="sc-dGQEGF sc-iuxOeI hBmljZ gLlhtj"
                >
                  {orderState.addressLn1},{" "}
                  {orderState.city == orderState.state ? (
                    <>{orderState.city}, </>
                  ) : (
                    <>
                      {orderState.city}, {orderState.state},{" "}
                    </>
                  )}
                  {orderState.zip}, {orderState.country}
                </h4>
              </div>
            </div>
          </button>
          <svg
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
        <div
          id="addressSection AccordionExpansion"
          className="sc-bJYTlW gPqmkd hide"
        >
          <div id="ExpandedSection" className="sc-gelMue fOcJJx">
            <div id="ShippingAddressFormContainer" className="sc-eyLAWx eTwXdx">
              <div id="AddressOptionMainContainer" className="sc-hINMOq goquha">
                <div id="AddressOptionWrapper" className="sc-jowtIB cefdzy">
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
                  <div id="AddressLinesContainer" className="sc-kkCwLU gyFtwX">
                    <h4
                      id="SmallBodyText"
                      fontWeight={400}
                      color="black"
                      className="sc-dGQEGF sc-iuxOeI hBmljY fRame"
                    >
                      5th Avenue
                    </h4>
                    <h4
                      id="SmallBodyText"
                      className="sc-dGQEGF sc-iuxOeI ilvhwF fRame"
                    >
                      New York, NY 10010, US
                    </h4>
                  </div>
                </div>
                <div
                  id="AddressOptionInnerContainer"
                  className="sc-bWWQYT hbA-DML"
                >
                  <h4 id="DefaultAddressIndicator" className="sc-cTcUcm lbAmQQ">
                    DEFAULT
                  </h4>
                </div>
              </div>
              <button id="PlusButtonIconContainer" className="sc-gXnjX kDBOCB">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  id="PlusIcon"
                  className="sc-byHATT bVqivu"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
                </svg>
                <h4
                  id="SmallBodyText"
                  color="black"
                  className="sc-dGQEGF sc-iuxOeI hBmljY fRame"
                >
                  Use a different address
                </h4>
              </button>
              <div id="AddNewItem" className="sc-cqQeAO cytDLw" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressComponent;
