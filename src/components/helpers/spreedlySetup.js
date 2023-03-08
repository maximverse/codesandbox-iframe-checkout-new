const setParams = (Spreedly) => {
    Spreedly.setParam("allow_blank_name", true);
    Spreedly.setParam("allow_expired_date", true);
    // credit card number
    Spreedly.setPlaceholder("number", "Card Number");
    Spreedly.setFieldType("number", "text");

    Spreedly.setStyle(
      "number",
      "scroll-behavior: auto; font-size: 16px; !important;"
    );

    Spreedly.setStyle("number", "border: 0; padding: 0;");
    Spreedly.setStyle(
      "number",
      "display: inline-block; vertical-align: middle;"
    );
    Spreedly.setStyle("number", "background: none; line-height: 1;");
    Spreedly.setStyle(
      "number",
      "box-sizing: border-box; color: rgb(33, 37, 41);"
    );
    Spreedly.setStyle(
      "number",
      " font-family: -apple-system, BlinkMacSystemFont, Inter, Roboto, Helvetica Neue, Ubuntu, sans-serif; height: 98vh;"
    );

    Spreedly.setNumberFormat("prettyFormat");
    // cvv
    Spreedly.setPlaceholder("cvv", "CVV");
    Spreedly.setFieldType("cvv", "text");
    Spreedly.setStyle("cvv", "scroll-behavior: auto; margin: 0;");
    Spreedly.setStyle("cvv", "border: 0; padding: 0;");
    Spreedly.setStyle(
      "cvv",
      "display: inline-block; vertical-align: middle;"
    );
    Spreedly.setStyle("cvv", "background: none; line-height: 1;");
    Spreedly.setStyle(
      "cvv",
      "box-sizing: border-box; color: rgb(33, 37, 41);"
    );
    Spreedly.setStyle("cvv", "font-size: 16px;");
    Spreedly.setStyle(
      "cvv",
      "font-family: -apple-system, BlinkMacSystemFont, Inter, Roboto, Helvetica Neue, Ubuntu, sans-serif; height: 98vh;"
    );
};

export { setParams };
