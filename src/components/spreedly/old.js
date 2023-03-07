import React, { useRef, useEffect, useState, Component } from "react";

import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { setCardToken, performPayment } from "../../actions";

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
      window.Spreedly.setStyle("number", "font-size: 14px; padding: 8px;");
      window.Spreedly.setNumberFormat("prettyFormat");
      // cvv
      window.Spreedly.setPlaceholder("cvv", "CVV");
      window.Spreedly.setFieldType("cvv", "text");
      window.Spreedly.setStyle("cvv", "font-size: 14px; padding: 8px;");

      // testing
      window.Spreedly.setValue("number", "4111111111111111");
      window.Spreedly.setValue("cvv", "123");
      window.Spreedly.setValue("month", 11);
      window.Spreedly.setValue("year", 2020);

      document.getElementById("month").value = 10;
      document.getElementById("year").value = 2020;
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

  const submitPaymentForm = () => {
    const requiredFields = {};
    requiredFields["full_name"] = "";
    requiredFields["month"] = document.getElementById("month").value;
    requiredFields["year"] = document.getElementById("year").value;

    window.Spreedly.tokenizeCreditCard(requiredFields);
    setPaymentProcessing(true);
  };

  const colorScheme = "olive";
  const hasErrors = paymentErrors.length > 0;

  return (
    <React.Fragment>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 400 }}>
          <Header as="h2" color={colorScheme} textAlign="center">
            Spreedly Credit Card
          </Header>
          <Form id="payment-form" size="small" loading={paymentProcessing}>
            <Segment stacked>
              <Form.Field>
                <input
                  type="hidden"
                  name="payment_method_token"
                  id="payment_method_token"
                />
              </Form.Field>
              <Form.Field>
                <div
                  id="spreedly-number"
                  style={{
                    width: "100%",
                    background: "white",
                    height: "36px",
                    border: "1px solid grey",
                    borderRadius: "4px",
                  }}
                ></div>
              </Form.Field>
              <Form.Group widths="equal">
                <Form.Field>
                  <input
                    id="month"
                    name="month"
                    maxLength="2"
                    placeholder="MM"
                    style={{
                      border: "1px solid grey",
                    }}
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    id="year"
                    name="year"
                    maxLength="4"
                    placeholder="YYYY"
                    style={{
                      border: "1px solid grey",
                    }}
                  />
                </Form.Field>
                <Form.Field>
                  <div
                    id="spreedly-cvv"
                    type="number"
                    style={{
                      background: "white",
                      height: "36px",
                      border: "1px solid grey",
                      borderRadius: "4px",
                    }}
                  ></div>
                </Form.Field>
              </Form.Group>
              <Form.Field>
                <Button
                  color="olive"
                  id="submit-button"
                  type="submit"
                  fluid
                  size="large"
                  onClick={submitPaymentForm}
                >
                  Pay Now
                </Button>
              </Form.Field>
            </Segment>
          </Form>
          <ErrorMessage
            show={hasErrors}
            header="A Payment error has occured"
            content={paymentErrors}
          ></ErrorMessage>
          {paymentCaptured && (
            <Message positive>
              <Message.Header>Payment Successful</Message.Header>
              <p>The payment was captured</p>
            </Message>
          )}
        </Grid.Column>
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return { payment: state.payment, transactions: state.transactions };
};

export default connect(mapStateToProps, {
  setCardToken,
  performPayment,
})(SpreedlyCreditCard);
