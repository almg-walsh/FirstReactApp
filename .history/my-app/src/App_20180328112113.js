import React, { Component } from "react";
import styles from "./App.scss";
import Checkbox from "./components/Checkbox";
import Cards from "./components/Cards";
import SortOrder from "./components/SortOrder";

const items = ["One", "Two", "Three"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideAdvert: false,
      isChecked: false,
      numberOfCheckboxes: 0,
      sortCards: (a, b) => Number(a.id) - Number(b.id)
    };
    this.selectedCheckboxes = new Set();
    this.getCheckboxes = this.getCheckboxes.bind(this);
    this.checkboxesChecked = 0;
  }

  getCheckboxes = value => {
    if(!value){
      this.checkboxesChecked++;
    } else {
      this.checkboxesChecked--;
    }

    if (this.checkboxesChecked >= 1 && value) {
      this.setState({
        numberOfCheckboxes: this.checkboxesChecked++
      });
    } else if (this.checkboxesChecked >= 2 && value) {
      this.setState({
        numberOfCheckboxes: this.checkboxesChecked++
      });
    }
  };

  render() {
    const {numberOfCheckboxes}= this.state;
    return (
      <div>
        <div>
          <SortOrder onclick={this.sort} />
        </div>
        <div className={styles.checkboxes}>
          {items.map(label => {
            return (
              <Checkbox
                label={label}
                key={label}
                handleCheckboxChange={this.getCheckboxes}
              />
            );
          })}
        </div>
        <Cards label={this.label} checkboxesChecked={numberOfCheckboxes} />
      </div>
    );
  }
}

export default App;
