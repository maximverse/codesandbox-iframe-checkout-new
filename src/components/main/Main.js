import React, { Component } from "react";
import { connect } from "react-redux";
import { refundTransaction } from "../../actions";
import CheckoutPage from "./CheckoutPage";

class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <CheckoutPage payment={this.props.payment} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { payment: state.payment };
};

export default connect(mapStateToProps, {
  refundTransaction,
})(Main);
