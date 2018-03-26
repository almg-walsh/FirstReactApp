import React, { Component } from "react";
import styles from "../App.scss";
import logo from "../logo.svg";

class Advert extends Component {
  render() {
    const { hide, hideAdvert } = this.props;

    return (
   hideAdvert ? null :
       <div className={styles.advert}>
        <img src={logo} className={styles.logo} alt="logo" />
        <button onClick={hide}>X</button>
      </div>   
    );
  }
}

export default Advert;