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
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = (status) => {
    console.log(this.selectedCheckboxes.has(status))
    let checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
    switch (checkedBoxes.length) {
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
        status = false;
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

  
  render() {
    const { classNames } = this.state;
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
              <Advert key={i}/>
            );
          }
          return component;
        })}
        
      </div>
    );
  }
}

export default App;
