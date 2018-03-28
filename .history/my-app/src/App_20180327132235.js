import React, { Component } from "react";
import styles from "./App.scss";
import Checkbox from "./components/Checkbox/index";
import Cards from "./components/Cards/index"

const items = ["One", "Two", "Three"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <Cards label={this.label} cardName={this.cardName}/>
      </div>
    );
  }
}

export default App;
