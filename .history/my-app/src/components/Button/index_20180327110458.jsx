import React, { Component } from "react";
import styles from "./button.scss";

class Button extends Component {
  render() {
    const { renderText } = this.props;

    return (
      <div className={styles.button}>
        <button onClick={renderText}>Click me</button>
      </div>
    );
  }
}

export default Button;