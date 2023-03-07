import React, { Component } from "react";

import SpreedlyCreditCard from "./SpreedlyCreditCard";

import Transactions from "./Transactions";

import { connect } from "react-redux";
import { refundTransaction } from "../../actions";

class SpreedlyShell extends Component {
  state = {
    activeItem: "creditCard",
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  signOut() {
    console.log(`Sign out`);
  }

  handleRefund = (payment) => {
    const preauthToken = payment.preauthRes.transaction.token;
    console.log(`Executing refund for ${preauthToken}`);
    this.props.refundTransaction(preauthToken);
  };

  render() {
    const { activeItem } = this.state;
    const newUserPage = activeItem === "creditCard";
    const confirmPage = activeItem === "googlePay";
    const transactionsPage = activeItem === "transactions";
    const numOfTransactions = this.props.transactions.length;

    return (
      <React.Fragment>
        {/* {creditCardPage && <SpreedlyCreditCard payment={this.props.payment} />} */}
        <SpreedlyCreditCard payment={this.props.payment} />
        {transactionsPage && (
          <Transactions
            payments={this.props.transactions}
            handleRefund={this.handleRefund}
          />
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { transactions: state.transactions, payment: state.payment };
};

export default connect(mapStateToProps, {
  refundTransaction,
})(SpreedlyShell);
