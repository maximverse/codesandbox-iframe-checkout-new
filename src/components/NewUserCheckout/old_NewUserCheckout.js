import { useState } from "react";
import newCheckout from "./newCheckout.module.css";
import Cart from "./Cart";
import Closed from "./Closed";
import Opened from "./Opened";
import { useSpring, animated } from "react-spring";
import "./styles.css";

// import { Button, DatePicker, Space, version } from "antd";
// import "antd/dist/reset.css";

export default function NewUserCheckout({ stateChanger, ...rest }) {
  const [cartOpened, setIsCartOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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

  // copy

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCartOpened(false);
    stateChanger("loading");
    setTimeout(() => {
      stateChanger(2);
    }, 2500);
  };

  return (
    <div className={newCheckout.root}>
      <div className={newCheckout.iframe}></div>
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

      <div className={newCheckout.App}>
        <div className={newCheckout.screen}>
          <div className={newCheckout.bg}>
            <div className={newCheckout.container}>
              {cartOpened ? (
                <animated.div style={springProps}>
                  <Cart />
                </animated.div>
              ) : (
                <animated.div style={springProps}>
                  <div></div>
                </animated.div>
              )}
              {/* {cartOpened && <Cart />} */}
              <div className={newCheckout.MainContainer}>
                <div className={newCheckout.merchantHeader}>
                  {/* {`merchantName ${cartOpened && `blur`}`} */}
                  <span
                    className={`${newCheckout.merchantName} ${
                      cartOpened && newCheckout.blur
                    }`}
                  >
                    Kitchen&More{" "}
                    <span className="">
                      <svg
                        className={newCheckout.checkMark}
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

                  <div
                    onClick={() => handleCart()}
                    className={newCheckout.cart}
                  >
                    <div className={newCheckout.cartContainer}>
                      <div className={newCheckout.products}>
                        <div className={newCheckout.product1}></div>
                        <div className={newCheckout.product2}></div>
                      </div>
                      <div className={newCheckout.priceAndIcon}>
                        <span className={newCheckout.price}>$35.48</span>

                        {cartOpened ? <Opened /> : <Closed />}
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className={`${newCheckout.addCoupon} ${
                    cartOpened && newCheckout.blur
                  }`}
                >
                  {" "}
                  + Add Coupon Code
                </button>
              </div>
            </div>

            <div className={newCheckout.spacing}></div>
            <input
              placeholder="Email"
              name="email"
              className={newCheckout.input}
              autoFocus
              required
            />

            <div className={newCheckout.spacing2}></div>
            <input
              placeholder="First and last name"
              name="name"
              className={newCheckout.input}
              required
            />
            <div className={newCheckout.spacing2}></div>
            <input
              placeholder="Phone Number"
              name="phone"
              className={newCheckout.input}
              required
            />
            <div className={newCheckout.spacing2}></div>
            <input
              placeholder="Delivery Address"
              name="address"
              className={newCheckout.input}
              required
            />
            <div className={newCheckout.spacing2}></div>
            <span>
              <input
                placeholder="Card Number"
                name="cardNum"
                className={newCheckout.inlineNumber}
                required
              />
              <input
                placeholder="MM/YY"
                name="cardExp"
                className={newCheckout.inlineExp}
                required
              />
              <input
                placeholder="CVV"
                name="cardCvv"
                className={newCheckout.inlineCvv}
                required
              />
            </span>
            <div className={newCheckout.spacing}></div>
            <div className={newCheckout.shipping}>
              <div className={newCheckout.shippingContainer}>
                <span className={newCheckout.shippingSection}>Shipping</span>
                <span className={newCheckout.fillInDetails}>
                  Fill out delivery address
                </span>
              </div>
            </div>
            <div className={newCheckout.checkoutSpacing}></div>
            <div className={newCheckout.checkout}>
              <div className={newCheckout.checkoutContainer}>
                <div className={newCheckout.footerSpan}>
                  By clicking the button below you agree to our Terms, Privacy
                  Policy and Cookie Policy
                </div>

                <div
                  onClick={handleSubmit}
                  className={`${newCheckout.checkoutBtn} ${newCheckout.button}`}
                >
                  <span className={newCheckout.checkoutTextContainer}>
                    <span>
                      <svg
                        className={newCheckout.lockIcon}
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.875 9.625V7C14.875 4.58375 12.9162 2.625 10.5 2.625C8.08375 2.625 6.125 4.58375 6.125 7V9.625M6.825 18.375H14.175C15.6451 18.375 16.3802 18.375 16.9417 18.0889C17.4356 17.8372 17.8372 17.4356 18.0889 16.9417C18.375 16.3802 18.375 15.6451 18.375 14.175V13.825C18.375 12.3549 18.375 11.6198 18.0889 11.0583C17.8372 10.5643 17.4356 10.1628 16.9417 9.91111C16.3802 9.625 15.6451 9.625 14.175 9.625H6.825C5.35486 9.625 4.61979 9.625 4.05827 9.91111C3.56435 10.1628 3.16278 10.5643 2.91111 11.0583C2.625 11.6198 2.625 12.3549 2.625 13.825V14.175C2.625 15.6451 2.625 16.3802 2.91111 16.9417C3.16278 17.4356 3.56435 17.8372 4.05827 18.0889C4.61979 18.375 5.35486 18.375 6.825 18.375Z"
                          stroke="#FEFEFE"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <rect x="3" y="10" width="15" height="8" fill="white" />
                      </svg>
                    </span>
                    <p className={newCheckout.payText}>Checkout</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
