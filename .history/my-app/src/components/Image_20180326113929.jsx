import React, { Component } from "react";
import styles from "../App.scss";

class Advert extends Component {
  render() {
    return (
      <div className={styles.image}>
        <img
          src="https://avatars0.githubusercontent.com/u/5065156?v=4"
          alt="logo"
        />
      </div>
    );
  }
}

export default Advert;
