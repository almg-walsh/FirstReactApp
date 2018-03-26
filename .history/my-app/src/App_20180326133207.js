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
      hideAdvert: false
    };
    this.hide = this.hide.bind(this);
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = (label) => {
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
        break;
      default:
        this.setState(prevState => ({
          classNames: []
        }));
        break;
    }
  };

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  );

  createCheckboxes = () => items.map(this.createCheckbox);

  hide = () => {
    this.setState({
      hideAdvert: true
    });
  };

  render() {
    const { classNames, hideAdvert } = this.state;
    return (
      <div>     
        {items.map(this.createCheckbox)}
        {Card.list.map((i) => {
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
            component = (
              <Advert key={i} hideAdvert={hideAdvert} hide={(this.hide)}/>
            );
          }
          return component;
        })}
        {this.state.hideAdvert ? component : null}
      </div>
    );
  }
}

export default App;
