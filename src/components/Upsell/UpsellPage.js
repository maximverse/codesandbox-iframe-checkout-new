import { useState } from "react";
import Product from "./Product";
import upsellStyles from "./styles.module.css";

export default function UpsellPage() {
  const [cartOpened, setIsCartOpened] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCartOpened(false);
    alert("Checkout");
  };

  return (
    <div className={upsellStyles.App}>
      <div className={upsellStyles.screen}>
        <div className={upsellStyles.bg}>
          <div className={upsellStyles.container}>
            <div className={upsellStyles.MainContainer}>
              <div className={upsellStyles.merchantHeader}>
                <span className={upsellStyles.merchantName}>
                  Thank you - <br /> Your order is now submitted!
                  <span></span>
                </span>
                <p className={upsellStyles.subName}>
                  Check your email for order confirmation
                </p>
              </div>
            </div>
          </div>

          <div className={upsellStyles.spacing}></div>
          <div className={upsellStyles.containerHolder}>
            <div className={upsellStyles.orderContainer}>
              <h5
                className={`${upsellStyles.orderVariable} ${upsellStyles.subVariable}`}
              >
                Order number:{" "}
                <span className={upsellStyles.nonVariable}>C00713233183</span>
              </h5>
              <h5
                className={`${upsellStyles.orderVariable} ${upsellStyles.subVariable}`}
              >
                Order date:
                <span className={upsellStyles.nonVariable}>
                  7 January 2023 11.09 CET
                </span>
              </h5>
              <h5
                className={`${upsellStyles.orderVariable} ${upsellStyles.subVariable} ${upsellStyles.aboveOrderEmail}`}
              >
                We have sent information about the order confirmation to
                <span className={upsellStyles.orderEmail}>
                  {" "}
                  john.doerr@sequoiacap.com
                </span>
              </h5>
              <p className={upsellStyles.confirmation} href="#">
                See full confirmation here
              </p>
            </div>
            <Product />
          </div>

          <div className={upsellStyles.spacing}></div>

          <div className={upsellStyles.checkoutSpacing}></div>
          <div className={upsellStyles.checkout}>
            <div className={upsellStyles.checkoutContainer}>
              <div className={upsellStyles.footerSpan}>
                Last in stock! Get 10% off for limited time: 9:59
              </div>

              <div
                onClick={handleSubmit}
                className={`${upsellStyles.checkoutBtn} ${upsellStyles.button}`}
              >
                <span className={upsellStyles.checkoutTextContainer}>
                  <span>
                    <svg
                      className={upsellStyles.lockIcon}
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
                  <p className={upsellStyles.payText}>Add to cart</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
