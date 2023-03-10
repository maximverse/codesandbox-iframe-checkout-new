import React from "react";

function CartComponent({ cartOpened }) {
  return (
    <div>
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
