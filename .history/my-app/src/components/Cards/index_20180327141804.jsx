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
      "furry",
      "luca",
      "paolo",
      "John",
      "tom",
      "pasta"
    ];

    let component;
    return (
        labels.map((labels,i) => {
            if(i % 3) {
                component = <Card className={styles.app} key={i} label={labels[i]} cardNumber={labels[i]} />
            } else {
                component = <Advert key={i}/>
            }
    
            return component;
        })
)
   
        


    // labels.map((object, i) => (
    //     <Card className={styles.app} key={i} label={labels[i + 1]} cardNumber={i + 1} />
    //   ));
  }
}

export default Cards;
