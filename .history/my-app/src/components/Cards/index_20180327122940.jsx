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

    var i = 0;

    for (i > 1; i < labels.length; i++) {
        return <Card label={labels[i]} />;
    }

    
  }
}

export default Cards;
