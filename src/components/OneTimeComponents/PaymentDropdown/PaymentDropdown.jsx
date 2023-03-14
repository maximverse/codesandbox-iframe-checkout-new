import React from "react";
import "./PaymentDropdown.css";

function PaymentDropdown() {
  return (
    <div>
      <div
        id="paymentMethodSection AccordionExpansion"
        className="sc-bJdpDE bnHWxo"
        style={{ maxHeight: 231 }}
        open=""
      >
        <h4
          id="SmallBodyText"
          color="black"
          className="sc-dGQEGF sc-iuxOeI hBmljY fRame"
        >
          Or use a different address
        </h4>
        <div id="ExpandedSection" className="sc-gfMXfM iznuCX">
          <div id="PaymentMethodFormContainer" className="sc-eCBFQh enXJCo">
            <div
              id="PaymentAccordionSelectionContainer"
              className="sc-lgpMPf PrDtY"
            >
              <button
                color="#00D160"
                id="PaymentMethodSelectionWrapper"
                className="sc-hECAmk daRpyO"
              >
                <span
                  className="MuiButtonBase-root MuiIconButton-root jss3 MuiRadio-root jss1 jss4 Mui-checked jss2"
                  aria-disabled="false"
                >
                  <span className="MuiIconButton-label">
                    <input
                      className="jss6"
                      type="radio"
                      defaultValue=""
                      defaultChecked=""
                    />
                    <div className="jss7 jss9">
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                      </svg>
                      <svg
                        className="MuiSvgIcon-root jss8 MuiSvgIcon-fontSizeSmall"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z" />
                      </svg>
                    </div>
                  </span>
                  <span className="MuiTouchRipple-root" />
                </span>
                <div
                  id="PaymentMethodLogoContainer"
                  className="sc-jURugL kERlBA"
                >
                  <img
                    src="https://instant-imgs.s3.ap-southeast-2.amazonaws.com/app_imgs/visa-logo.png"
                    className="sc-faxClP gGVVNS"
                  />
                </div>
                <span id="Marginer" className="sc-cyZbSi dJdhPC" />
                <div
                  id="RedactedCardNumberTextcontainer"
                  className="sc-ldxQMJ eUgeXm"
                >
                  <div
                    id="RedactedCardNumberContainer"
                    className="sc-cAgYpO csoUCb"
                  >
                    <h4
                      color="black"
                      id="SmallBodyText"
                      className="sc-dGAOeH sc-ivtrNa krhoyo kAMOfh"
                    >
                      {" "}
                      •••• 4242
                    </h4>
                  </div>
                  <h4
                    id="SmallBodyText"
                    className="sc-dGAOeH sc-ivtrNa lnsrdt kAMOfh"
                  >
                    02/24
                  </h4>
                </div>
              </button>
              <h4
                id="DefaultPaymentMethodIndicator"
                className="sc-fZcoQn fnRTcK"
              >
                DEFAULT
              </h4>
            </div>
            <div id="AddPaymentMethodContainer" className="sc-ibLnvQ gZglhd">
              <div id="PaymentMethodRow" className="sc-cewOlJ bhMjml">
                <h4 id="ErrorValidationText" className="sc-isBvKE fsiGtO" />
              </div>
              <div className="sc-ejioSd sc-bgylse khYbSn eAMQkP row">
                <div className="sc-dxjsDj eTuDVX">
                  <div className="sc-UFtxY cwETlB">
                    <span
                      id="cc-number"
                      className="sc-kgwOck hGzhM vgs-collect-container__empty vgs-collect-container__invalid"
                    >
                      <iframe
                        title="Secure card number input frame"
                        src="https://js.verygoodvault.com/vgs-collect/2.12.0/lib/index.html#type=card-number&name=cardNumber&successColor=black&errorColor=%23D8000C&autoComplete=cc-number&placeholder=Card%20number&validations%5B0%5D=required&validations%5B1%5D=validCardNumber&formId=randomId1109592773449778909&fieldId=randomId1106282920709722213&createdAt=1678541183521&tnt=dG50OG9vOTR2b3A%3D&env=bGl2ZQ%3D%3D&logLevel=default&satellitePort=&vgsCollectSessionId=3e895054-f725-4972-9b3f-3d298bbd7e37&css%5Bcolor%5D=%23212529&css%5BfontSize%5D=16px&css%5BfontFamily%5D=-apple-system%2CBlinkMacSystemFont%2CSegoe%20UI%2CRoboto%2CHelvetica%20Neue%2CUbuntu%2Csans-serif&css%5Bpadding-left%5D=40px&css%5Bpadding-right%5D=0"
                        frameBorder={0}
                        scrolling={0}
                        allowTransparency="true"
                        id="randomId1106282920709722213"
                        form-id="randomId1109592773449778909"
                      />
                    </span>
                  </div>
                </div>
                <div className="sc-dxjsDj kdsrkI">
                  <div className="sc-UFtxY hgbxzx">
                    <span
                      id="cc-expiration-date"
                      className="sc-kgwOck hGzhM vgs-collect-container__empty vgs-collect-container__invalid"
                    >
                      <iframe
                        title="Secure card expiration date input frame"
                        src="https://js.verygoodvault.com/vgs-collect/2.12.0/lib/index.html#type=card-expiration-date&name=cardExp&successColor=black&autoComplete=cc-exp&errorColor=%23D8000C&placeholder=MM%20%2F%20YY&validations%5B0%5D=required&validations%5B1%5D=validCardExpirationDate&formId=randomId1109592773449778909&fieldId=randomId11004380306487098862&createdAt=1678541183524&tnt=dG50OG9vOTR2b3A%3D&env=bGl2ZQ%3D%3D&logLevel=default&satellitePort=&vgsCollectSessionId=3e895054-f725-4972-9b3f-3d298bbd7e37&css%5Bcolor%5D=%23212529&css%5BfontSize%5D=16px&css%5BfontFamily%5D=-apple-system%2CBlinkMacSystemFont%2CSegoe%20UI%2CRoboto%2CHelvetica%20Neue%2CUbuntu%2Csans-serif"
                        frameBorder={0}
                        scrolling={0}
                        allowTransparency="true"
                        id="randomId11004380306487098862"
                        form-id="randomId1109592773449778909"
                      />
                    </span>
                  </div>
                </div>
                <div className="sc-dxjsDj cumWje">
                  <div className="sc-UFtxY gHThpi">
                    <span
                      id="cc-cvc"
                      className="sc-kgwOck hGzhM vgs-collect-container__empty vgs-collect-container__invalid"
                    >
                      <iframe
                        title="Secure card security code input frame"
                        src="https://js.verygoodvault.com/vgs-collect/2.12.0/lib/index.html#type=card-security-code&name=cardCvc&successColor=black&autoComplete=cc-csc&errorColor=%23D8000C&placeholder=CVC&validations%5B0%5D=required&validations%5B1%5D=validCardSecurityCode&formId=randomId1109592773449778909&fieldId=randomId11008758125382872484&createdAt=1678541183523&tnt=dG50OG9vOTR2b3A%3D&env=bGl2ZQ%3D%3D&logLevel=default&satellitePort=&vgsCollectSessionId=3e895054-f725-4972-9b3f-3d298bbd7e37&css%5Bcolor%5D=%23212529&css%5BfontSize%5D=16px&css%5BfontFamily%5D=-apple-system%2CBlinkMacSystemFont%2CSegoe%20UI%2CRoboto%2CHelvetica%20Neue%2CUbuntu%2Csans-serif"
                        frameBorder={0}
                        scrolling={0}
                        allowTransparency="true"
                        id="randomId11008758125382872484"
                        form-id="randomId1109592773449778909"
                        name="vgs-collect-cvv-field"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div
                id="AddNewPaymentMethodButtonContainer"
                className="sc-eUcQtH kLgbV"
              >
                <button
                  id="PaymentMethodCancelButton"
                  className="sc-bdGppI iTcRow"
                >
                  <h4
                    color="black"
                    className="sc-dGAOeH sc-ivtrNa krhoyo kAMOfh"
                  >
                    Cancel
                  </h4>
                </button>
                <button
                  id="PaymentMethodSaveButton"
                  className="sc-eFtBSD lcXoND"
                >
                  <h4
                    color="white"
                    className="sc-dGAOeH sc-ivtrNa jjBuaU kA-DlEJ"
                  >
                    Save card
                  </h4>
                </button>
              </div>
            </div>
            <button id="PlusButtonIconContainer" className="sc-iyxVF gmOGUS">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                id="PlusIcon"
                className="sc-byXrvR fLuUPD"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
              </svg>
              <h4
                color="black"
                id="SmallBodyText"
                className="sc-dGAOeH sc-ivtrNa krhoyo kAMOfh"
              >
                Use a different card
              </h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentDropdown;
