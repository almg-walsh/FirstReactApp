import React, { Component } from "react";
import styles from "./injectedtext.scss";

class InjectedText extends Component {
  render() {
    const { cardNumber } = this.props;
    return (
      <div className={styles.injectedText}>
        <p>I clicked the card number {cardNumber}</p>
      </div>
    );
  }
}

export default InjectedText;