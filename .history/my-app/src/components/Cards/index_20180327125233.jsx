import React, { Component } from "react";
import Card from "../Card/index";
import styles from "../Card/card.scss";

class Cards extends Component {
  render() {
    var labels = [
      "record",
      "heat",
      "experience",
      "roomy",
      "jumbled",
      "legal",
      "phobic",
      "weary",
      "whine",
      "furry"
    ];

    return labels.map((object, i) => (
      <Card className={styles.app} 
            label={labels[i + 1]} 
            cardNumber={i + 1} 
            />
    ));
  }
}

export default Cards;
