import React, { Component } from "react";
import has from "lodash";
import styles from "./App.scss";
import Advert from "./components/Advert";
import Checkbox from "./components/Checkbox";
import Card from "./components/Card";

Card.list = has.range(1, 15);
let number = 1;
let component;
const items = ["One", "Two", "Three"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classNames: [styles.app],
      hideAdvert: false,
      isChecked: false,
      numberOfCheckboxes: 0

    };
    this.selectedCheckboxes = new Set();

  }

  toggleCheckbox = (label) => {
    this.setState({
      isChecked: true
    })
    console.log(this.state.isChecked)
  };

  render() {
    const { classNames, isChecked } = this.state;
    return (
      <div>
        <div className={styles.checkboxes}>
        {items.map(label => {
          return (
            <Checkbox
              label={label}
              toggleCheckboxChange={this.toggleCheckbox}
              key={label}
              checked={isChecked}
            />
          );
        })}
        </div>
        {Card.list.map(i => {
          if (i % 3) {
            component = (
              <Card
                key={i}
                cardNumber={number}
                className={[styles.app, ...classNames].join(" ")}
              />
            );
            number++;
          } else {
            component = <Advert key={i} />;
          }
          return component;
        })}
      </div>
    );
  }
}

export default App;
