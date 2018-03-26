import React, { Component } from "react";
import has from "lodash";
import styles from "./App.scss";
import Button from "./components/Button";
import Advert from "./components/Advert";
import Image from "./components/Image"


const InjectedText = props => {
  return (
    <div className={styles.injectedText}>
      <p>I clicked the card number {props.cardNumber}</p>
    </div>
  );
};

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
  }

  toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = this.props;

    this.setState(({ isChecked }) => ({
      isChecked: !isChecked
    }));

    handleCheckboxChange(label, this.state.isChecked);
  };

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
          {label}
        </label>
      </div>
    );
  }
}

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTextComponent: false,
      cardNumber: this.props.cardNumber
    };
    this.renderText = this.renderText.bind(this);
  }

  renderText = () => {
    this.setState({
      showTextComponent: true
    });
  };

  render() {
    const { showTextComponent, cardNumber } = this.state;
    return (
      <div className={this.props.className}>
        <Image />
        <Button
          renderText={this.renderText}
          showTextComponent={showTextComponent}
          cardNumber={cardNumber}
        />
        <Text cardNumber={cardNumber} />
        {this.state.showTextComponent ? (
          <InjectedText cardNumber={this.state.cardNumber} />
        ) : null}
      </div>
    );
  }
}

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

  toggleCheckbox = (label, state) => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }

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
        this.setState(prevState => ({
          classNames: [styles.border, styles.backgroundBorder]
        }));
        alert("You can only select two checkboxes");
        this.selectedCheckboxes.delete(label);
        state = false;
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
        {Card.list.map(function(i) {
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
            component = <Advert key={i} hideAdvert={hideAdvert} />;
          }
          return component;
        })}
        {this.state.hideAdvert ? component : null}
      </div>
    );
  }
}

export default App;
