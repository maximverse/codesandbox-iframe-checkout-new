import React from "react";
import "./orderitem.css";

const AttributeList = ({ item }) => {
  const attributes = item.attributes;
  // map the attributes object to an array of paragraph elements
  const attributeList = Object.entries(attributes).map(([key, value]) => {
    return (
      <div key={key}>
        <h4 id="CartItemAttribute" className="sc-gSyvRN cPhDyP">
          {key}: {value}
        </h4>
      </div>
    );
  });

  return (
    <div style={{ display: "flex", maxWidth: "90%" }}>{attributeList}</div>
  );
};

function OrderItem({ item }) {
  const attributes = item.attributes;

  return (
    <div className="order-item">
      <div
        id="OrderDetailsSection"
        className="sc-ckLdoV jWJBwP"
        style={{ marginLeft: 0 }}
      >
        <div id="ShippingAddressFormContainer" className="sc-fCYGkp cGnHbz">
          <div id="CartItemRow" className="sc-cNYriL fFmgRX">
            <div id="PrimaryItemRow" className="sc-gLgtkK cbavJa">
              <div id="ItemQty" className="sc-iLmQsS cGgUDm">
                <p
                  id="ParagraphText"
                  color="black"
                  fontWeight="bold"
                  fontSize="small"
                  className="sc-eCrewB gZlXNX"
                >
                  {item.id}
                </p>
              </div>
              <p id="ParagraphText" className="sc-eCrewB kDzobB">
                {item.name}
              </p>
            </div>
            <div id="VariantsRow" className="sc-gwGGKT kzeLZo">
              <AttributeList item={item} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
