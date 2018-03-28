import React, { Component } from "react";
import Card from "../Card/index";
import styles from "../Card/card.scss";
import Advert from "../Advert/index";

class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
         sortCards : [],
        };
    }
  render() {
    var labels = {
      "record": 1,
       "heat": 2,
      "experience": 3,
      "roomy": 4,
      "jumbled": 5,
      "legal": 6,
      "phobic": 7,
      "weary": 8,
      "whine": 9,
      "furry": 10,
      "luca": 11,
      "paolo": 12,
      "John": 13,
      "tom": 14,
      "Aidan": 15
    };

    let component;
    
    return Object.keys(labels).sort(function(a, b){return b-a}).map((key, i) => {
        console.log(value)
      if ((i + 1) % 3) {
        component = (
          <Card
            className={styles.app}
            key={i}
            label={key}
            cardNumber={key}
          />
        );
      } else {
        component = <Advert key={i} />;
      }
      return component;
    });

  }
}

export default Cards;
