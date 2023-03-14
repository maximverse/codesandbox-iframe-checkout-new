import React from "react";

function CartItem({ product }) {
  console.log(product);
  return (
    <>
      <div id="CartItemContainer" className="kGmMRp">
        <div id="CartItemImgContainer" className="koqOKo">
          <img id="CartItemImg" src={product.thumbnail} className="cnpoae" />
        </div>
        <div className="iKUTyA">
          <div id="CartItemDetailsContainer" className="gIRUqr">
            <h4 id="CartItemName" className="gsNyQL">
              {product.title}
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
    </>
  );
}

export default CartItem;
