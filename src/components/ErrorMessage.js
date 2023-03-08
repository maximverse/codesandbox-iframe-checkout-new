import React from "react";

const ErrorMessage = (props) => {
  const { show, message } = props;
  return (
    <React.Fragment>
      {show && <p className="error" message={message.toString()}></p>}
    </React.Fragment>
  );
};

export default ErrorMessage;
