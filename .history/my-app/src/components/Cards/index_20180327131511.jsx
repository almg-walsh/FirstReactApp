import React, { Component } from "react";
import Card from "../Card/index";
import styles from "../Card/card.scss";
import Advert from "../Advert/index"

let adFrequency = 2
let currentAdSlot = 1

class Cards extends Component {

displayAd = () => {
    if (currentAdSlot >= adFrequency) {
        currentAdSlot = 1
        return <Advert />
    }
    currentAdSlot ++
    return ""
    }

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

    return (
        labels.map((object, i) => (
            <Card className={styles.app} 
                  key={i}
                  label={labels[i]} 
                  cardNumber={i} 
                  />
              
          )),
        this.displayAd()
    ) 
  }
}

export default Cards;
