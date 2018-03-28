import React, { Component } from "react";
import Card from "../Card/index";
import styles from "../Card/card.scss";
import Advert from "../Advert/index";

class Cards extends Component {
  render() {
    var labels = {
      1:"record",
      2: "heat",
      3:"experience",
      4:"roomy",
      5:"jumbled",
      6:"legal",
      7:"phobic",
      8:"weary",
      9:"whine",
      10:"furry",
      11:"luca",
      12:"paolo",
      13:"John",
      14:"tom",
      15:"pasta"
    };

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
