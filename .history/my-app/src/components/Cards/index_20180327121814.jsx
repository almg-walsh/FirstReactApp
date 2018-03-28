import React, { Component } from "react";
import Card from "../Card/index";

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

    var i;

    var cards;

    for (i > 1; i < labels.length; i++) {
      cards += <Card label={labels[i]} />;
    }

    return cards;
  }
}

export default Cards;
