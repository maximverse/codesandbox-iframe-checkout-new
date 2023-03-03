import { useState, useRef } from "react";
import newCheckout from "./newCheckout.module.css";
import Cart from "./Cart";
import Closed from "./Closed";
import Opened from "./Opened";
import { useSpring, animated } from "react-spring";
import { useLocation } from "react-router-dom";
import { dummyPayload } from "../assets/mock";
import useExternalScripts from "./hooks/useExternalScript";
import { AppContext } from "../../context/AppContext";
import * as React from "react";
import axios from "axios";
import "./styles.css";
export default function NewUserCheckout() {
  const [cartOpened, setIsCartOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [displayCoupon, setDisplayCoupon] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [processingPayment, setProcessingPayment] = useState(false);

  const location = useLocation();
  // console.log(location);
  const searchParams = new URLSearchParams(location.search);
  const storeCode = searchParams.get("storeCode");
  const merchantId = searchParams.get("merchantId");
  const src = searchParams.get("src");
  const items = searchParams.get("items");
  const cartId = searchParams.get("cartId");
  const currencyCode = searchParams.get("currencyCode");

  const payload = {
    storeCode: storeCode,
    merchantId: merchantId,
    src: src,
    items: items,
    cartId: cartId,
    currencyCode: currencyCode,
  };

  // adding data from old checkout

  useExternalScripts({
    url: "https://core.spreedly.com/iframe/iframe-v1.min.js",
  });
  const Spreedly = window["Spreedly"];
  // const Spreedly = window.Spreedly;
  // let spreedlyListening = React.useRef(false);
  const appContext = React.useContext(AppContext);
  const {
    setCartData,
    setMerchantKey,
    setCurrencySymbol,
    setCurrency,
    setShippingMethods,
    setCallbackUrl,
    setEnvKey,
    setFormData,
    setCache,
    //
    spreedlyEnvKey,
    formData,
    //
    setUseCacheCard,
    //
    shippingMethods,
  } = appContext;

  const mounted = useRef(false);

  const setup = async (payload) => {
    mounted.current = true;
    console.log("payload ", payload);

    let cart = payload?.cart?.data;
    let merchantApiKey = payload?.merchantApiKey;
    let currencySymbol = payload?.currencySymbol;
    let currency = payload?.currency;
    let shipping_methods = payload?.shipping_methods;
    let callback_url = payload?.callback_url;
    payload = null; // for testing. remove this later

    if (!payload) {
      cart = dummyPayload?.cart.data;
      merchantApiKey = dummyPayload?.merchantApiKey;
      currencySymbol = dummyPayload?.currencySymbol;
      currency = dummyPayload?.currency;
      shipping_methods = dummyPayload?.shipping_methods;
      callback_url = dummyPayload?.callback_url;
    }

    setCartData(cart);
    setMerchantKey(merchantApiKey);
    setCurrencySymbol(currencySymbol);
    setCurrency(currency);
    setShippingMethods(shipping_methods);
    setCallbackUrl(callback_url);

    // setShowModal(true);

    //
    await getGatewayData({ merchantKey: merchantApiKey });
    // await getCustomerData({ merchantKey: merchantApiKey });
    //
  };

  const getGatewayData = async ({ merchantKey }) => {
    const url = "http://localhost:5000/public/payment/get-gateway";
    const data = {
      key: merchantKey,
      type: "stripe",
    };
    const res = await axios.post(url, data).catch((err) => ({ error: err }));

    if (res?.data?.spreedlyEnvKey) {
      // setGatewayTokens(res?.data?.gateway);
      setEnvKey(res?.data?.spreedlyEnvKey);
      console.log("spreedlyEnvKey set!");
    }
    if (res?.error) {
      console.log(
        res?.error?.response?.data?.message ||
          "Error retrieving payment gateway"
        // {
        //   position: "top-right",
        //   autoClose: 700,
        //   hideProgressBar: false,
        //   progress: undefined,
        //   theme: "light",
        // }
      );
    }

    return;
  };

  React.useEffect(() => {
    setup(payload);
  }, [payload]);

  // end

  const handlePayment = (e) => {
    e.preventDefault();
    setProcessingPayment(!processingPayment);
    if (true) {
      // const cardExpiry = values?.cardExpiry;
      // const entries = cardExpiry?.split("/");

      // const month = entries[0];
      // const year = moment(cardExpiry, "MM/YY").format("YYYY");

      // const fullName = formData.fullName;

      const requiredFields = {
        month: "02",
        year: "2024",
        full_name: "alex james",
      };

      Spreedly.tokenizeCreditCard(requiredFields);
    }
  };

  //   /?storeCode=default&merchantId=1&src=wc&items=%5B%7B%22sku%22%3A%22MFC%22%2C%22qty%22%3A%221%22%2C%22options%22%3A%5B%7B%22id%22%3A%22230%22%2C%22value%22%3A%22131%22%7D%5D%7D%5D&cartId=720618&currencyCode=usd
  const couponField = useRef();

  const handleCouponClick = () => {
    setDisplayCoupon(!displayCoupon);
    setTimeout(() => {
      couponField.current.focus();
    }, 100);
  };

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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setIsCartOpened(false);
  //   stateChanger("loading");
  //   setTimeout(() => {
  //     stateChanger(2);
  //   }, 2500);
  // };

  const handlePayment2 = (e) => {
    e.preventDefault();
    setProcessingPayment(!processingPayment);
  };

  return (
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
        <input type="hidden" name="pmnts_id" id="pmnts_id" />
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

        <div id="MainContainer" className="fiSoQW">
          <div id="CheckoutContainer" className="oYYOn">
            <div id="CheckoutFormSectionContainer" className="fBURuJ">
              <div id="SectionContainer" className="lnxYvH">
                <div id="poweredByInstantBanner" style={{ padding: 10 }}>
                  <div
                    id="BannerContainer"
                    className={cartOpened ? "cartEnabled" : "eHICVZ"}
                  >
                    <div id="HeaderInnerContainer" className="cLMvmi separate">
                      <span className="Marginer"></span>
                      <div id="BannerLogoContainer" className="cGGLwj">
                        <div id="MerchantLogoContainer" className="hkSZnk">
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
                          {/* <img
                            id="MerchantLogoImg"
                            src="https://www.revereshoes.com.au/media/logo/stores/1/revere_logo_Colour.gif"
                            className="hIZXgi"
                          /> */}
                        </div>
                        <div
                          onClick={() => handleCart()}
                          id="BackContainer"
                          className="HkXEw"
                        >
                          {cartOpened ? (
                            "🎉"
                          ) : (
                            <img
                              alt="Cart"
                              height={16}
                              src="data:image/svg+xml,%3Csvg%20fill='%233D464D'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cpath%20d='M7%2018c-1.1%200-1.99.9-1.99%202S5.9%2022%207%2022s2-.9%202-2-.9-2-2-2zM1%202v2h2l3.6%207.59-1.35%202.45c-.16.28-.25.61-.25.96%200%201.1.9%202%202%202h12v-2H7.42c-.14%200-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75%200%201.41-.41%201.75-1.03l3.58-6.49A1.003%201.003%200%200%200%2020%204H5.21l-.94-2H1zm16%2016c-1.1%200-1.99.9-1.99%202s.89%202%201.99%202%202-.9%202-2-.9-2-2-2z'/%3E%3Cpath%20d='M0%200h24v24H0z'%20fill='none'/%3E%3C/svg%3E"
                            />
                          )}

                          <h4 id="BackText" className="iqNqGh">
                            A$179.95
                          </h4>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 512 512"
                            className="hBXhLe"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>

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
                            <div
                              id="CheckoutLineTitleComponentContainer"
                              className="kuWelW"
                            >
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
                            <div
                              id="CheckoutLinePriceComponentContainer"
                              className="eRAioS"
                            >
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
                            <div
                              id="CheckoutLineTitleComponentContainer"
                              className="kuWelW"
                            >
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
                            <div
                              id="CheckoutLinePriceComponentContainer"
                              className="eRAioS"
                            >
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
                            <div
                              id="CheckoutLineTitleComponentContainer"
                              className="kuWelW"
                            >
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
                            <div
                              id="CheckoutLinePriceComponentContainer"
                              className="eRAioS"
                            >
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
                            <div
                              id="CheckoutLineTitleComponentContainer"
                              className="kuWelW"
                            >
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
                            <div
                              id="CheckoutLinePriceComponentContainer"
                              className="eRAioS"
                            >
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
                </div>
                <div id="selectedDeliveryMethod" value="SHIPPING"></div>
                <form id="CompleteProfileMainFormContainer" className="fsSneX">
                  <div id="RowWrapper" className="djiNSH row">
                    <h4
                      id="CompleteProfileHeaderText"
                      className="lgqJFl eKvixq"
                    >
                      Your information
                    </h4>
                    <h4 id="ValidationErrorText" className="bNA-dtG"></h4>
                  </div>
                  <span id="Marginer" width={5} className="gDwDep"></span>
                  <input
                    name="email"
                    placeholder="Email"
                    id="email"
                    className="fIfmaf gRXGR form-control"
                    defaultValue=""
                    autoFocus
                  />
                  <div className="PhoneInput">
                    <div className="PhoneInputCountry">
                      <select
                        name="phoneCountry"
                        aria-label="Phone number country"
                        className="PhoneInputCountrySelect"
                        style={{ marginLeft: 10 }}
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
                      <div className="PhoneInputCountrySelectArrow"></div>
                    </div>
                    <input
                      type="tel"
                      autoComplete="tel tel-national"
                      data-testid="phone"
                      placeholder="Phone Number"
                      name="phone"
                      className="PhoneInputInput"
                      defaultValue=""
                      style={{ appearance: "none" }}
                    />
                  </div>
                  <div id="RowWrapper" className="djiNSH row">
                    <input
                      data-testid="firstName"
                      name="firstName"
                      autoComplete="given-name"
                      placeholder="First and last name"
                      id="firstName"
                      className="fIfmaf bjckf form-control"
                      defaultValue=""
                      style={{ borderBottomRightRadius: 6 }}
                    />
                  </div>
                  <span id="Marginer" className="ieymL"></span>
                  <div
                    id="spreedly-number"
                    className="bg-white  h-[45px] border-2 rounded-md"
                  ></div>
                  <div id="RowWrapper" className="djiNSH row">
                    <h4
                      id="CompleteProfileHeaderText"
                      className="lgqJFl eKvixq"
                    >
                      Payment method
                    </h4>
                    <h4 id="ValidationErrorText" className="bNA-dtG"></h4>
                  </div>
                  <span id="Marginer" className="bLmTAm"></span>
                  <div id="RowWrapper" className="sc-gKPRtg djiNSH row">
                    <div
                      id="CardInputContainer"
                      className="sc-bTTELM sc-gsGlKL dIVaVV XJnCb row"
                      style={{ border: "1px solid #ced4da", borderRadius: 6 }}
                    >
                      <div
                        id="PaymentInputsWrapper"
                        className="sc-dwnOUR clLfEp"
                      >
                        <div className="sc-UpCWa ecUfhz">
                          <span
                            id="cc-number"
                            className="sc-GKYbw fQAZmq vgs-collect-container__empty vgs-collect-container__invalid vgs-collect-container__touched"
                          >
                            <input
                              id="spreedly-number"
                              type="tel"
                              className="card-number-input css-gu6vqp invalid empty touched card-number"
                              autoComplete="cc-number"
                              placeholder="Card number"
                              aria-label="Card Number Input"
                              aria-placeholder="Card number"
                            ></input>
                            <img
                              src="data:image/svg+xml,%3csvg width='39' height='24' viewBox='0 0 39 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3crect x='0.5' y='0.5' width='38' height='23' rx='2.5' fill='white' stroke='%23A8B3C1'/%3e %3crect x='3' y='12' width='33' height='2.25' rx='1.125' fill='%23A8B3C1'/%3e %3crect x='3' y='16.5' width='7.5' height='2.25' rx='1.125' fill='%23A8B3C1'/%3e %3crect x='12' y='16.5' width='7.5' height='2.25' rx='1.125' fill='%23A8B3C1'/%3e %3crect x='28.5' y='16.5' width='7.5' height='4.5' rx='0.5' fill='%23A8B3C1'/%3e %3crect x='3' y='3' width='6.75' height='5.25' rx='0.5' fill='%23A8B3C1'/%3e %3c/svg%3e"
                              alt="Card Icon"
                              className="icon css-1jd8m52  card-icon"
                            ></img>
                            {/* <svg
                              width="800px"
                              height="800px"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M19 15C16.79 15 15 16.79 15 19C15 19.75 15.21 20.46 15.58 21.06C16.27 22.22 17.54 23 19 23C20.46 23 21.73 22.22 22.42 21.06C22.79 20.46 23 19.75 23 19C23 16.79 21.21 15 19 15ZM21.07 18.57L18.94 20.54C18.8 20.67 18.61 20.74 18.43 20.74C18.24 20.74 18.05 20.67 17.9 20.52L16.91 19.53C16.62 19.24 16.62 18.76 16.91 18.47C17.2 18.18 17.68 18.18 17.97 18.47L18.45 18.95L20.05 17.47C20.35 17.19 20.83 17.21 21.11 17.51C21.39 17.81 21.37 18.28 21.07 18.57Z"
                                fill="#292D32"
                              />
                              <path
                                d="M22 7.54844V7.99844C22 8.54844 21.55 8.99844 21 8.99844H3C2.45 8.99844 2 8.54844 2 7.99844V7.53844C2 5.24844 3.85 3.39844 6.14 3.39844H17.85C20.14 3.39844 22 5.25844 22 7.54844Z"
                                fill="#292D32"
                              />
                              <path
                                d="M2 11.4983V16.4583C2 18.7483 3.85 20.5983 6.14 20.5983H12.4C12.98 20.5983 13.48 20.1083 13.43 19.5283C13.29 17.9983 13.78 16.3383 15.14 15.0183C15.7 14.4683 16.39 14.0483 17.14 13.8083C18.39 13.4083 19.6 13.4583 20.67 13.8183C21.32 14.0383 22 13.5683 22 12.8783V11.4883C22 10.9383 21.55 10.4883 21 10.4883H3C2.45 10.4983 2 10.9483 2 11.4983ZM8 17.2483H6C5.59 17.2483 5.25 16.9083 5.25 16.4983C5.25 16.0883 5.59 15.7483 6 15.7483H8C8.41 15.7483 8.75 16.0883 8.75 16.4983C8.75 16.9083 8.41 17.2483 8 17.2483Z"
                                fill="#292D32"
                              />
                            </svg>
                               */}
                          </span>
                        </div>
                      </div>
                      <div
                        id="PaymentInputsWrapper"
                        className="sc-dwnOUR cmcdvS"
                      >
                        <div className="sc-UpCWa lciJdD">
                          <span
                            id="cc-expiration-date"
                            className="sc-GKYbw fQAZmq vgs-collect-container__empty vgs-collect-container__invalid vgs-collect-container__touched"
                          >
                            <input
                              className="css-10xyftw invalid empty card-exp"
                              autoComplete="cc-exp"
                              placeholder="MM / YY"
                              separator=" / "
                              type="tel"
                              aria-label="Card expiration date"
                              aria-placeholder="MM / YY"
                            ></input>
                          </span>
                        </div>
                      </div>
                      <div
                        id="PaymentInputsWrapper"
                        className="sc-dwnOUR gXftSI"
                      >
                        <div className="sc-UpCWa bkNiHc">
                          <span
                            id="cc-cvc"
                            className="sc-GKYbw fQAZmq vgs-collect-container__empty vgs-collect-container__invalid"
                          >
                            <input
                              type="tel"
                              className="css-10xyftw invalid empty card-cvv"
                              autoComplete="cc-csc"
                              placeholder="CVC"
                              aria-label="Card Security Code"
                              aria-placeholder="CVC"
                            ></input>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span id="Marginer" className="ieymL"></span>
                  <div
                    id="UtilDiv"
                    hidden=""
                    className="ebBRnt"
                    style={{
                      maxHeight: 66,
                      display: showAddress ? "block" : "none",
                    }}
                  >
                    <h4
                      id="CompleteProfileHeaderText"
                      className="lgqJFl eKvixq"
                    >
                      Select a pickup location
                    </h4>
                    <span id="Marginer" className="bLmTAm"></span>
                    <div
                      id="Dropdown"
                      style={{
                        position: "relative",
                        width: "100%",
                        backgroundColor: "white",
                        height: "max-content",
                      }}
                    >
                      <button className="gndjMD">
                        <h4 className="gMIgWT ggHFqQ">
                          No locations with available stock
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
                            focusable="false"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                          </svg>
                        </h4>
                      </button>
                    </div>
                    <span id="Marginer" className="ieymL"></span>
                    <div id="RowWrapper" className="djiNSH row">
                      <h4
                        id="CompleteProfileHeaderText"
                        className="lgqJFl eKvixq"
                      >
                        Shipping address
                      </h4>
                      <h4 id="ValidationErrorText" className="bNA-dtG"></h4>
                    </div>
                    <input
                      placeholder="Country"
                      name="country"
                      autoComplete="country country-name"
                      id="countryAutocomplete"
                      className="bKBoaI"
                      defaultValue=""
                    />
                    <span id="Marginer" className="bLmTAm"></span>
                    <input
                      autoComplete="off"
                      name="address1"
                      placeholder="Address"
                      borderbottom=""
                      borderradius="6px"
                      id="address1"
                      className="fIfmaf bPSAQW form-control pac-target-input"
                      defaultValue=""
                    />
                    <div id="AddressFieldsWrapper" className="czTzMd">
                      <div id="RowWrapper" className="djiNSH row">
                        <input
                          autoComplete="address-line2"
                          placeholder="Address line 2"
                          id="address2"
                          className="fIfmaf keNUtJ form-control"
                          defaultValue=""
                        />
                        <input
                          autoComplete="city shipping address-level2"
                          name="city"
                          placeholder="Suburb or city"
                          id="city"
                          className="fIfmaf eDQUpO form-control"
                          defaultValue=""
                        />
                      </div>
                      <div id="RowWrapper" className="djiNSH row">
                        <input
                          placeholder="State/Region"
                          autoComplete="province shipping address-level1"
                          id="regionAutocomplete"
                          className="bKBoaI"
                          defaultValue=""
                        />
                        <div className="css-2b097c-container" id="region">
                          <span
                            aria-live="polite"
                            aria-atomic="false"
                            aria-relevant="additions text"
                            className="css-7pg0cj-a11yText"
                          ></span>
                          <div className="css-ox4o4j-control">
                            <div className="css-1hwfws3">
                              <div className="css-19uk7i0-placeholder">
                                State/Region
                              </div>
                              <div className="css-1g6gooi">
                                <div
                                  className=""
                                  style={{ display: "inline-block" }}
                                >
                                  <input
                                    autoCapitalize="none"
                                    autoComplete="off"
                                    autoCorrect="off"
                                    id="react-select-2-input"
                                    spellCheck="false"
                                    tabIndex={0}
                                    type="text"
                                    aria-autocomplete="list"
                                    defaultValue=""
                                    style={{
                                      boxSizing: "content-box",
                                      width: 2,
                                      background: "0px center",
                                      border: 0,
                                      fontSize: "inherit",
                                      opacity: 1,
                                      outline: 0,
                                      padding: 0,
                                      color: "inherit",
                                    }}
                                  />
                                  <div
                                    style={{
                                      position: "absolute",
                                      top: 0,
                                      left: 0,
                                      visibility: "hidden",
                                      height: 0,
                                      overflow: "scroll",
                                      whiteSpace: "pre",
                                      fontSize: 16,
                                      fontFamily:
                                        '-apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                      fontWeight: 400,
                                      fontStyle: "normal",
                                      letterSpacing: "normal",
                                      textTransform: "none",
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="css-1wy0on6">
                              <span className="css-1okebmr-indicatorSeparator"></span>
                              <div
                                className="css-tlfecz-indicatorContainer"
                                aria-hidden="true"
                              >
                                <svg
                                  height={20}
                                  width={20}
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                  focusable="false"
                                  className="css-8mmkcg"
                                >
                                  <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <input name="region" type="hidden" defaultValue="" />
                        </div>
                      </div>
                      <input
                        placeholder="Postal Code"
                        autoComplete="postal-code"
                        id="postCodeAutocomplete"
                        className="bKBoaI"
                        defaultValue=""
                      />
                      <input
                        autoComplete="postal-code"
                        placeholder="Postal code"
                        id="postCode"
                        className="fIfmaf iYzbmc form-control"
                        defaultValue=""
                      />
                      <div className="css-2b097c-container" id="country">
                        <span
                          aria-live="polite"
                          aria-atomic="false"
                          aria-relevant="additions text"
                          className="css-7pg0cj-a11yText"
                        ></span>
                        <div className="css-lkd1b-control">
                          <div className="css-1hwfws3">
                            <div className="css-19uk7i0-placeholder">
                              Country
                            </div>
                            <div className="css-1g6gooi">
                              <div
                                className=""
                                style={{ display: "inline-block" }}
                              >
                                <input
                                  autoCapitalize="none"
                                  autoComplete="off"
                                  autoCorrect="off"
                                  id="react-select-3-input"
                                  spellCheck="false"
                                  tabIndex={0}
                                  type="text"
                                  aria-autocomplete="list"
                                  aria-label="Country Select"
                                  defaultValue=""
                                  style={{
                                    boxSizing: "content-box",
                                    width: 2,
                                    background: "0px center",
                                    border: 0,
                                    fontSize: "inherit",
                                    opacity: 1,
                                    outline: 0,
                                    padding: 0,
                                    color: "inherit",
                                  }}
                                />
                                <div
                                  style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    visibility: "hidden",
                                    height: 0,
                                    overflow: "scroll",
                                    whiteSpace: "pre",
                                    fontSize: 16,
                                    fontFamily:
                                      '-apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    letterSpacing: "normal",
                                    textTransform: "none",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="css-1wy0on6">
                            <span className="css-1okebmr-indicatorSeparator"></span>
                            <div
                              className="css-tlfecz-indicatorContainer"
                              aria-hidden="true"
                            >
                              <svg
                                height={20}
                                width={20}
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                                focusable="false"
                                className="css-8mmkcg"
                              >
                                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <input name="country" type="hidden" defaultValue="" />
                      </div>
                    </div>
                  </div>
                  <div id="UtilDiv" className="ebGFBo">
                    <div id="RowWrapper" className="djiNSH row">
                      <h4
                        id="CompleteProfileHeaderText"
                        className="lgqJFl eKvixq"
                      >
                        Shipping address
                      </h4>
                      <h4 id="ValidationErrorText" className="bNA-dtG"></h4>
                    </div>
                    <input
                      placeholder="Country"
                      name="country"
                      autoComplete="country country-name"
                      id="countryAutocomplete"
                      className="bKBoaI"
                      defaultValue=""
                    />
                    <span id="Marginer" className="bLmTAm"></span>
                    <input
                      autoComplete="off"
                      name="address1"
                      placeholder="Address"
                      borderbottom=""
                      borderradius="6px"
                      id="address1"
                      className="fIfmaf bPSAQW form-control pac-target-input"
                      defaultValue=""
                    />
                    <div id="AddressFieldsWrapper" className="czTzMd">
                      <div id="RowWrapper" className="djiNSH row">
                        <input
                          autoComplete="address-line2"
                          placeholder="Address line 2"
                          id="address2"
                          className="fIfmaf keNUtJ form-control"
                          defaultValue=""
                        />
                        <input
                          autoComplete="city shipping address-level2"
                          name="city"
                          placeholder="Suburb or city"
                          id="city"
                          className="fIfmaf eDQUpO form-control"
                          defaultValue=""
                        />
                      </div>
                      <div id="RowWrapper" className="djiNSH row">
                        <input
                          placeholder="State/Region"
                          autoComplete="province shipping address-level1"
                          id="regionAutocomplete"
                          className="bKBoaI"
                          defaultValue=""
                        />
                        <div className="css-2b097c-container" id="region">
                          <span
                            aria-live="polite"
                            aria-atomic="false"
                            aria-relevant="additions text"
                            className="css-7pg0cj-a11yText"
                          ></span>
                          <div className="css-ox4o4j-control">
                            <div className="css-1hwfws3">
                              <div className="css-19uk7i0-placeholder">
                                State/Region
                              </div>
                              <div className="css-1g6gooi">
                                <div
                                  className=""
                                  style={{ display: "inline-block" }}
                                >
                                  <input
                                    autoCapitalize="none"
                                    autoComplete="off"
                                    autoCorrect="off"
                                    id="react-select-4-input"
                                    spellCheck="false"
                                    tabIndex={0}
                                    type="text"
                                    aria-autocomplete="list"
                                    defaultValue=""
                                    style={{
                                      boxSizing: "content-box",
                                      width: 2,
                                      background: "0px center",
                                      border: 0,
                                      fontSize: "inherit",
                                      opacity: 1,
                                      outline: 0,
                                      padding: 0,
                                      color: "inherit",
                                    }}
                                  />
                                  <div
                                    style={{
                                      position: "absolute",
                                      top: 0,
                                      left: 0,
                                      visibility: "hidden",
                                      height: 0,
                                      overflow: "scroll",
                                      whiteSpace: "pre",
                                      fontSize: 16,
                                      fontFamily:
                                        '-apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                      fontWeight: 400,
                                      fontStyle: "normal",
                                      letterSpacing: "normal",
                                      textTransform: "none",
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="css-1wy0on6">
                              <span className="css-1okebmr-indicatorSeparator"></span>
                              <div
                                className="css-tlfecz-indicatorContainer"
                                aria-hidden="true"
                              >
                                <svg
                                  height={20}
                                  width={20}
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                  focusable="false"
                                  className="css-8mmkcg"
                                >
                                  <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <input name="region" type="hidden" defaultValue="" />
                        </div>
                      </div>
                      <input
                        placeholder="Postal Code"
                        autoComplete="postal-code"
                        id="postCodeAutocomplete"
                        className="bKBoaI"
                        defaultValue=""
                      />
                      <input
                        autoComplete="postal-code"
                        placeholder="Postal code"
                        id="postCode"
                        className="fIfmaf iYzbmc form-control"
                        defaultValue=""
                      />
                      <div className="css-2b097c-container" id="country">
                        <span
                          aria-live="polite"
                          aria-atomic="false"
                          aria-relevant="additions text"
                          className="css-7pg0cj-a11yText"
                        ></span>
                        <div className="css-lkd1b-control">
                          <div className="css-1hwfws3">
                            <div className="css-19uk7i0-placeholder">
                              Country
                            </div>
                            <div className="css-1g6gooi">
                              <div
                                className=""
                                style={{ display: "inline-block" }}
                              >
                                <input
                                  autoCapitalize="none"
                                  autoComplete="off"
                                  autoCorrect="off"
                                  id="react-select-5-input"
                                  spellCheck="false"
                                  tabIndex={0}
                                  type="text"
                                  aria-autocomplete="list"
                                  aria-label="Country Select"
                                  defaultValue=""
                                  style={{
                                    boxSizing: "content-box",
                                    width: 2,
                                    background: "0px center",
                                    border: 0,
                                    fontSize: "inherit",
                                    opacity: 1,
                                    outline: 0,
                                    padding: 0,
                                    color: "inherit",
                                  }}
                                />
                                <div
                                  style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    visibility: "hidden",
                                    height: 0,
                                    overflow: "scroll",
                                    whiteSpace: "pre",
                                    fontSize: 16,
                                    fontFamily:
                                      '-apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                                    fontWeight: 400,
                                    fontStyle: "normal",
                                    letterSpacing: "normal",
                                    textTransform: "none",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="css-1wy0on6">
                            <span className="css-1okebmr-indicatorSeparator"></span>
                            <div
                              className="css-tlfecz-indicatorContainer"
                              aria-hidden="true"
                            >
                              <svg
                                height={20}
                                width={20}
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                                focusable="false"
                                className="css-8mmkcg"
                              >
                                <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <input name="country" type="hidden" defaultValue="" />
                      </div>
                    </div>
                  </div>
                  <span id="Marginer" className="ieymL"></span>
                  <div id="CartExtraFeesMainContainer" className="hkDEcB"></div>
                  <div id="CouponCodeWrapper" className="clivIu">
                    <div id="CouponCodeMainContainer" className="inxTnH">
                      <div
                        id="UtilDiv"
                        hidden=""
                        className="ebBRnt"
                        style={{ display: displayCoupon ? "block" : "none" }}
                        // style={{ display: displayCoupon && "hidden" }}
                        // style={{ display: "none" }}
                      >
                        <div
                          id="RowWrapper"
                          width="100%"
                          className="gVXtdP row"
                        >
                          <div className="enuuvf">
                            <input
                              placeholder="Enter code"
                              id="CodeInput"
                              className="fIfmaf lgWrbL form-control"
                              defaultValue=""
                              ref={couponField}
                            />
                            {/* new button */}
                            <div
                              onClick={() => alert("coupon applied")}
                              className="dxoLOM"
                            >
                              <button
                                color="#0080E9"
                                cursor="pointer"
                                className="bDqFIu"
                              >
                                Apply
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id="UtilDiv"
                        className="ebGFBo"
                        // style={{ display: displayCoupon ? "block" : "hidden" }}
                        style={{ display: displayCoupon ? "none" : "block" }}
                        // style={{ display: "none" }}
                        onClick={handleCouponClick}
                      >
                        <div
                          id="AddCouponContainer"
                          className="eUtgzI"
                          style={{ paddingLeft: 10 }}
                        >
                          <span id="Marginer" className="ieymL"></span>
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth={0}
                            viewBox="0 0 512 512"
                            id="AddCouponButton"
                            className="QJcxx"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={32}
                              d="M256 112v288m144-144H112"
                            ></path>
                          </svg>
                          <h4 id="BodyText" className="gMIgWT">
                            Add a promotional code
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span id="Marginer" className="ieymL"></span>
                  <button
                    onClick={handlePayment}
                    type="submit"
                    height="50px"
                    id="PrimaryButton"
                    className="itqktj"
                    style={{ background: "rgb(0, 116, 212)" }}
                  >
                    {processingPayment && "Processing..."}
                    {!processingPayment && "Complete Purchase"}
                  </button>
                  <span id="Marginer" className="ieymd"></span>
                  <div id="BackFooterButtonContainer" className="bmMrrA">
                    <div id="BackFooterButtonInnerContainer" className="eRnxLG">
                      <h4 id="BackFooterButtonIcon" className="gMIgWT gjwnNJ">
                        ←
                      </h4>
                      <h4 id="BackFooterButtonText" className="gMIgWT jRpanj">
                        BACK TO STORE
                      </h4>
                    </div>
                  </div>
                  <span id="Marginer" className="ieymd"></span>
                  <div id="HorizontalLine" className="jrJNwj"></div>
                  <div
                    id="RowWrapper"
                    padding="5px"
                    justifycontent="space-between"
                    className="hMyymS row"
                  >
                    <div id="PoweredByWrapper" className="eAzkqc">
                      <h4 id="TinyBodyText" className="fXziTs czrHSx">
                        Powered by
                      </h4>
                      <img
                        size={14}
                        src="https://instant-imgs.s3.ap-southeast-2.amazonaws.com/logo_29-09-21.png"
                        className="iCBYsR"
                      />
                    </div>
                    <div id="TermsAndPrivacyWrapper" className="jpdVsB">
                      <h4 id="TinyLinkText" className="gMIgWT czrHSx cQzbjF">
                        Terms
                      </h4>
                      <span id="Marginer" className="idvxqK"></span>
                      <h4 id="TinyLinkText" className="gMIgWT czrHSx cQzbjF">
                        Privacy
                      </h4>
                    </div>
                  </div>
                  <span id="Marginer" className="ieypQ"></span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <iframe
        src="https://js.verygoodvault.com/vgs-collect/2.12.0/lib/index.html#telemetry=1&tnt=dG50OG9vOTR2b3A%3D"
        id="randomId204571119963426904"
        style={{
          height: 0,
          width: 0,
          border: 0,
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
        }}
      ></iframe> */}
      <div
        className="pac-container pac-logo hdpi"
        style={{
          display: "none",
          width: 0,
          position: "absolute",
          left: 0,
          top: 0,
        }}
      ></div>
      <div
        className="pac-container pac-logo hdpi"
        style={{
          display: "none",
          width: 430,
          position: "absolute",
          left: 649,
          top: 422,
        }}
      ></div>

      {/* <div className="st-inspector">
        <iframe></iframe>
      </div> */}
      {/* <div
        style={{
          zIndex: 2147483646,
          position: "fixed",
          top: "283.5px",
          left: "612.5px",
          width: "102.625px",
          height: 28,
        }}
      ></div>
      <div
        style={{
          pointerEvents: "none",
          position: "fixed",
          zIndex: 2147483646,
          top: 0,
          left: 0,
          width: 1488,
          height: "647.5px",
        }}
      >
        <canvas
          width={3048}
          height={1368}
          style={{
            position: "relative",
            left: "-18px",
            top: "-18px",
            width: 1524,
            height: 684,
          }}
        ></canvas>
      </div> */}
    </div>
  );
}
