import React, { useState, useRef } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

const states = [
  // "--Select a State--",
  "Alabama",
  "Alaska",
  "Arizona",
  // Add all 50 states here
  "Wyoming",
];

const options = countryList()
  .getData()
  .map((country) => ({
    label: country.label,
    value: country.value,
  }));

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: "1px solid #ced4da",
    borderTop: "none",
    boxShadow: state.isFocused ? "none" : "none",
    height: "45px",
    fontSize: "16px",
    borderRadius: "0",
    borderBottomRightRadius: "6px",
    borderBottomLeftRadius: "6px",
    paddingLeft: "5px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#61dafb" : "white",
    color: state.isFocused ? "white" : "black",
    "&:hover": {
      backgroundColor: "#61dafb",
      color: "white",
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: state.isFocused ? "#61dafb" : "black",
  }),
};

function ShippingComponent({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  handleSubmit,
  handleCountry,
  countryValue,
}) {
  const [enteredShippingAddress, setEnteredShippingAddress] = useState(false);
  const [shippingMethods, setShippingMethods] = useState([]);
  const availableShippingMethods = shippingMethods.length;
  const addrLn1 = useRef();

  if (values.addressLine1.length >= 3 && enteredShippingAddress === false) {
    setEnteredShippingAddress(true);
  }

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
          {/* <h4 id="ValidationErrorText" className="sc-kerCdx kNhFIc" /> */}
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
          tabIndex={7}
          ref={addrLn1}
          autoComplete="off"
          name="addressLine1"
          placeholder="Address"
          borderbottom="1px solid #e0e0e0"
          borderradius="6px 6px 0px 0px"
          id="addressLine1"
          className={`sc-bcXHqe sc-evzXkX fIfmaf dcghfO form-control ${
            errors.addressLine1 && touched.addressLine1 && "input-error"
          }`}
          value={values.addressLine1}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{
            borderBottom: enteredShippingAddress ? "0" : "1px solid #ccc",
            borderRadius: enteredShippingAddress ? "6px 6px 0px 0px" : "6px",
          }}
        />

        <div
          style={{ display: enteredShippingAddress ? "block" : "none" }}
          id="AddressFieldsWrapper"
          className="sc-kLgxMn kEOWuf"
        >
          <div id="RowWrapper" className="sc-gKPRtg djiNSH row">
            <input
              autoComplete="address-line2"
              placeholder="Address line 2 (optional)"
              id="addressLine2"
              name="addressLine2"
              className={`sc-bcXHqe sc-kgTSHT fIfmaf keNUtJ form-control ${
                errors.addressLine2 && touched.addressLine2 && "input-error"
              }`}
              value={values.addressLine2}
              tabIndex={8}
              style={{ borderRadius: 0 }}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>

          <input
            autoComplete="city"
            placeholder="City/Suburb"
            id="city"
            name="city"
            className={`sc-bcXHqe sc-hHTYSt fIfmaf iYzbmc form-control ${
              errors.city && touched.city && "input-error"
            }`}
            tabIndex={9}
            style={{ borderTop: 0 }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.city}
          />
          <input
            autoComplete="state"
            placeholder="State/Region"
            id="state"
            name="state"
            className={`sc-bcXHqe sc-hHTYSt fIfmaf iYzbmc form-control ${
              errors.state && touched.state && "input-error"
            }`}
            defaultValue=""
            tabIndex={9}
            style={{ borderTop: 0 }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.state}
          />
          <input
            autoComplete="postal-code"
            placeholder="Postal code"
            id="zip"
            name="zip"
            className={`sc-bcXHqe sc-hHTYSt fIfmaf iYzbmc form-control ${
              errors.zip && touched.zip && "input-error"
            }`}
            tabIndex={10}
            style={{ borderTop: 0 }}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.zip}
          />
          <Select
            options={options}
            value={countryValue}
            onChange={handleCountry}
            placeholder="Select a country"
            styles={customStyles}
          />
        </div>

        {enteredShippingAddress && (
          <div id="RowWrapper" className="sc-gKPRtg djiNSH row">
            <div id="ShippingMethodsContainer" className="sc-erijoS iaAjQw">
              <div
                id="ShippingMethodMainContainer"
                className="sc-eZURND kOcwjy"
              >
                <div
                  id="ShippingMethodDetailsContainer"
                  className="sc-kxtuKG lkaTfT"
                  style={{ padding: 10 }}
                >
                  {availableShippingMethods === 0 && (
                    <h4 id="BodyText" className="sc-ftTHYK gMIgWT">
                      No shipping methods available for this address
                    </h4>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShippingComponent;

{
  /* <select
            tabIndex={11}
            name="countrySelect"
            id="countrySelect"
            aria-label="Phone number country"
            className={`state ${
              errors.countrySelect && touched.countrySelect && "input-error"
            }`}
            style={{
              borderTop: 0,
              paddingLeft: 16,
              borderRadius: "0 0 6px 6px",
            }}
            onChange={handleChange}
            value={values.countrySelect}
            onBlur={handleBlur}
          >
            <option value="">Select a Country</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select> */
}
