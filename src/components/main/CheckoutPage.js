import React, { useState } from "react";
import HeaderComponent from "../layout/HeaderComponent";
import Loader from "../loader";
import { useLocation } from "react-router-dom";
import { useSpring } from "react-spring";
import "../styles.css";
import MainFormComponent from "../MainForm/MainFormComponent";
import ReturningPage from "./ReturningPage";

function CheckoutPage({ payment }) {
  const [returningUser, setReturningUser] = useState(true);

  const [cartOpened, setIsCartOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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
  const payload = { storeCode, merchantId, src, items, cartId, currencyCode };

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

  return (
    <div>
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

          <Loader />

          <div id="MainContainer" className="fiSoQW">
            <div id="CheckoutContainer" className="oYYOn">
              <div id="CheckoutFormSectionContainer" className="fBURuJ">
                <div id="SectionContainer" className="lnxYvH">
                  <HeaderComponent
                    handleCart={handleCart}
                    cartOpened={cartOpened}
                  />
                  <div id="selectedDeliveryMethod" value="SHIPPING"></div>
                  {!returningUser && (
                    <MainFormComponent payload={payload} payment={payment} />
                  )}
                  {returningUser && (
                    <ReturningPage payload={payload} payment={payment} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
