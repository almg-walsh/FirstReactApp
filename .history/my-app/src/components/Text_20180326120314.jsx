import React, { Component } from "react";
import styles from "../App.scss";

class Text extends Component {
  render() {
    const { cardNumber } = this.props;
    return (
      <div className={styles.text}>
        <p>I am the card {cardNumber}</p>
      </div>
    );
  }
}

export default Text;