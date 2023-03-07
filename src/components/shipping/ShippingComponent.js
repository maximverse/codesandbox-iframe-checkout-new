import React from "react";
import "./shipping.css";

function ShippingComponent() {
  return (
    <div>
      <div id="UtilDiv" className="sc-fLcnxK ebGFBo">
        <div id="RowWrapper" className="sc-gKPRtg djiNSH row">
          <h4
            id="CompleteProfileHeaderText"
            className="sc-iBYQkv sc-EdmDu lgqJFl fCA-Daf"
          >
            Shipping address
          </h4>
          <h4 id="ValidationErrorText" className="sc-kerCdx kNhFIc" />
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
          className="sc-bcXHqe sc-evzXkX fIfmaf dcghfO form-control"
          defaultValue="5th ave"
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
              defaultValue=""
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
            <div className=" css-2b097c-container" id="region">
              <span
                aria-live="polite"
                aria-atomic="false"
                aria-relevant="additions text"
                className="css-7pg0cj-a11yText"
              />
              <div className=" css-ox4o4j-control">
                <div className=" css-1hwfws3">
                  <div className=" css-19uk7i0-placeholder">State/Region</div>
                  <div className="css-1g6gooi">
                    <div className="" style={{ display: "inline-block" }}>
                      <input
                        autoCapitalize="none"
                        autoComplete="off"
                        autoCorrect="off"
                        id="react-select-4-input"
                        spellCheck="false"
                        tabIndex={0}
                        type="text"
                        aria-autocomplete="list"
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
                            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
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
              <input name="region" type="hidden" defaultValue="" />
            </div>
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
            defaultValue=""
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
                <div className=" css-19uk7i0-placeholder">Country</div>
                <div className="css-1g6gooi">
                  <div className="" style={{ display: "inline-block" }}>
                    <input
                      autoCapitalize="none"
                      autoComplete="off"
                      autoCorrect="off"
                      id="react-select-5-input"
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
                          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
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
            <input name="country" type="hidden" defaultValue="" />
          </div>
        </div>
        <div id="RowWrapper" className="sc-gKPRtg djiNSH row">
          <div id="ShippingMethodsContainer" className="sc-erijoS iaAjQw">
            <div id="ShippingMethodMainContainer" className="sc-eZURND kOcwjy">
              <div
                id="ShippingMethodDetailsContainer"
                className="sc-kxtuKG lkaTfT"
                style={{ padding: 10 }}
              >
                <h4 id="BodyText" className="sc-ftTHYK gMIgWT">
                  No shipping methods available for this address
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingComponent;