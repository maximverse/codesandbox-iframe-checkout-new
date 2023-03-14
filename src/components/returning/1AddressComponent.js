import React, { useState } from "react";
import WarningSvg from "../assets/WarningSvg";
import CheckSvg from "../assets/CheckSvg";
import "./AddressComponentStyles.css";
import PencilSvg from "../assets/PencilSvg";

function AddressComponent({ orderState, error }) {
  const [clicked, setClicked] = React.useState(false);

  const handleClicked = () => {
    setClicked(!clicked);
  };

  const [showNewAddressForm, setShowNewAddressForm] = useState(true);

  return (
    <div>
      <div id="addressSection AccordionParent" className="sc-cfQIsQ dNczxK">
        <div id="addressSection AccordionButton" className="sc-jDfIjF czXqCR">
          <button
            onClick={handleClicked}
            id="OrderPlacedPageGridCell"
            className="sc-hQIyOC bVOsmc"
          >
            <div id="SummarisedSection" className="sc-hgRfpC foWCkQ">
              <div id="SectionLeftContainer" className="sc-fiSPbx khYJsg">
                {error.true &&
                error.msg_code ==
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
          {/* pencil */}
          <div style={{ marginTop: 30, marginRight: 8 }}>
            <PencilSvg handleClicked={handleClicked} />
          </div>
          {/* <svg
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
          </svg> */}
        </div>
        <div
          id="addressSection AccordionExpansion"
          className={`sc-bJYTlW gPqmkd ${!clicked && "hide"}`}
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
              <div
                onClick={showNewAddressForm}
                id="PlusButtonIconContainer"
                className="sc-gXnjX kDBOCB"
              >
                <h4
                  id="SmallBodyText"
                  color="black"
                  className="sc-dGQEGF sc-iuxOeI hBmljY fRame"
                >
                  Or use a different address
                </h4>
              </div>
              <div id="AddNewItem" className="sc-cqQeAO kDAfbG">
                <div
                  padding={0}
                  id="RowWrapper"
                  className="sc-ACYlI gcPwkQ row"
                >
                  <h4 id="ErrorValidationText" className="sc-islFiG eRlraK" />
                </div>
                <input
                  placeholder="Country"
                  name="country"
                  autoComplete="country country-name"
                  id="countryAutocomplete"
                  className="sc-jSUZER bKBoaI"
                  defaultValue=""
                />
                <span id="Marginer" className="sc-lllmON bLmTAm" />
                <input
                  autoComplete="off"
                  name="address1"
                  placeholder="Address"
                  borderbottom="1px solid #e0e0e0"
                  borderradius="6px 6px 0px 0px"
                  id="address1"
                  className="sc-bcXHqe sc-evzXkX fIfmaf dcghfO form-control pac-target-input"
                  defaultValue=""
                />
                <div id="AddressFieldsWrapper" className="sc-kLgxMn kEOWuf">
                  <div id="RowWrapper" className="sc-gKPRtg djiNSH row">
                    <input
                      autoComplete="address-line2"
                      placeholder="Address line 2"
                      id="address2"
                      className="sc-bcXHqe sc-kgTSHT fIfmaf keNUtJ form-control"
                      defaultValue=""
                    />
                    <input
                      autoComplete="city shipping address-level2"
                      name="city"
                      placeholder="Suburb or city"
                      id="city"
                      className="sc-bcXHqe sc-dmctIk fIfmaf eDQUpO form-control"
                      defaultValue="Singapore"
                    />
                  </div>
                  <div id="RowWrapper" className="sc-gKPRtg djiNSH row">
                    <input
                      placeholder="State/Region"
                      autoComplete="province shipping address-level1"
                      id="regionAutocomplete"
                      className="sc-jSUZER bKBoaI"
                      defaultValue=""
                    />
                    <input
                      placeholder="State/Region"
                      autoComplete="province shipping address-level1"
                      name="region"
                      id="region"
                      className="sc-bcXHqe sc-hTRxPq fIfmaf jpnxkN form-control"
                      defaultValue=""
                    />
                  </div>
                  <input
                    placeholder="Postal Code"
                    autoComplete="postal-code"
                    id="postCodeAutocomplete"
                    className="sc-jSUZER bKBoaI"
                    defaultValue=""
                  />
                  <input
                    autoComplete="postal-code"
                    placeholder="Postal code"
                    id="postCode"
                    className="sc-bcXHqe sc-hHTYSt fIfmaf iYzbmc form-control"
                    defaultValue={10001}
                  />
                  <div className=" css-2b097c-container" id="country">
                    <span
                      aria-live="polite"
                      aria-atomic="false"
                      aria-relevant="additions text"
                      className="css-7pg0cj-a11yText"
                    />
                    <div className=" css-lkd1b-control">
                      <div className=" css-1hwfws3">
                        <div className=" css-107bg7t-singleValue">
                          Singapore
                        </div>
                        <div className="css-1g6gooi">
                          <div className="" style={{ display: "inline-block" }}>
                            <input
                              autoCapitalize="none"
                              autoComplete="off"
                              autoCorrect="off"
                              id="react-select-3-input"
                              spellCheck="false"
                              tabIndex={0}
                              type="text"
                              aria-autocomplete="list"
                              aria-label="Country Select"
                              defaultValue=""
                              style={{
                                boxSizing: "content-box",
                                width: 2,
                                background: "0px center",
                                border: 0,
                                fontSize: "inherit",
                                opacity: 1,
                                outline: 0,
                                padding: 0,
                                color: "inherit",
                              }}
                            />
                            <div
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                visibility: "hidden",
                                height: 0,
                                overflow: "scroll",
                                whiteSpace: "pre",
                                fontSize: 16,
                                fontFamily:
                                  '-apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                fontWeight: 400,
                                fontStyle: "normal",
                                letterSpacing: "normal",
                                textTransform: "none",
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className=" css-1wy0on6">
                        <span className=" css-1okebmr-indicatorSeparator" />
                        <div
                          className=" css-tlfecz-indicatorContainer"
                          aria-hidden="true"
                        >
                          <svg
                            height={20}
                            width={20}
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            focusable="false"
                            className="css-8mmkcg"
                          >
                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <input name="country" type="hidden" defaultValue="SG" />
                  </div>
                </div>
                <div
                  id="AddNewShippingAddressButtonContainer"
                  className="sc-fuRDZQ kSuswy"
                >
                  <div
                    id="AddressFormButtonsWrapper"
                    className="sc-iiNlcH fTqYuU"
                  >
                    <button className="sc-jeToga gHUInR">
                      <h4
                        color="black"
                        className="sc-dGQEGF sc-iuxOeI hBmljY fRame"
                      >
                        Cancel
                      </h4>
                    </button>
                    <button type="submit" className="sc-kIRMQU iNPIBA">
                      <h4
                        color="white"
                        className="sc-dGQEGF sc-iuxOeI fcIKhQ eNgvW"
                      >
                        Save address
                      </h4>
                    </button>
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

export default AddressComponent;
