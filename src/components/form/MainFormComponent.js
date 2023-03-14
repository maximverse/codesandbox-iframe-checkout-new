import React, { useRef, useEffect, useState, Component } from "react";

import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { setCardToken, performPayment } from "../../actions";
import ShippingComponent from "../shipping/ShippingComponent";
import { useFormik } from "formik";
import basicSchema from "../../schemas";
import { setParams } from "../helpers/spreedlySetup";

import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import "react-phone-number-input/style.css";
import FooterComponent from "../layout/FooterComponent";
import CouponComponent from "../ui/coupon/CouponComponent";

const MainFormComponent = (props) => {
  const [processingPayment, setProcessingPayment] = useState(false);
  const [couponValue, setCouponValue] = useState("");
  const [phone, setPhone] = useState();
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [displayCoupon, setDisplayCoupon] = useState(false);
  const [paymentErrors, setPaymentErrors] = useState([]);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentCaptured, setPaymentCaptured] = useState(false);

  const [countryValue, setCountryValue] = useState("");
  const handleCountry = (selectedOption) => {
    setCountryValue(selectedOption);
  };

  // form validation
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    isValid,
    isDirty,
  } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zip: "",
      countrySelect: "",
    },
    validationSchema: basicSchema,
    // onSubmit
  });

  const inputRef = useRef(null);

  function handleInputChange(event) {
    const { value } = event.target;
    let formattedValue = value;

    if (
      value.length === 2 &&
      event.nativeEvent.inputType !== "deleteContentBackward"
    ) {
      // Automatically add a slash after the month is entered
      formattedValue += "/";
      // Focus on the year input field
      inputRef.current.focus();
    }

    // Limit the length of the input to 5 characters (MM/YY)
    if (formattedValue.length > 5) {
      formattedValue = formattedValue.slice(0, 5);
    }

    // Update the input field value
    event.target.value = formattedValue;
    if (formattedValue.length >= 5) {
      const arr = formattedValue.split("/");
      console.log(arr);
      setMonth(arr[0]);
      setYear("20" + arr[1]);
    }
  }

  const couponField = useRef();

  const handleCouponClick = () => {
    setDisplayCoupon(!displayCoupon);
    setTimeout(() => {
      couponField.current.focus();
    }, 100);
  };

  useEffect(() => {
    console.log(`In spreedly payment...`);
    if (window.Spreedly) {
      setupSpreedly();
      console.log(`Spreedly init-ed`);
    }

    return () => {
      window.Spreedly.removeHandlers();
    };
  }, []);

  const setupSpreedly = () => {
    const that = this;

    const submitButton = document.getElementById("submit-button");
    submitButton.disabled = true;

    // get from config
    window.Spreedly.init("9LOCZRk9HeBm84jvnONUiFqBu0C", {
      numberEl: "spreedly-number",
      cvvEl: "spreedly-cvv",
    });

    window.Spreedly.on("ready", function () {
      console.log(`Spreedly ready....`);
      const submitButton = document.getElementById("submit-button");
      submitButton.disabled = false;

      const Spreedly = window.Spreedly;
      setParams(Spreedly);

      // testing
      window.Spreedly.setValue("number", "4111111111111111");
      window.Spreedly.setValue("cvv", "123");
      if (month && year) {
        console.log("month and year set in spreedly");
        window.Spreedly.setValue("month", month);
        window.Spreedly.setValue("year", year);
      }
    });

    window.Spreedly.on("errors", (errors) => {
      for (let i = 0; i < errors.length; i++) {
        var error = errors[i];
        console.log(error);
      }

      setPaymentProcessing(false);

      // refresh the form
      window.Spreedly.reload();
      // document.getElementById("month").value = "";
      // document.getElementById("year").value = "";

      const errorMessages = errors.map((err) => err.message);
      setPaymentErrors(errorMessages);
    });

    window.Spreedly.on("paymentMethod", async (token, paymentMethod) => {
      // Set the token in the hidden form field
      console.log(`Tokenization success...`);
      props.setCardToken(token, "credit-card");
      try {
        const paymentPayload = {
          preauthToken: token,
          amount: 100,
          test: true,
          currency: "USD",
        };
        await props.performPayment(paymentPayload, "credit-card");
        setPaymentCaptured(true);
        setPaymentErrors([]);
      } catch (e) {
        console.error(`Cannot complete payment : ${e.message}`);
        setPaymentErrors([e]);
      } finally {
        setPaymentProcessing(false);
      }
    });
  };

  const submitPaymentForm = (e) => {
    e.preventDefault();
    const requiredFields = {};
    requiredFields["fullName"] = values.fullName;
    requiredFields["month"] = month;
    requiredFields["year"] = year;

    window.Spreedly.tokenizeCreditCard(requiredFields);
    setPaymentProcessing(true);
  };

  const colorScheme = "olive";
  const hasErrors = paymentErrors.length > 0;

  return (
    <form
      onSubmit={handleSubmit}
      id="CompleteProfileMainFormContainer"
      className="div__class__holder"
    >
      <input type="hidden" name="pmnts_id" id="pmnts_id" />
      <input
        type="hidden"
        name="payment_method_token"
        id="payment_method_token"
      />
      <div id="RowWrapper" className="RowWrapperDiv rowDiv">
        <h4
          id="CompleteProfileHeaderText"
          className="CompleteProfileHeaderText__el CompleteHeaderText__h4"
        >
          Your information
        </h4>
        <h4 id="ValidationErrorText" className="ValidationErrorText"></h4>
      </div>
      <span id="Marginer" width={5} className="gDwDep"></span>
      <input
        name="email"
        placeholder="Email"
        id="email"
        className={`inputClass gRXGR new-form-control ${
          errors.email && touched.email && "input-error"
        }`}
        autoFocus
        tabIndex={1}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && touched.email && values.email.length !== 0 && (
        <p className="error">{errors.email}</p>
      )}

      <PhoneInput
        international
        flags={flags}
        defaultCountry="US"
        placeholder="Enter phone number"
        value={phone}
        onChange={(value) => setPhone(value)}
        tabIndex={2}
      />
      <div id="RowWrapper" className="RowWrapperDiv rowDiv">
        <input
          data-testid="fullName"
          name="fullName"
          autoComplete="given-name"
          placeholder="First and last name"
          id="fullName"
          className={`inputClass input__el new-form-control ${
            errors.fullName && touched.fullName && "input-error"
          }`}
          style={{
            borderBottomRightRadius: 6,
            borderRight: "1px solid lightgray",
          }}
          tabIndex={3}
          value={values.fullName}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.fullName &&
          touched.fullName &&
          values.fullName.length !== 0 && (
            <p className="error">{errors.fullName}</p>
          )}
      </div>
      <span id="Marginer" className="inputcl__el"></span>

      <div id="RowWrapper" className="RowWrapperDiv rowDiv">
        <h4
          id="CompleteProfileHeaderText"
          className="CompleteProfileHeaderText__el CompleteHeaderText__h4"
        >
          Payment method
        </h4>
        <h4 id="ValidationErrorText" className="ValidationErrorText"></h4>
      </div>

      <span id="Marginer" className="Marginer__el"></span>
      <div id="RowWrapper" className="RowWrapperDiv rowDiv">
        <div
          id="CardInputContainer"
          className="CardInputContainer CardInputContainer__el rowDiv"
        >
          <div id="PaymentInputsWrapper" className="PaymentInputsWrapper">
            <div className="PaymentInputsWrapper__div__container">
              <span id="cc-number" className="ccSpan__div">
                <div
                  id="spreedly-number"
                  type="tel"
                  className="card-number-input css-gu6vqp invalid empty touched card-number"
                  autoComplete="cc-number"
                  placeholder="Card number"
                  aria-label="Card Number Input"
                  aria-placeholder="Card number"
                  tabIndex={4}
                ></div>
                <img
                  src="data:image/svg+xml,%3csvg width='39' height='24' viewBox='0 0 39 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3crect x='0.5' y='0.5' width='38' height='23' rx='2.5' fill='white' stroke='%23A8B3C1'/%3e %3crect x='3' y='12' width='33' height='2.25' rx='1.125' fill='%23A8B3C1'/%3e %3crect x='3' y='16.5' width='7.5' height='2.25' rx='1.125' fill='%23A8B3C1'/%3e %3crect x='12' y='16.5' width='7.5' height='2.25' rx='1.125' fill='%23A8B3C1'/%3e %3crect x='28.5' y='16.5' width='7.5' height='4.5' rx='0.5' fill='%23A8B3C1'/%3e %3crect x='3' y='3' width='6.75' height='5.25' rx='0.5' fill='%23A8B3C1'/%3e %3c/svg%3e"
                  alt="Card Icon"
                  className="cardIcon__el"
                ></img>
              </span>
            </div>
          </div>
          <div id="PaymentInputsWrapper" className="PaymentInputsWrapper_div">
            <div className="paymentInput__div">
              <span id="cc-expiration-date" className="ccSpan__div">
                <input
                  className="card-exp"
                  autoComplete="cc-exp"
                  placeholder="MM / YY"
                  separator=" / "
                  type="tel"
                  aria-label="Card expiration date"
                  aria-placeholder="MM / YY"
                  onChange={handleInputChange}
                  ref={inputRef}
                  tabIndex={5}
                ></input>
              </span>
            </div>
          </div>
          <div id="PaymentInputsWrapper" className="InputsWrapper_div">
            <div className="WrapperDiv__holder">
              <span id="cc-cvc" className="ccSpan__div">
                <div
                  type="tel"
                  id="spreedly-cvv"
                  name="spreedly-cvv"
                  className="card-cvv"
                  autoComplete="cc-csc"
                  placeholder="CVC"
                  aria-label="Card Security Code"
                  aria-placeholder="CVC"
                  tabIndex={6}
                ></div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <span id="Marginer" className="inputcl__el"></span>
      <ShippingComponent
        values={values}
        errors={errors}
        touched={touched}
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCountry={handleCountry}
        countryValue={countryValue}
      />
      <span id="Marginer" className="inputcl__el"></span>
      <div id="CartExtraFeesMainContainer" className="CartContainer__div"></div>
      <CouponComponent
        displayCoupon={displayCoupon}
        couponField={couponField}
        handleCouponClick={handleCouponClick}
        couponValue={couponValue}
      />
      <span id="Marginer" className="inputcl__el"></span>
      <button
        onClick={submitPaymentForm}
        type="submit"
        height="50px"
        id="submit-button"
        className={`submitBtn ${
          (values.fullName.length === 0 && "disabled") ||
          (errors.fullName && "disabled") ||
          countryValue === ""
            ? "disabled"
            : "" ||
              (values.addressLine1 === "" && "disabled") ||
              (values.city === "" && "disabled") ||
              (values.state === "" && "disabled") ||
              (values.zip === "" && "disabled") ||
              (year.length === 0 && "disabled")
        }`}
        tabIndex={12}
      >
        {processingPayment ? "Processing..." : "Complete Purchase"}
      </button>
      <span id="Marginer" className="Marginer__Div"></span>
      <FooterComponent />
    </form>
  );
};

const mapStateToProps = (state) => {
  return { payment: state.payment };
};

export default connect(mapStateToProps, {
  setCardToken,
  performPayment,
})(MainFormComponent);
