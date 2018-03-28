import React, { Component } from "react";
import has from "lodash";
import styles from "./App.scss";
import Advert from "./components/Advert/index";
import Checkbox from "./components/Checkbox/index";
import Card from "./components/Card/index";
import Cards from "./components/Cards/index"

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
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    this.setState({
      isChecked: true
    })
    console.log(this.state.isChecked)
  }

  render() {
    const { classNames } = this.state;
    const isChecked = this.state.isChecked;
    return (
      <div>
        <div className={styles.checkboxes}>
        {items.map(label => {
          return (
            <Checkbox
              label={label}
              key={label}
              onClickChange={this.handleChange}
              checked={isChecked}
            />
          );
        })}
        </div>
        <div>
          <Cards />
        </div>
        {/* {Card.list.map(i => {
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
        })} */}
      </div>
    );
  }
}

export default App;
