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
    this.handleChange = this.handleChange.bind(this);
    this.sort = this.sort.bind(this)
  }

  getCheckboxes = value =>{
    this.setState({
      isChecked: false;
    })
   console.log(value)

  }

  sort = (e) =>{
    let id = e.target.id
    if (id === 'des') {
      this.setState({
        sortCards: (a, b) => Number(b.id) - Number(a.id)
      })
    } else {
      this.setState({
        sortCards: (a, b) => Number(b.id) - Number(a.id)
      })
      console.log(this.state.sortCards)

    }
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
        <Cards label={this.label} sortCards={this.state.sortCards}/>
      </div>
    );
  }
}

export default App;
