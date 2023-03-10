import React, { useRef, useEffect, useState, Component } from "react";

import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { setCardToken, performPayment } from "../../actions";
import ShippingComponent from "./../shipping/ShippingComponent";

import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import "react-phone-number-input/style.css";

import {
  Grid,
  Button,
  Form,
  Header,
  Segment,
  Message,
} from "semantic-ui-react";

import ErrorMessage from "../ErrorMessage";
// styles
import { useSpring, animated } from "react-spring";

import "./styles.css";

const SpreedlyCreditCard = (props) => {
  // ccexp


  
  const [value, setValue] = useState();

  const inputRef = useRef(null);

  const [ccExpArr, setCCExpArr] = useState({});

  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  console.log({ month });
  console.log({ year });

  const handleSubmit = (e) => {

  }

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
      console.log("full");

      const arr = formattedValue.split("/");
      console.log(arr);
      setMonth(arr[0]);
      setYear("20" + arr[1]);
      // if (ccExpArr.length >= 1) {
      //   setMonth(ccExpArr[0]);
      //   setYear(ccExpArr[1]);
      // }
    }
  }

  // importing from old checkout

  const [cartOpened, setIsCartOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [displayCoupon, setDisplayCoupon] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [processingPayment, setProcessingPayment] = useState(false);
  // url query params
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const storeCode = searchParams.get("storeCode");
  const merchantId = searchParams.get("merchantId");
  const src = searchParams.get("src");
  const items = searchParams.get("items");
  const cartId = searchParams.get("cartId");
  const currencyCode = searchParams.get("currencyCode");
  // url query params but in json
  const payload = {
    storeCode: storeCode,
    merchantId: merchantId,
    src: src,
    items: items,
    cartId: cartId,
    currencyCode: currencyCode,
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setProcessingPayment(!processingPayment);
  };

  const couponField = useRef();

  const handleCouponClick = () => {
    setDisplayCoupon(!displayCoupon);
    setTimeout(() => {
      couponField.current.focus();
    }, 100);
  };

  const handleCart = () => {
    if (isVisible) {
      setIsVisible(false);
      setTimeout(() => {
        setIsCartOpened(false);
      }, 200);
    } else {
      setIsVisible(true);
      setIsCartOpened(true);
    }
  };

  const springProps = useSpring({
    height: isVisible ? "auto" : 0,
    opacity: isVisible ? 1 : 0,
  });

  // end importing from old checkout

  const [paymentErrors, setPaymentErrors] = useState([]);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentCaptured, setPaymentCaptured] = useState(false);

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

  useEffect(() => {
    // setTimeout(() => {
    //   const cardNumber = document.getElementById("spreedly-number");
    //   console.log(cardNumber);
    // }, 4000);
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

      window.Spreedly.setParam("allow_blank_name", true);
      window.Spreedly.setParam("allow_expired_date", true);
      // credit card number
      window.Spreedly.setPlaceholder("number", "Card Number");
      window.Spreedly.setFieldType("number", "text");

      window.Spreedly.setStyle(
        "number",
        "scroll-behavior: auto; font-size: 16px; !important;"
      );

      window.Spreedly.setStyle("number", "border: 0; padding: 0;");
      window.Spreedly.setStyle(
        "number",
        "display: inline-block; vertical-align: middle;"
      );
      window.Spreedly.setStyle("number", "background: none; line-height: 1;");
      window.Spreedly.setStyle(
        "number",
        "box-sizing: border-box; color: rgb(33, 37, 41);"
      );
      window.Spreedly.setStyle(
        "number",
        " font-family: -apple-system, BlinkMacSystemFont, Inter, Roboto, Helvetica Neue, Ubuntu, sans-serif; height: 98vh;"
      );

      window.Spreedly.setNumberFormat("prettyFormat");
      // cvv
      window.Spreedly.setPlaceholder("cvv", "CVV");
      window.Spreedly.setFieldType("cvv", "text");
      window.Spreedly.setStyle("cvv", "scroll-behavior: auto; margin: 0;");
      window.Spreedly.setStyle("cvv", "border: 0; padding: 0;");
      window.Spreedly.setStyle(
        "cvv",
        "display: inline-block; vertical-align: middle;"
      );
      window.Spreedly.setStyle("cvv", "background: none; line-height: 1;");
      window.Spreedly.setStyle(
        "cvv",
        "box-sizing: border-box; color: rgb(33, 37, 41);"
      );
      window.Spreedly.setStyle("cvv", "font-size: 16px;");
      window.Spreedly.setStyle(
        "cvv",
        "font-family: -apple-system, BlinkMacSystemFont, Inter, Roboto, Helvetica Neue, Ubuntu, sans-serif; height: 98vh;"
      );
      // testing
      window.Spreedly.setValue("number", "4111111111111111");
      window.Spreedly.setValue("cvv", "123");
      if (month && year) {
        console.log("month and year set in spreedly");
        window.Spreedly.setValue("month", month);
        window.Spreedly.setValue("year", year);
      }

      // document.getElementById("month").value = 10;
      // document.getElementById("year").value = 2020;
    });

    window.Spreedly.on("errors", (errors) => {
      for (let i = 0; i < errors.length; i++) {
        var error = errors[i];
        console.log(error);
      }

      setPaymentProcessing(false);

      // refresh the form
      window.Spreedly.reload();
      document.getElementById("month").value = "";
      document.getElementById("year").value = "";

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
    requiredFields["full_name"] = "";
    requiredFields["month"] = month;
    requiredFields["year"] = year;

    window.Spreedly.tokenizeCreditCard(requiredFields);
    setPaymentProcessing(true);
  };

  const colorScheme = "olive";
  const hasErrors = paymentErrors.length > 0;

  return (
    <div className="snipcss-Sevqj">
      <div id="root" className="">
        <div
          style={{
            position: "fixed",
            zIndex: 9999,
            inset: 16,
            pointerEvents: "none",
          }}
        ></div>
        <input type="hidden" name="pmnts_id" id="pmnts_id" />
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
        <input
          type="hidden"
          name="payment_method_token"
          id="payment_method_token"
        />
        <div id="MainContainer" className="fiSoQW">
          <div id="CheckoutContainer" className="oYYOn">
            <div id="CheckoutFormSectionContainer" className="fBURuJ">
              <div id="SectionContainer" className="lnxYvH">
                <div id="poweredByInstantBanner" style={{ padding: 10 }}>
                  <div
                    id="BannerContainer"
                    className={cartOpened ? "cartEnabled" : "eHICVZ"}
                  >
                    <div id="HeaderInnerContainer" className="cLMvmi separate">
                      <span className="Marginer"></span>
                      <div id="BannerLogoContainer" className="cGGLwj">
                        <div id="MerchantLogoContainer" className="hkSZnk">
                          <span
                            className={`merchantName ${cartOpened && "blur"}`}
                          >
                            Kitchen&More{" "}
                            <span className="">
                              <svg
                                className="checkMark"
                                preserveAspectRatio="none"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.4975 4.99521C12.107 4.60468 11.4738 4.60468 11.0833 4.99521L7 9.08579L5.20711 7.29289C4.81658 6.90237 4.18342 6.90237 3.79289 7.29289C3.40237 7.68342 3.40237 8.31658 3.79289 8.70711L6.29289 11.2071C6.68342 11.5976 7.31658 11.5976 7.70711 11.2071L12.4975 6.40942C12.888 6.0189 12.888 5.38573 12.4975 4.99521Z"
                                  fill="#3587F7"
                                />
                              </svg>
                            </span>
                          </span>
                          {/* <img
                        id="MerchantLogoImg"
                        src="https://www.revereshoes.com.au/media/logo/stores/1/revere_logo_Colour.gif"
                        className="hIZXgi"
                      /> */}
                        </div>
                        <div
                          onClick={() => handleCart()}
                          id="BackContainer"
                          className="HkXEw"
                        >
                          {cartOpened ? (
                            "🎉"
                          ) : (
                            <img
                              alt="Cart"
                              height={16}
                              src="data:image/svg+xml,%3Csvg%20fill='%233D464D'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M7%2018c-1.1%200-1.99.9-1.99%202S5.9%2022%207%2022s2-.9%202-2-.9-2-2-2zM1%202v2h2l3.6%207.59-1.35%202.45c-.16.28-.25.61-.25.96%200%201.1.9%202%202%202h12v-2H7.42c-.14%200-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75%200%201.41-.41%201.75-1.03l3.58-6.49A1.003%201.003%200%200%200%2020%204H5.21l-.94-2H1zm16%2016c-1.1%200-1.99.9-1.99%202s.89%202%201.99%202%202-.9%202-2-.9-2-2-2z'/%3E%3Cpath%20d='M0%200h24v24H0z'%20fill='none'/%3E%3C/svg%3E"
                            />
                          )}

                          <h4 id="BackText" className="iqNqGh">
                            A$179.95
                          </h4>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 512 512"
                            className="hBXhLe"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div
                      id="ViewOrderContainer"
                      className="hWPlEc"
                      style={{ display: cartOpened ? "flex" : "none" }}
                    >
                      <div id="CartItemContainer" className="kGmMRp">
                        <div id="CartItemImgContainer" className="koqOKo">
                          <img
                            id="CartItemImg"
                            src="https://www.revereshoes.com.au/media/catalog/product/a/p/api-v1.1-rn-public_files-pim-assets-d6-3f-49-60-60493fd6da28b5ea537d22b7-images-20-b9-d0-63-63d0b920bd5bcbdd3c545eaf-Hudson-Navy-Profile-1.jpg-33HUDSNAVM100W.jpg"
                            className="cnpoae"
                          />
                        </div>
                        <div className="iKUTyA">
                          <div id="CartItemDetailsContainer" className="gIRUqr">
                            <h4 id="CartItemName" className="gsNyQL">
                              Hudson Sneaker
                            </h4>
                            <h4 id="CartItemAttribute" className="iBFNXm">
                              Colour: Navy
                            </h4>
                            <h4 id="CartItemAttribute" className="iBFNXm">
                              Width: Wide
                            </h4>
                            <h4 id="CartItemAttribute" className="iBFNXm">
                              Size: US 10
                            </h4>
                          </div>
                          <div id="CartItemRow" className="kuCSrM">
                            <h4 id="CartItemTotalPrice" className="kAJome">
                              A$179.95
                            </h4>
                            <h4 id="QtyText" className="bVxARY">
                              Qty: 1
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div
                        id="OrderCostLineContainer"
                        className="gkgEoN"
                        style={{ padding: "15px 0px" }}
                      >
                        <div
                          id="CartTotalsContainer"
                          className="jYjysP"
                          style={{ paddingBottom: 10 }}
                        >
                          <div id="OrderCostline" className="eAEKAa">
                            <div
                              id="CheckoutLineTitleComponentContainer"
                              className="kuWelW"
                            >
                              <h4
                                id="OrderCostLineText"
                                color="rgba(26, 26, 26, 0.9)"
                                fontSize="16px"
                                fontWeight={400}
                                className="ekSDsE"
                              >
                                Subtotal (Inc. Tax)
                              </h4>
                            </div>
                            <div
                              id="CheckoutLinePriceComponentContainer"
                              className="eRAioS"
                            >
                              <h4
                                id="OrderCostLineText"
                                color="rgba(26, 26, 26, 0.9)"
                                fontSize="16px"
                                fontWeight={400}
                                className="ekSDsE"
                              >
                                A$179.95
                              </h4>
                            </div>
                          </div>
                          <div id="OrderCostline" className="eAEKAa">
                            <div
                              id="CheckoutLineTitleComponentContainer"
                              className="kuWelW"
                            >
                              <h4
                                id="OrderCostLineText"
                                color="rgba(26, 26, 26, 0.9)"
                                fontSize="16px"
                                fontWeight={400}
                                className="ekSDsE"
                              >
                                Shipping
                              </h4>
                            </div>
                            <div
                              id="CheckoutLinePriceComponentContainer"
                              className="eRAioS"
                            >
                              <h4
                                id="OrderCostLineText"
                                color="rgba(26, 26, 26, 0.9)"
                                fontSize="16px"
                                fontWeight={400}
                                className="ekSDsE"
                              >
                                A$0.00
                              </h4>
                            </div>
                          </div>
                          <div id="OrderCostline" className="eAEKAa">
                            <div
                              id="CheckoutLineTitleComponentContainer"
                              className="kuWelW"
                            >
                              <h4
                                id="OrderCostLineText"
                                color="rgba(26, 26, 26, 0.9)"
                                fontSize="16px"
                                fontWeight={400}
                                className="ekSDsE"
                              >
                                Tax
                              </h4>
                            </div>
                            <div
                              id="CheckoutLinePriceComponentContainer"
                              className="eRAioS"
                            >
                              <h4
                                id="OrderCostLineText"
                                color="rgba(26, 26, 26, 0.9)"
                                fontSize="16px"
                                fontWeight={400}
                                className="ekSDsE"
                              >
                                A$0.00
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div
                          id="GrandTotalOrderLineContainer"
                          className="bxBdZP"
                          style={{ paddingTop: 10 }}
                        >
                          <div id="OrderCostline" className="eAEKAa">
                            <div
                              id="CheckoutLineTitleComponentContainer"
                              className="kuWelW"
                            >
                              <h4
                                id="OrderCostLineText"
                                color="rgba(26, 26, 26, 0.9)"
                                fontSize="18px"
                                fontWeight={400}
                                className="evFnYG"
                              >
                                Order total
                              </h4>
                            </div>
                            <div
                              id="CheckoutLinePriceComponentContainer"
                              className="eRAioS"
                            >
                              <h4
                                id="OrderCostLineText"
                                color="rgba(26, 26, 26, 0.9)"
                                fontSize="18px"
                                fontWeight={400}
                                className="evFnYG"
                              >
                                A$179.95
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="selectedDeliveryMethod" value="SHIPPING"></div>
                <form onSubmit={handleSubmit} id="CompleteProfileMainFormContainer" className="fsSneX">
                  <div id="RowWrapper" className="djiNSH row">
                    <h4
                      id="CompleteProfileHeaderText"
                      className="lgqJFl eKvixq"
                    >
                      Your information
                    </h4>
                    <h4 id="ValidationErrorText" className="bNA-dtG"></h4>
                  </div>
                  <span id="Marginer" width={5} className="gDwDep"></span>
                  <input
                    name="email"
                    placeholder="Email"
                    id="email"
                    className="fIfmaf gRXGR form-control"
                    defaultValue=""
                    autoFocus
                    tabIndex={1}
                  />

                  <PhoneInput
                    international
                    flags={flags}
                    defaultCountry="US"
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                    tabIndex={2}
                  />
                  <div id="RowWrapper" className="djiNSH row">
                    <input
                      data-testid="firstName"
                      name="firstName"
                      autoComplete="given-name"
                      placeholder="First and last name"
                      id="firstName"
                      className="fIfmaf bjckf form-control"
                      defaultValue=""
                      style={{
                        borderBottomRightRadius: 6,
                        borderRight: "1px solid lightgray",
                      }}
                      tabIndex={3}
                    />
                  </div>
                  <span id="Marginer" className="ieymL"></span>

                  <div id="RowWrapper" className="djiNSH row">
                    <h4
                      id="CompleteProfileHeaderText"
                      className="lgqJFl eKvixq"
                    >
                      Payment method
                    </h4>
                    <h4 id="ValidationErrorText" className="bNA-dtG"></h4>
                  </div>

                  <span id="Marginer" className="bLmTAm"></span>
                  <div id="RowWrapper" className="sc-gKPRtg djiNSH row">
                    <div
                      id="CardInputContainer"
                      className="sc-bTTELM sc-gsGlKL dIVaVV XJnCb row"
                    >
                      <div
                        id="PaymentInputsWrapper"
                        className="sc-dwnOUR clLfEp"
                      >
                        <div className="sc-UpCWa ecUfhz">
                          <span
                            id="cc-number"
                            className="sc-GKYbw fQAZmq vgs-collect-container__empty vgs-collect-container__invalid vgs-collect-container__touched"
                          >
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
                              className="icon css-1jd8m52  card-icon"
                            ></img>
                          </span>
                        </div>
                      </div>
                      <div
                        id="PaymentInputsWrapper"
                        className="sc-dwnOUR cmcdvS"
                      >
                        <div className="sc-UpCWa lciJdD">
                          <span
                            id="cc-expiration-date"
                            className="sc-GKYbw fQAZmq vgs-collect-container__empty vgs-collect-container__invalid vgs-collect-container__touched"
                          >
                            <input
                              className="css-10xyftw invalid empty card-exp"
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
                            {/* TEST */}
                            {/* <input
                              className="css-10xyftw invalid empty card-exp"
                              maxLength={2}
                              placeholder="MM"
                              id="month"
                              type="tel"
                              name="month"
                            ></input> */}

                            {/* <input
                              className="css-10xyftw invalid empty card-exp"
                              maxLength={4}
                              placeholder="YYYY"
                              id="year"
                              name="year"
                              type="tel"
                            ></input> */}
                          </span>
                        </div>
                      </div>
                      <div
                        id="PaymentInputsWrapper"
                        className="sc-dwnOUR gXftSI"
                      >
                        <div className="sc-UpCWa bkNiHc">
                          <span
                            id="cc-cvc"
                            className="sc-GKYbw fQAZmq vgs-collect-container__empty vgs-collect-container__invalid"
                          >
                            <div
                              type="tel"
                              id="spreedly-cvv"
                              name="spreedly-cvv"
                              className="css-10xyftw invalid empty card-cvv"
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
                  <span id="Marginer" className="ieymL"></span>
                  <ShippingComponent />
                  <span id="Marginer" className="ieymL"></span>
                  <div id="CartExtraFeesMainContainer" className="hkDEcB"></div>
                  <div id="CouponCodeWrapper" className="clivIu">
                    <div id="CouponCodeMainContainer" className="inxTnH">
                      <div
                        id="UtilDiv"
                        hidden=""
                        className="ebBRnt"
                        style={{ display: displayCoupon ? "block" : "none" }}
                      >
                        <div
                          id="RowWrapper"
                          width="100%"
                          className="gVXtdP row"
                        >
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
                              <button
                                color="#0080E9"
                                cursor="pointer"
                                className="bDqFIu"
                              >
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
                  <span id="Marginer" className="ieymL"></span>
                  <button
                    onClick={submitPaymentForm}
                    type="submit"
                    height="50px"
                    id="submit-button"
                    className="itqktj"
                    tabIndex={12}
                    style={{ background: "rgb(0, 116, 212)" }}
                  >
                    {processingPayment && "Processing..."}
                    {!processingPayment && "Complete Purchase"}
                  </button>
                  <span id="Marginer" className="ieymd"></span>
                  <div id="BackFooterButtonContainer" className="bmMrrA">
                    <div id="BackFooterButtonInnerContainer" className="eRnxLG">
                      <h4 id="BackFooterButtonIcon" className="gMIgWT gjwnNJ">
                        ←
                      </h4>
                      <h4 id="BackFooterButtonText" className="gMIgWT jRpanj">
                        BACK TO STORE
                      </h4>
                    </div>
                  </div>
                  <span id="Marginer" className="ieymd"></span>
                  <div id="HorizontalLine" className="jrJNwj"></div>
                  <div
                    id="RowWrapper"
                    padding="5px"
                    justifycontent="space-between"
                    className="hMyymS row"
                  >
                    {/* <div id="PoweredByWrapper" className="eAzkqc">
                      <h4 id="TinyBodyText" className="fXziTs czrHSx">
                        Powered by veryfast
                      </h4>
                      <img
                        size={14}
                        src="https://instant-imgs.s3.ap-southeast-2.amazonaws.com/logo_29-09-21.png"
                        className="iCBYsR"
                      />
                    </div> */}
                    <div id="TermsAndPrivacyWrapper" className="jpdVsB">
                      <h4 id="TinyLinkText" className="gMIgWT czrHSx cQzbjF">
                        Terms
                      </h4>
                      <span id="Marginer" className="idvxqK"></span>
                      <h4 id="TinyLinkText" className="gMIgWT czrHSx cQzbjF">
                        Privacy
                      </h4>
                    </div>
                  </div>
                  <span id="Marginer" className="ieypQ"></span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <iframe
    src="https://js.verygoodvault.com/vgs-collect/2.12.0/lib/index.html#telemetry=1&tnt=dG50OG9vOTR2b3A%3D"
    id="randomId204571119963426904"
    style={{
      height: 0,
      width: 0,
      border: 0,
      position: "absolute",
      bottom: "-100px",
      left: "-100px",
    }}
  ></iframe> */}
      <div
        className="pac-container pac-logo hdpi"
        style={{
          display: "none",
          width: 0,
          position: "absolute",
          left: 0,
          top: 0,
        }}
      ></div>
      <div
        className="pac-container pac-logo hdpi"
        style={{
          display: "none",
          width: 430,
          position: "absolute",
          left: 649,
          top: 422,
        }}
      ></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { payment: state.payment, transactions: state.transactions };
};

export default connect(mapStateToProps, {
  setCardToken,
  performPayment,
})(SpreedlyCreditCard);
