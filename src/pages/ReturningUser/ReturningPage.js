import React, { useState } from "react";
import PostCheckoutInput from "../../components/layout/reusable/PostCheckoutInput";
import AddressDropdown from "../../components/OneTimeComponents/AddressDropdown.js";
import ShippingDropdown from "../../components/OneTimeComponents/ShippingDropdown/ShippingDropdown.js";
import PaymentDropdown from "../../components/OneTimeComponents/PaymentDropdown/PaymentDropdown";
import OrderUser from "../../components/OneTimeComponents/OrderUser/OrderUser";
import OrderItem from "../../components/layout/reusable/orderitem/OrderItem.js";
import OrderFooter from "../../components/OneTimeComponents/OrderFooter.js";
import "./cards.css";
import CircleSvg from "../../assets/CircleSvg";

function ReturningPage({ payload, payment }) {
  const [error, setError] = useState({
    status: "false",
    msg: "Shipping not available for selected address",
    msg_code: "shipping_not_available_for_selected_address",
    // msg: "Payment was declined. [05] Do Not Honor",
  });
  const [orderState, setOrderState] = useState({
    addressLn1: "5th Avenue",
    addressLn2: "bldg. 2",
    city: "New York",
    state: "NY",
    zip: "10010",
    country: "US",
  });
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Hudson Sneaker",
      attributes: {
        colour: "Black",
        size: "US 8",
        width: "Regular",
      },
    },
    {
      id: 2,
      name: "Black Turtleneck",
      attributes: {
        colour: "Black",
        size: "Startup Founder (slim fit)",
        width: "Regular",
      },
    },
  ]);

  const [showNewAddressForm, setShowNewAddressForm] = useState(false);

  return (
    <div>
      <div
        id="CheckoutPageContainer"
        className="sc-jTMoxg bXupUN"
        style={{ position: "static", marginTop: "35px" }}
      >
        <div id="OrderStatusContainer" className="sc-cCmLNy fXCHTl">
          <div id="StatusDialogueContainer" className="sc-kRvVA cZEcMA">
            <h1 id="MainHeaderText" className="sc-jccYHG gHggwN">
              Editing order
            </h1>
          </div>
          <div id="OrderProgressContainer" className="sc-eBOGjE fbKLQZ">
            <span
              className="MuiCircularProgress-root MuiCircularProgress-determinate MuiCircularProgress-colorInherit css-spdbum"
              role="progressbar"
              style={{
                width: "38px",
                height: "38px",
                transform: "rotate(-90deg)",
              }}
              aria-valuenow={0}
            >
              <CircleSvg />
            </span>
          </div>
        </div>
        {error.status == "true" && (
          <>
            <div id="ErrorsContainer" className="sc-dXGMVt hdxwLW">
              <div
                data-show="true"
                className="ant-alert ant-alert-error"
                role="alert"
                style={{
                  margin: "10px 0px",
                  borderRadius: "6px",
                  paddingLeft: "10px",
                  fontFamily: '"SF Pro Display", sans-serif',
                  minHeight: "45px",
                  fontSize: "15px",
                }}
              >
                <span
                  role="img"
                  aria-label="close-circle"
                  className="anticon anticon-close-circle ant-alert-icon"
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="close-circle"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" />
                  </svg>
                </span>
                <>
                  <div className="ant-alert-content">
                    <div className="ant-alert-message">{error.msg}</div>
                  </div>
                </>
              </div>
            </div>
          </>
        )}
        <div id="CheckoutProgressGrid" className="sc-jFmBXp kkNjpY">
          <PostCheckoutInput
            dropdown={
              <AddressDropdown showNewAddressForm={showNewAddressForm} />
            }
            error={error}
            orderState={orderState}
            title={"Shipping to"}
          >
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
          </PostCheckoutInput>
          <PostCheckoutInput
            dropdown={
              <ShippingDropdown showNewAddressForm={showNewAddressForm} />
            }
            error={error}
            orderState={orderState}
            title={"Shipping method"}
          >
            <h4
              color="black"
              fontWeight={500}
              id="SmallBodyText"
              className="sc-dGQEGF sc-iuxOeI hBmljZ gLlhtj"
            >
              Shipping not available for selected address
            </h4>
          </PostCheckoutInput>
          <PostCheckoutInput
            dropdown={
              <PaymentDropdown showNewAddressForm={showNewAddressForm} />
            }
            error={error}
            orderState={orderState}
            title={"Payment method"}
          >
            <h4
              color="black"
              fontWeight={500}
              id="SmallBodyText"
              className="sc-dGQEGF sc-iuxOeI hBmljZ gLlhtj"
            >
              <img
                src="https://instant-imgs.s3.ap-southeast-2.amazonaws.com/app_imgs/visa-logo.png"
                className="sc-fbYMXx dNxDZQ visaImg"
              />{" "}
              4242
            </h4>
          </PostCheckoutInput>
          <PostCheckoutInput
            dropdown={<OrderUser showNewAddressForm={showNewAddressForm} />}
            error={error}
            orderState={orderState}
            title={"Order for Alex"}
          >
            <h4
              color="black"
              fontWeight={500}
              id="SmallBodyText"
              className="sc-dGQEGF sc-iuxOeI hBmljZ gLlhtj"
            >
              Ordering for someone else?
            </h4>
          </PostCheckoutInput>

          {items.map((item) => (
            <OrderItem item={item} />
          ))}
        </div>
      </div>
      <OrderFooter />
    </div>
  );
}

export default ReturningPage;
