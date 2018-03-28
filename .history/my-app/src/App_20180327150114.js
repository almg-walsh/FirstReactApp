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

  handleChange(e){
    this.setState({
      isChecked: true
    })
    console.log(this.state.isChecked)
  }

  sort = (e) =>{
    console.log(e)
    let id = e.target.id
    if (id === "des") {
      this.setState({
        sortCards: (a, b) => Number(b.id) - Number(a.id)
      })
    } else {
      this.setState({
        sortCards: (a, b) => Number(a.id) - Number(b.id)
      })
    }
  }

  render() {
    const isChecked = this.state.isChecked;
    const {sortOrder} = this.props;
    return (
      <div>
        <div>
          <SortOrder order={this.sort} />
        </div>
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
        <Cards label={this.label} cardName={this.cardName} sortOrder={sortOrder}/>
      </div>
    );
  }
}

export default App;
