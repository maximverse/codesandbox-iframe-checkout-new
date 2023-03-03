import * as React from "react";

export const AppContext = React.createContext();

const AppContextFC = (props) => {
  const [cartData, setCartData] = React.useState({});
  const [merchantKey, setMerchantKey] = React.useState();
  const [currentScreen, setCurrentScreen] = React.useState("first");
  const [currencySymbol, setCurrencySymbol] = React.useState("");
  const [currency, setCurrency] = React.useState("");
  const [shippingMethods, setShippingMethods] = React.useState({});
  const [formData, setFormData] = React.useState({
    fullName: "John Doe",
    phoneNo: "+373 611 44 210",
    email: "test@test.com",
    cardCvv: "953",
    cardExpiry: "02/24",
    address: "",
    postalCode: "MD-2000",
    city: "Chisinau",
    state: "Los Santos",
    country: "",
    address1: "5th Ave",
    address2: "110",
    //
    shippingMethod: "",
  });
  const [callbackUrl, setCallbackUrl] = React.useState();
  //spreedly
  const [gatewayTokens, setGatewayTokens] = React.useState();
  const [spreedlyEnvKey, setEnvKey] = React.useState();
  //cached data
  const [cache, setCache] = React.useState();
  const [useCachedCard, setUseCacheCard] = React.useState(false);

  const selectedShipping = React.useMemo(() => {
    const shipping = formData?.shippingMethod?.split("_");
    //
    if (shipping?.length < 1) return;

    const zone_id = shipping[0];
    const method_id = shipping[1];

    const selectedZone = shippingMethods[zone_id];
    let selectedMethod = selectedZone?.["methods"][method_id];
    if (isNaN(parseFloat(selectedMethod?.["cost"]))) {
      selectedMethod = {
        ...selectedMethod,
        cost: 0,
      };
    }
    return selectedMethod;
  }, [formData]);

  const totalPrice = React.useMemo(() => {
    const cartItemsKeys = Object.keys(cartData);
    const line_subtotal = cartItemsKeys.map((key) => {
      const item = cartData[key];
      return item.line_subtotal;
    });

    const sum = line_subtotal.reduce((a, v) => a + v, 0);
    return sum;
  }, [cartData]);

  const totalWithShipping =
    parseFloat(totalPrice) + parseFloat(selectedShipping?.cost);

  return (
    <AppContext.Provider
      value={{
        cartData,
        shippingMethods,
        //
        setCurrentScreen,
        //
        currency,
        currentScreen,
        merchantKey,
        currencySymbol,
        callbackUrl,
        //
        formData,
        setFormData,
        //
        gatewayTokens,
        setGatewayTokens,
        //
        spreedlyEnvKey,
        setEnvKey,
        //
        cache,
        setCache,
        //
        setCartData,
        setMerchantKey,
        setCurrencySymbol,
        setCurrency,
        setShippingMethods,
        setCallbackUrl,
        //
        useCachedCard,
        setUseCacheCard,
        //
        selectedShipping,
        totalPrice,
        totalWithShipping,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextFC;
