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
      isChecked: false
    };
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = (label, status) => {
    console.log(status);
    this.selectedCheckboxes.has(label)
      ? this.selectedCheckboxes.delete(label)
      : this.selectedCheckboxes.add(label);

    switch (this.selectedCheckboxes.size) {
      case 1:
        this.setState(prevState => ({
          classNames: [styles.border]
        }));
        break;
      case 2:
        this.setState(prevState => ({
          classNames: [styles.border, styles.backgroundBorder]
        }));
        break;
      case 3:
        alert("You can only select two checkboxes");
        this.setState(prevState => ({
          isChecked: false
        }));
        break;
      default:
        this.setState(prevState => ({
          classNames: []
        }));
        break;
    }
  };

  render() {
    const { classNames, isChecked } = this.state;
    return (
      <div>
        {items.map(label => {
          return (
            <Checkbox
              label={label}
              handleCheckboxChange={this.toggleCheckbox}
              key={label}
              checked={isChecked}
            />
          );
        })}
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
