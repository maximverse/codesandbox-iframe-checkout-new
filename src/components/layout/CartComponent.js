import React, { useState, useEffect } from "react";
import axios from "axios";
import CartItem from "./reusable/CartItem";
function CartComponent({ cartOpened }) {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=2")
      .then((res) => {
        setProductDetails(res.data.products);
      })
      .catch((err) => console.error(err));
  }, []);

  // console.log(productDetails.products);

  // {
  //   productDetails.map((product) => console.log("product:", product));
  // }

  return (
    <div>
      <div
        id="ViewOrderContainer"
        className="hWPlEc"
        style={{ display: cartOpened ? "flex" : "none" }}
      >
        {productDetails.map((product) => (
          <CartItem product={product} />
        ))}

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
              <div id="CheckoutLineTitleComponentContainer" className="kuWelW">
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
              <div id="CheckoutLinePriceComponentContainer" className="eRAioS">
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
              <div id="CheckoutLineTitleComponentContainer" className="kuWelW">
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
              <div id="CheckoutLinePriceComponentContainer" className="eRAioS">
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
              <div id="CheckoutLineTitleComponentContainer" className="kuWelW">
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
              <div id="CheckoutLinePriceComponentContainer" className="eRAioS">
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
              <div id="CheckoutLineTitleComponentContainer" className="kuWelW">
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
              <div id="CheckoutLinePriceComponentContainer" className="eRAioS">
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
  );
}

export default CartComponent;
