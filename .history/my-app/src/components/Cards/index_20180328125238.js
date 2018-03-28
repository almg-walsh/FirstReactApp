import React, { Component } from "react";
import Card from "../Card";
import styles from "../Card/card.scss";
import Advert from "../Advert";

class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortCards: [],
      isChecked: false
    };
    this.classNames = [];
  }
  render() {
    var labels = {
      record: 1,
      heat: 2,
      experience: 3,
      roomy: 4,
      jumbled: 5,
      legal: 6,
      phobic: 7,
      weary: 8,
      whine: 9,
      furry: 10,
      luca: 11,
      paolo: 12,
      John: 13,
      tom: 14,
      Aidan: 15
    };

    let component;
    let checked = this.props.checkboxesChecked 

    if (this.props.isChecked) {
      if (checked === 1) {
        this.classNames.push(styles.border);
      } else if (checked >= 2) {
        this.classNames.push(styles.backgroundBorder);
      } else if (checked === 3) {
        this.setState({
          isChecked: !isChecked
        })
      }
    } else {
      this.classNames.pop()
    }

    return Object.keys(labels).map((key, i) => {
      if ((i + 1) % 3) {
        component = (
          <Card
            className={[styles.app, ...this.classNames].join(" ")}
            key={i}
            label={key}
            cardNumber={key}
            numberOfCheckboxes={this.checkboxesChecked}
            isChecked={this.isChecked}
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
