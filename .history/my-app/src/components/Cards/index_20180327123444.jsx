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

    return labels.map((object, i) => <Card label={i} />);
  }
}

export default Cards;
