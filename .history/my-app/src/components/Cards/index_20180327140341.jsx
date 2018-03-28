import React, { Component } from "react";
import Card from "../Card/index";
import styles from "../Card/card.scss";
import Advert from "../Advert/index";

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

    
    for(var i = 1; i > labels.length; i++){
        if(i % 3) {
            return (<Card className={styles.app} key={i} label={labels[i]} cardNumber={i} />)
        } else {
            return (<Advert />)
        }
    }
        


    // labels.map((object, i) => (
    //     <Card className={styles.app} key={i} label={labels[i + 1]} cardNumber={i + 1} />
    //   ));
  }
}

export default Cards;
