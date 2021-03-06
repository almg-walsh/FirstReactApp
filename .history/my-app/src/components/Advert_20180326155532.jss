import React, { Component } from "react";
import styles from "./Advert.test";
import logo from "../../logo.svg";

class Advert extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      hideAdvert: false
    };
    this.hide = this.hide.bind(this);
  }

  hide = () => {
    this.setState({
      hideAdvert: true
    });
  };

  render() {
    return this.state.hideAdvert ? null : (
      <div className={styles.advert}>
        <img src={logo} className={styles.logo} alt="logo" />
        <button onClick={this.hide}>X</button>
      </div>
    );
  }
}

export default Advert;