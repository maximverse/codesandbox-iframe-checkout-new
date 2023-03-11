import React, { useState } from "react";
import CheckSvg from "../assets/CheckSvg.js";
import WarningSvg from "../assets/WarningSvg.js";
import AddressComponent from "../returning/AddressComponent.js";

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
              <svg
                className="MuiCircularProgress-svg css-13o7eu2"
                viewBox="22 22 44 44"
              >
                <circle
                  className="MuiCircularProgress-circle MuiCircularProgress-circleDeterminate css-nbfpn7"
                  cx={44}
                  cy={44}
                  r="19.5"
                  fill="none"
                  strokeWidth={5}
                  style={{
                    strokeDasharray: "122.522",
                    strokeDashoffset: "122.522px",
                  }}
                />
              </svg>
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
          <AddressComponent error={error} orderState={orderState} />

          <div
            id="paymentMethodSection AccordionParent"
            className="sc-cfQIsQ dNczxK"
          >
            <div
              id="paymentMethodSection AccordionButton"
              className="sc-jDfIjF czXqCR"
            >
              <button id="paymentMethodSection" className="sc-hQIyOC bVOsmc">
                <div id="SummarisedSection" className="sc-hgRfpC foWCkQ">
                  <div id="SectionLeftContainer" className="sc-fiSPbx khYJsg">
                    <CheckSvg />
                  </div>
                  <div id="SectionRightContainer" className="sc-lgholE hxAOwI">
                    <h4
                      id="SmallBodyText"
                      color="rgba(0, 0, 0, 0.7)"
                      className="sc-dGQEGF sc-iuxOeI mLSed jKvjvD"
                    >
                      Payment method
                    </h4>
                    <div
                      id="PaymentMethodContainer"
                      className="sc-jZatrU iZCgtk"
                    >
                      <h4
                        color="black"
                        fontWeight={500}
                        id="SmallBodyText"
                        className="sc-dGQEGF sc-iuxOeI hBmljZ gLlhtj"
                      >
                        <img
                          src="https://instant-imgs.s3.ap-southeast-2.amazonaws.com/app_imgs/visa-logo.png"
                          className="sc-fbYMXx dNxDZQ"
                          style={{
                            width: "22px",
                            height: "auto",
                            marginLeft: "5px",
                          }}
                        />{" "}
                        4242
                      </h4>
                    </div>
                  </div>
                </div>
              </button>
              <svg
                width={15}
                height={15}
                viewBox="0 0 11 11"
                fill="none"
                className="sc-enHPVx MkNnu"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.84007 1.85361L9.07772 4.09123L3.41361 9.75534L1.17723 7.51771L6.84007 1.85361ZM10.7757 1.31394L9.77776 0.316036C9.3921 -0.0696195 8.76588 -0.0696195 8.37891 0.316036L7.42302 1.27193L9.66066 3.50958L10.7757 2.39458C11.0748 2.09544 11.0748 1.61306 10.7757 1.31394ZM0.00622685 10.6629C-0.0344955 10.8461 0.130973 11.0104 0.314265 10.9658L2.80775 10.3612L0.571369 8.1236L0.00622685 10.6629Z"
                  fill="#757476"
                />
              </svg>
            </div>
            <div
              id="paymentMethodSection AccordionExpansion"
              className="sc-bJYTlW gPqmkd hide"
            >
              <div id="ExpandedSection" className="sc-gelMue fOcJJx">
                <div
                  id="PaymentMethodFormContainer"
                  className="sc-eClPoj jpXYtO"
                >
                  <div
                    id="PaymentAccordionSelectionContainer"
                    className="sc-leiOXd dHCPjF"
                  >
                    <button
                      color="#00D160"
                      id="PaymentMethodSelectionWrapper"
                      className="sc-hDbpAC eUvout"
                    >
                      <span
                        className="MuiButtonBase-root MuiIconButton-root jss3 MuiRadio-root jss1 jss4 Mui-checked jss2"
                        aria-disabled="false"
                      >
                        <span className="MuiIconButton-label">
                          <input
                            className="jss6"
                            type="radio"
                            defaultValue
                            defaultChecked
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
                        className="sc-jTVQyt cNBMN"
                      >
                        <img
                          src="https://instant-imgs.s3.ap-southeast-2.amazonaws.com/app_imgs/visa-logo.png"
                          className="sc-fbYMXx dNxDZQ"
                        />
                      </div>
                      <span id="Marginer" className="sc-cwSeag idvxoQ" />
                      <div
                        id="RedactedCardNumberTextcontainer"
                        className="sc-lbWGbb hVEHdk"
                      >
                        <div
                          id="RedactedCardNumberContainer"
                          className="sc-cBIjbw fUpawZ"
                        >
                          <h4
                            color="black"
                            id="SmallBodyText"
                            className="sc-dGQEGF sc-iuxOeI hBmljY fRame"
                          >
                            {" "}
                            •••• 4242
                          </h4>
                        </div>
                        <h4
                          id="SmallBodyText"
                          className="sc-dGQEGF sc-iuxOeI ilvhwF fRame"
                        >
                          02/24
                        </h4>
                      </div>
                    </button>
                    <h4
                      id="DefaultPaymentMethodIndicator"
                      className="sc-ga-DzBV WwrvO"
                    >
                      DEFAULT
                    </h4>
                  </div>
                  <div
                    id="AddPaymentMethodContainer"
                    className="sc-ibvwTS fYiLCj"
                  >
                    <div id="PaymentMethodRow" className="sc-cegXJL izwus">
                      <h4
                        id="ErrorValidationText"
                        className="sc-islFiG eRlraK"
                      />
                    </div>
                    <div className="sc-ekdSAv sc-bfCHJM cTeQTp ipJELn row">
                      <div className="sc-dwnOUR iWErdr">
                        <div className="sc-UpCWa bZcrap">
                          <span
                            id="cc-number"
                            className="sc-khsrKC igKceQ vgs-collect-container__empty vgs-collect-container__invalid"
                          >
                            <iframe
                              title="Secure card number input frame"
                              src="https://js.verygoodvault.com/vgs-collect/2.12.0/lib/index.html#type=card-number&name=cardNumber&successColor=black&errorColor=%23D8000C&autoComplete=cc-number&placeholder=Card%20number&validations%5B0%5D=required&validations%5B1%5D=validCardNumber&formId=randomId1005563210257933755&fieldId=randomId1005232724630548364&createdAt=1678461961273&tnt=dG50OG9vOTR2b3A%3D&env=bGl2ZQ%3D%3D&logLevel=default&satellitePort=&vgsCollectSessionId=b1860954-613a-47d6-adbb-eb2c61d888fe&css%5Bcolor%5D=%23212529&css%5BfontSize%5D=16px&css%5BfontFamily%5D=-apple-system%2CBlinkMacSystemFont%2CSegoe%20UI%2CRoboto%2CHelvetica%20Neue%2CUbuntu%2Csans-serif&css%5Bpadding-left%5D=40px&css%5Bpadding-right%5D=0"
                              frameBorder={0}
                              scrolling={0}
                              allowTransparency="true"
                              id="randomId1005232724630548364"
                              form-id="randomId1005563210257933755"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="sc-dwnOUR jwLZNU">
                        <div className="sc-UpCWa hAqWgR">
                          <span
                            id="cc-expiration-date"
                            className="sc-khsrKC igKceQ vgs-collect-container__empty vgs-collect-container__invalid"
                          >
                            <iframe
                              title="Secure card expiration date input frame"
                              src="https://js.verygoodvault.com/vgs-collect/2.12.0/lib/index.html#type=card-expiration-date&name=cardExp&successColor=black&autoComplete=cc-exp&errorColor=%23D8000C&placeholder=MM%20%2F%20YY&validations%5B0%5D=required&validations%5B1%5D=validCardExpirationDate&formId=randomId1005563210257933755&fieldId=randomId1009570713906928818&createdAt=1678461961276&tnt=dG50OG9vOTR2b3A%3D&env=bGl2ZQ%3D%3D&logLevel=default&satellitePort=&vgsCollectSessionId=b1860954-613a-47d6-adbb-eb2c61d888fe&css%5Bcolor%5D=%23212529&css%5BfontSize%5D=16px&css%5BfontFamily%5D=-apple-system%2CBlinkMacSystemFont%2CSegoe%20UI%2CRoboto%2CHelvetica%20Neue%2CUbuntu%2Csans-serif"
                              frameBorder={0}
                              scrolling={0}
                              allowTransparency="true"
                              id="randomId1009570713906928818"
                              form-id="randomId1005563210257933755"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="sc-dwnOUR dPUasa">
                        <div className="sc-UpCWa deTGcu">
                          <span
                            id="cc-cvc"
                            className="sc-khsrKC igKceQ vgs-collect-container__empty vgs-collect-container__invalid"
                          >
                            <iframe
                              title="Secure card security code input frame"
                              src="https://js.verygoodvault.com/vgs-collect/2.12.0/lib/index.html#type=card-security-code&name=cardCvc&successColor=black&autoComplete=cc-csc&errorColor=%23D8000C&placeholder=CVC&validations%5B0%5D=required&validations%5B1%5D=validCardSecurityCode&formId=randomId1005563210257933755&fieldId=randomId1007873059118495034&createdAt=1678461961275&tnt=dG50OG9vOTR2b3A%3D&env=bGl2ZQ%3D%3D&logLevel=default&satellitePort=&vgsCollectSessionId=b1860954-613a-47d6-adbb-eb2c61d888fe&css%5Bcolor%5D=%23212529&css%5BfontSize%5D=16px&css%5BfontFamily%5D=-apple-system%2CBlinkMacSystemFont%2CSegoe%20UI%2CRoboto%2CHelvetica%20Neue%2CUbuntu%2Csans-serif"
                              frameBorder={0}
                              scrolling={0}
                              allowTransparency="true"
                              id="randomId1007873059118495034"
                              form-id="randomId1005563210257933755"
                              name="vgs-collect-cvv-field"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      id="AddNewPaymentMethodButtonContainer"
                      className="sc-eThmLp kaCMJF"
                    >
                      <button
                        id="PaymentMethodCancelButton"
                        className="sc-bdqyNK hGSIpN"
                      >
                        <h4
                          color="black"
                          className="sc-dGQEGF sc-iuxOeI hBmljY fRame"
                        >
                          Cancel
                        </h4>
                      </button>
                      <button
                        id="PaymentMethodSaveButton"
                        className="sc-eExYkl bJGhbU"
                      >
                        <h4
                          color="white"
                          className="sc-dGQEGF sc-iuxOeI fcIKhQ eNgvW"
                        >
                          Save card
                        </h4>
                      </button>
                    </div>
                  </div>
                  <button
                    id="PlusButtonIconContainer"
                    className="sc-gXnjX kDBOCB"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 24 24"
                      id="PlusIcon"
                      className="sc-byHATT bVqivu"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
                    </svg>
                    <h4
                      color="black"
                      id="SmallBodyText"
                      className="sc-dGQEGF sc-iuxOeI hBmljY fRame"
                    >
                      Use a different card
                    </h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            id="orderReviewSection AccordionParent"
            className="sc-cfQIsQ dNczxK"
          >
            <div
              id="orderReviewSection AccordionButton"
              className="sc-jDfIjF czXqCR"
            >
              <button
                id="orderConfirmationSection"
                className="sc-hQIyOC bVOsmc"
                style={{ padding: "0 0" }}
              >
                <div
                  id="OrderConfirmationLeftSectionEqualiser"
                  className="sc-hQPBQE hEpzVj"
                >
                  <div id="SummarisedSection" className="sc-hgRfpC foWCkQ">
                    <div id="SectionLeftContainer" className="sc-fiSPbx khYJsg">
                      <CheckSvg />
                    </div>
                    <div
                      id="SectionRightContainer"
                      className="sc-lgholE hxAOwI"
                    >
                      <div
                        id="AccordionTextContainer"
                        className="sc-fpaRTa gFumMx"
                      >
                        <h4
                          id="SmallBodyText"
                          color="rgba(0, 0, 0, 0.7)"
                          className="sc-dGQEGF sc-iuxOeI mLSed jKvjvD"
                        >
                          Order for Alex
                        </h4>
                        <h4
                          id="SmallBodyText"
                          color="black"
                          fontWeight={500}
                          title="Shipping not available for selected address"
                          className="sc-dGQEGF sc-iuxOeI hBmljZ gLlhtj"
                        >
                          Ordering for someone else?
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
              <svg
                width={15}
                height={15}
                viewBox="0 0 11 11"
                fill="none"
                className="sc-enHPVx MkNnu"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.84007 1.85361L9.07772 4.09123L3.41361 9.75534L1.17723 7.51771L6.84007 1.85361ZM10.7757 1.31394L9.77776 0.316036C9.3921 -0.0696195 8.76588 -0.0696195 8.37891 0.316036L7.42302 1.27193L9.66066 3.50958L10.7757 2.39458C11.0748 2.09544 11.0748 1.61306 10.7757 1.31394ZM0.00622685 10.6629C-0.0344955 10.8461 0.130973 11.0104 0.314265 10.9658L2.80775 10.3612L0.571369 8.1236L0.00622685 10.6629Z"
                  fill="#757476"
                />
              </svg>
            </div>
            <div
              id="orderReviewSection AccordionExpansion"
              className="sc-bJYTlW gPqmkd hide"
              style={{}}
            >
              <div
                id="PersonalInfoAccordionFieldsContainer"
                className="sc-faBftj kUHDGs"
              >
                <div
                  id="PersonalInformationFormContainer"
                  className="sc-eqJLUj aEIYT"
                >
                  <h4 id="HeaderText" className="sc-fjWoZz jMdFzd">
                    Email
                  </h4>
                  <span id="Marginer" className="sc-lllmON ieyma" />
                  <div
                    id="PersonalInformationFormRow"
                    className="sc-eFjyua dcyJKv row"
                  >
                    <input
                      placeholder="Email"
                      disabled
                      readOnly
                      id="FormInput"
                      className="sc-fmixVB hfgKIg form-control"
                      defaultValue="aii@gmail.com"
                    />
                  </div>
                  <span id="Marginer" className="sc-lllmON ieyma" />
                  <div
                    id="PersonalInformationFormRow"
                    className="sc-eFjyua gHTXiL row"
                  >
                    <h4 id="HeaderText" className="sc-fjWoZz jMdFzd">
                      First Name
                    </h4>
                    <span id="Marginer" className="sc-lllmON bLmTAm" />
                    <input
                      placeholder="First Name"
                      id="FormInput"
                      className="sc-fmixVB hfgKIg form-control"
                      defaultValue="alex"
                    />
                    <span id="Marginer" className="sc-lllmON ieyma" />
                    <h4 id="HeaderText" className="sc-fjWoZz jMdFzd">
                      Last Name
                    </h4>
                    <span id="Marginer" className="sc-lllmON bLmTAm" />
                    <input
                      placeholder="Last Name"
                      id="FormInput"
                      className="sc-fmixVB hfgKIg form-control"
                      defaultValue="alex"
                    />
                    <span id="Marginer" className="sc-lllmON ieyma" />
                    <h4 id="HeaderText" className="sc-fjWoZz jMdFzd">
                      Phone
                    </h4>
                    <span id="Marginer" className="sc-lllmON bLmTAm" />
                    <div className="PhoneInputPersonalInformationForm PhoneInput">
                      <div className="PhoneInputCountry">
                        <select
                          name="phoneCountry"
                          aria-label="Phone number country"
                          className="PhoneInputCountrySelect"
                          style={{
                            marginLeft: "10px",
                            height: "45px",
                            zIndex: 1000,
                          }}
                        >
                          <option value="ZZ">International</option>
                          <option value="AF">Afghanistan</option>
                          <option value="AX">Åland Islands</option>
                          <option value="AL">Albania</option>
                          <option value="DZ">Algeria</option>
                          <option value="AS">American Samoa</option>
                          <option value="AD">Andorra</option>
                          <option value="AO">Angola</option>
                          <option value="AI">Anguilla</option>
                          <option value="AG">Antigua and Barbuda</option>
                          <option value="AR">Argentina</option>
                          <option value="AM">Armenia</option>
                          <option value="AW">Aruba</option>
                          <option value="AC">Ascension Island</option>
                          <option value="AU">Australia</option>
                          <option value="AT">Austria</option>
                          <option value="AZ">Azerbaijan</option>
                          <option value="BS">Bahamas</option>
                          <option value="BH">Bahrain</option>
                          <option value="BD">Bangladesh</option>
                          <option value="BB">Barbados</option>
                          <option value="BY">Belarus</option>
                          <option value="BE">Belgium</option>
                          <option value="BZ">Belize</option>
                          <option value="BJ">Benin</option>
                          <option value="BM">Bermuda</option>
                          <option value="BT">Bhutan</option>
                          <option value="BO">Bolivia</option>
                          <option value="BQ">
                            Bonaire, Sint Eustatius and Saba
                          </option>
                          <option value="BA">Bosnia and Herzegovina</option>
                          <option value="BW">Botswana</option>
                          <option value="BR">Brazil</option>
                          <option value="IO">
                            British Indian Ocean Territory
                          </option>
                          <option value="BN">Brunei Darussalam</option>
                          <option value="BG">Bulgaria</option>
                          <option value="BF">Burkina Faso</option>
                          <option value="BI">Burundi</option>
                          <option value="KH">Cambodia</option>
                          <option value="CM">Cameroon</option>
                          <option value="CA">Canada</option>
                          <option value="CV">Cape Verde</option>
                          <option value="KY">Cayman Islands</option>
                          <option value="CF">Central African Republic</option>
                          <option value="TD">Chad</option>
                          <option value="CL">Chile</option>
                          <option value="CN">China</option>
                          <option value="CX">Christmas Island</option>
                          <option value="CC">Cocos (Keeling) Islands</option>
                          <option value="CO">Colombia</option>
                          <option value="KM">Comoros</option>
                          <option value="CG">Congo</option>
                          <option value="CD">
                            Congo, Democratic Republic of the
                          </option>
                          <option value="CK">Cook Islands</option>
                          <option value="CR">Costa Rica</option>
                          <option value="CI">Cote d'Ivoire</option>
                          <option value="HR">Croatia</option>
                          <option value="CU">Cuba</option>
                          <option value="CW">Curaçao</option>
                          <option value="CY">Cyprus</option>
                          <option value="CZ">Czech Republic</option>
                          <option value="DK">Denmark</option>
                          <option value="DJ">Djibouti</option>
                          <option value="DM">Dominica</option>
                          <option value="DO">Dominican Republic</option>
                          <option value="EC">Ecuador</option>
                          <option value="EG">Egypt</option>
                          <option value="SV">El Salvador</option>
                          <option value="GQ">Equatorial Guinea</option>
                          <option value="ER">Eritrea</option>
                          <option value="EE">Estonia</option>
                          <option value="ET">Ethiopia</option>
                          <option value="FK">Falkland Islands</option>
                          <option value="FO">Faroe Islands</option>
                          <option value="FM">
                            Federated States of Micronesia
                          </option>
                          <option value="FJ">Fiji</option>
                          <option value="FI">Finland</option>
                          <option value="FR">France</option>
                          <option value="GF">French Guiana</option>
                          <option value="PF">French Polynesia</option>
                          <option value="GA">Gabon</option>
                          <option value="GM">Gambia</option>
                          <option value="GE">Georgia</option>
                          <option value="DE">Germany</option>
                          <option value="GH">Ghana</option>
                          <option value="GI">Gibraltar</option>
                          <option value="GR">Greece</option>
                          <option value="GL">Greenland</option>
                          <option value="GD">Grenada</option>
                          <option value="GP">Guadeloupe</option>
                          <option value="GU">Guam</option>
                          <option value="GT">Guatemala</option>
                          <option value="GG">Guernsey</option>
                          <option value="GN">Guinea</option>
                          <option value="GW">Guinea-Bissau</option>
                          <option value="GY">Guyana</option>
                          <option value="HT">Haiti</option>
                          <option value="VA">
                            Holy See (Vatican City State)
                          </option>
                          <option value="HN">Honduras</option>
                          <option value="HK">Hong Kong</option>
                          <option value="HU">Hungary</option>
                          <option value="IS">Iceland</option>
                          <option value="IN">India</option>
                          <option value="ID">Indonesia</option>
                          <option value="IR">Iran</option>
                          <option value="IQ">Iraq</option>
                          <option value="IE">Ireland</option>
                          <option value="IM">Isle of Man</option>
                          <option value="IL">Israel</option>
                          <option value="IT">Italy</option>
                          <option value="JM">Jamaica</option>
                          <option value="JP">Japan</option>
                          <option value="JE">Jersey</option>
                          <option value="JO">Jordan</option>
                          <option value="KZ">Kazakhstan</option>
                          <option value="KE">Kenya</option>
                          <option value="KI">Kiribati</option>
                          <option value="XK">Kosovo</option>
                          <option value="KW">Kuwait</option>
                          <option value="KG">Kyrgyzstan</option>
                          <option value="LA">Laos</option>
                          <option value="LV">Latvia</option>
                          <option value="LB">Lebanon</option>
                          <option value="LS">Lesotho</option>
                          <option value="LR">Liberia</option>
                          <option value="LY">Libya</option>
                          <option value="LI">Liechtenstein</option>
                          <option value="LT">Lithuania</option>
                          <option value="LU">Luxembourg</option>
                          <option value="MO">Macao</option>
                          <option value="MG">Madagascar</option>
                          <option value="MW">Malawi</option>
                          <option value="MY">Malaysia</option>
                          <option value="MV">Maldives</option>
                          <option value="ML">Mali</option>
                          <option value="MT">Malta</option>
                          <option value="MH">Marshall Islands</option>
                          <option value="MQ">Martinique</option>
                          <option value="MR">Mauritania</option>
                          <option value="MU">Mauritius</option>
                          <option value="YT">Mayotte</option>
                          <option value="MX">Mexico</option>
                          <option value="MD">Moldova</option>
                          <option value="MC">Monaco</option>
                          <option value="MN">Mongolia</option>
                          <option value="ME">Montenegro</option>
                          <option value="MS">Montserrat</option>
                          <option value="MA">Morocco</option>
                          <option value="MZ">Mozambique</option>
                          <option value="MM">Myanmar</option>
                          <option value="NA">Namibia</option>
                          <option value="NR">Nauru</option>
                          <option value="NP">Nepal</option>
                          <option value="NL">Netherlands</option>
                          <option value="NC">New Caledonia</option>
                          <option value="NZ">New Zealand</option>
                          <option value="NI">Nicaragua</option>
                          <option value="NE">Niger</option>
                          <option value="NG">Nigeria</option>
                          <option value="NU">Niue</option>
                          <option value="NF">Norfolk Island</option>
                          <option value="KP">North Korea</option>
                          <option value="MK">North Macedonia</option>
                          <option value="MP">Northern Mariana Islands</option>
                          <option value="NO">Norway</option>
                          <option value="OM">Oman</option>
                          <option value="PK">Pakistan</option>
                          <option value="PW">Palau</option>
                          <option value="PS">Palestine</option>
                          <option value="PA">Panama</option>
                          <option value="PG">Papua New Guinea</option>
                          <option value="PY">Paraguay</option>
                          <option value="PE">Peru</option>
                          <option value="PH">Philippines</option>
                          <option value="PL">Poland</option>
                          <option value="PT">Portugal</option>
                          <option value="PR">Puerto Rico</option>
                          <option value="QA">Qatar</option>
                          <option value="RE">Reunion</option>
                          <option value="RO">Romania</option>
                          <option value="RU">Russia</option>
                          <option value="RW">Rwanda</option>
                          <option value="BL">Saint Barthélemy</option>
                          <option value="SH">Saint Helena</option>
                          <option value="KN">Saint Kitts and Nevis</option>
                          <option value="LC">Saint Lucia</option>
                          <option value="MF">Saint Martin (French Part)</option>
                          <option value="PM">Saint Pierre and Miquelon</option>
                          <option value="VC">
                            Saint Vincent and the Grenadines
                          </option>
                          <option value="WS">Samoa</option>
                          <option value="SM">San Marino</option>
                          <option value="ST">Sao Tome and Principe</option>
                          <option value="SA">Saudi Arabia</option>
                          <option value="SN">Senegal</option>
                          <option value="RS">Serbia</option>
                          <option value="SC">Seychelles</option>
                          <option value="SL">Sierra Leone</option>
                          <option value="SG">Singapore</option>
                          <option value="SX">Sint Maarten</option>
                          <option value="SK">Slovakia</option>
                          <option value="SI">Slovenia</option>
                          <option value="SB">Solomon Islands</option>
                          <option value="SO">Somalia</option>
                          <option value="ZA">South Africa</option>
                          <option value="KR">South Korea</option>
                          <option value="SS">South Sudan</option>
                          <option value="ES">Spain</option>
                          <option value="LK">Sri Lanka</option>
                          <option value="SD">Sudan</option>
                          <option value="SR">Suriname</option>
                          <option value="SJ">Svalbard and Jan Mayen</option>
                          <option value="SZ">Swaziland</option>
                          <option value="SE">Sweden</option>
                          <option value="CH">Switzerland</option>
                          <option value="SY">Syria</option>
                          <option value="TW">Taiwan</option>
                          <option value="TJ">Tajikistan</option>
                          <option value="TZ">Tanzania</option>
                          <option value="TH">Thailand</option>
                          <option value="TL">Timor-Leste</option>
                          <option value="TG">Togo</option>
                          <option value="TK">Tokelau</option>
                          <option value="TO">Tonga</option>
                          <option value="TT">Trinidad and Tobago</option>
                          <option value="TA">Tristan da Cunha</option>
                          <option value="TN">Tunisia</option>
                          <option value="TR">Turkey</option>
                          <option value="TM">Turkmenistan</option>
                          <option value="TC">Turks and Caicos Islands</option>
                          <option value="TV">Tuvalu</option>
                          <option value="UG">Uganda</option>
                          <option value="UA">Ukraine</option>
                          <option value="AE">United Arab Emirates</option>
                          <option value="GB">United Kingdom</option>
                          <option value="US">United States</option>
                          <option value="UY">Uruguay</option>
                          <option value="UZ">Uzbekistan</option>
                          <option value="VU">Vanuatu</option>
                          <option value="VE">Venezuela</option>
                          <option value="VN">Vietnam</option>
                          <option value="VG">Virgin Islands, British</option>
                          <option value="VI">Virgin Islands, U.S.</option>
                          <option value="WF">Wallis and Futuna</option>
                          <option value="EH">Western Sahara</option>
                          <option value="YE">Yemen</option>
                          <option value="ZM">Zambia</option>
                          <option value="ZW">Zimbabwe</option>
                        </select>
                        <div
                          aria-hidden="true"
                          className="PhoneInputCountryIcon PhoneInputCountryIcon--border"
                        >
                          <img
                            className="PhoneInputCountryIconImg"
                            alt="Moldova"
                            src="https://purecatamphetamine.github.io/country-flag-icons/3x2/MD.svg"
                          />
                        </div>
                        <div className="PhoneInputCountrySelectArrow" />
                      </div>
                      <input
                        type="tel"
                        autoComplete="tel tel-national"
                        id="PhoneInput"
                        placeholder="Phone Number"
                        name="phone"
                        className="PhoneInputInput"
                        defaultValue="+373 611 44 388"
                        style={{ height: "45px", appearance: "none" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                      1
                    </p>
                  </div>
                  <p id="ParagraphText" className="sc-eCrewB kDzobB">
                    Hudson Sneaker
                  </p>
                </div>
                <div id="VariantsRow" className="sc-gwGGKT kzeLZo">
                  <h4 id="CartItemAttribute" className="sc-gSyvRN cPhDyP">
                    Colour: Navy
                  </h4>
                  <h4 id="CartItemAttribute" className="sc-gSyvRN cPhDyP">
                    Width: Wide
                  </h4>
                  <h4 id="CartItemAttribute" className="sc-gSyvRN cPhDyP">
                    Size: US 10
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        height="100pxundefined"
        id="FooterContainer"
        className="sc-cnMZnH gEjBms"
      >
        <div className="sc-iOdfRm gJdEyU">
          <button
            id="UnderlineHoverActionContainer"
            className="sc-jWOkvS TuRzV"
          >
            <h4 id="BodyText" className="sc-dGQEGF ilvhwF">
              ←
            </h4>
            <h4
              id="CancelOrderButtonText"
              className="sc-dGQEGF sc-kAuIVs ilvhwF kutXiz"
            >
              CANCEL ORDER
            </h4>
          </button>
        </div>
        <div id="FooterButtonsInnerContainer" className="sc-ePBJll eSojrj">
          <div id="CouponCodeButtonContainer" className="sc-kpPvGe kiBAJW">
            <input
              placeholder="Enter code"
              id="CodeInput"
              className="sc-fmixVB sc-czpcHH hfgKIg kwhLFu form-control"
              defaultvalue
            />
          </div>
          <div id="CouponCodeContainer" className="sc-cBBlDJ igcfpW">
            <div id="CouponCodeMainContainer" className="sc-dovKpQ bUJsKP">
              <div id="UtilDiv" className="sc-jIkldg ildJsr">
                <button
                  id="AddCouponButtonWrapper"
                  className="sc-jFYche jBwgLF"
                >
                  <p
                    id="ParagraphText"
                    color="white"
                    className="sc-eCrewB liXPCk"
                  >
                    Add a coupon
                  </p>
                </button>
              </div>
            </div>
          </div>
          <button id="PurchaseButton" disabled className="sc-bgzEgf jKNQoM">
            <p id="ParagraphText" color="white" className="sc-eCrewB ijGxPO">
              Complete purchase
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReturningPage;
