import React, { Component } from 'react';
import has from 'lodash';
import logo from './logo.svg';
import styles from './App.scss';

const Button = props => {
  return (
    <div className={styles.button}>
      <button onClick={props.renderText}>
        Click me
      </button>
    </div>
  );
}

const Advert = props => {
  return (
    <div className={styles.advert}>
      <img src={logo} className={styles.logo} alt="logo" />
    </div>
  );
}

const Image = props => {
  return (
    <div className={styles.image}>
      <img src="https://avatars0.githubusercontent.com/u/5065156?v=4" alt="logo" />
    </div>
  );
}

const Text = props => {
  return (
    <div className={styles.text}>
      <p>I am the card {props.cardNumber}</p> 
    </div>
  );
}

const InjectedText = props => {
  return (
    <div className={styles.InjectedText}>
      <p>I clicked the card number {props.cardNumber}</p> 
    </div>
  );
}

class Checkbox extends Component {
  
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const {handleCheckboxChange, label} = this.props;

    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleCheckboxChange(label);
  }

  render() {
    const {label} = this.props;
    const {isChecked} = this.state;

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
  };
 
}

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTextComponent: false,
      cardNumber: this.props.cardNumber,
    }
    this.renderText = this.renderText.bind(this);
  }

  renderText = () => {
    this.setState(
      {
        showTextComponent : true,
      });
  }

  render(){
    const {
      showTextComponent,
      cardNumber
    } = this.state;
    return (
      <div className={styles.app}>
        <Image />
        <Button  renderText={this.renderText}
                 showTextComponent={showTextComponent}
                 cardNumber={cardNumber}
                 />
        <Text cardNumber={cardNumber} />
        {this.state.showTextComponent ? <InjectedText cardNumber={this.state.cardNumber}/> : null} 
      </div>
    )
  }  
}

Card.list = has.range(1, 15);
let number = 1;
const items = [
  'One',
  'Two',
  'Three',
];

class App extends Component {
  constructor(props) {
    super(props);
    this.selectedCheckboxes = new Set();
  }

  createCardsAndAds = () => {
    Card.list.map(function(i){
    if (i%3) {
      this.component = <Card key={i} cardNumber={number}/> 
      number++
    } else {
      this.component = <Advert key={i}/>
    }
    return this.component;
   })
 }
  
  toggleCheckbox = label => {
    this.selectedCheckboxes.has(label) ? this.selectedCheckboxes.delete(label) : this.selectedCheckboxes.add(label)
    console.log(this.selectedCheckboxes);
  }

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )

  render() {
    return (
      <div>
        {items.map(this.createCheckbox)}
        {this.createCardsAndAds}
      </div>
    );
  }
}

export default App;