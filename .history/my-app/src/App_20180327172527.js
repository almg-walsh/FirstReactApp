import React, { Component } from "react";
import styles from "./App.scss";
import Checkbox from "./components/Checkbox/index";
import Cards from "./components/Cards/index"
import SortOrder from "./components/SortOrder/index"

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
  }

  getCheckboxes = value =>{
   
     
    console.log(value)

  }

  render() {
    const isChecked = this.state.isChecked;
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
              checked={isChecked}
            />
          );
        })}
        </div>
        <Cards label={this.label}/>
      </div>
    );
  }
}

export default App;
