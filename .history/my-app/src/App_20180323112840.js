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
    <div className={styles.injectedText}>
      <p>I clicked the card number {props.cardNumber}</p> 
    </div>
  );
}

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    }
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
}

  toggleCheckboxChange = () => {
    const {
      handleCheckboxChange, 
      label,
      isChecked
    } = this.props;
  
    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleCheckboxChange(label, this.state.isChecked);
  }

  render() {
    const {label, isChecked} = this.props;

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
      <div className={this.props.className}>
        <Image />
        <Button  renderText={this.renderText}
                 showTextComponent={showTextComponent}
                 cardNumber={cardNumber}
                 />
        <Text cardNumber={cardNumber} />
        {
          this.state.showTextComponent ? 
          <InjectedText cardNumber={this.state.cardNumber}/> : 
          null
        } 
      </div>
    )
  }  
}

Card.list = has.range(1, 15); 
let number = 1;
let component;
const items = [
  'One',
  'Two',
  'Three',
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classNames: [],
      checked: this.props.isChecked
    }
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    this.selectedCheckboxes.has(label) ? 
      this.selectedCheckboxes.delete(label) : 
      this.selectedCheckboxes.add(label)

      console.log(this.state.checked)
      
      let checkedBoxes = document.querySelectorAll('input[type=checkbox]:checked');
      if(checkedBoxes.length > 2){
        alert('You can only select 2 at the time');
      }

      // if (this.selectedCheckboxes.size === 1){
      //   this.setState(prevState => ({
      //     classNames: prevState.classNames.add(styles.border)
      //   }));
      // } else if (this.selectedCheckboxes.size === 2){
      //   this.setState(prevState => ({
      //     classNames: prevState.classNames.add(styles.backgroundBorder)
      //   }));
      // }   

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
        default:
        this.setState(prevState => ({
          classNames: []
        }));
          break;
      }

      
    }

  createCheckbox = (label, isChecked) => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
      checked={isChecked}
    />
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )

  render() {
    const {
      classNames
    } = this.state;
    return (
      <div>
        {items.map(this.createCheckbox)}
        {
          Card.list.map(function(i){
            if (i%3) {
              component = <Card key={i} cardNumber={number} className={[styles.app, ...classNames].join(' ')}/> 
              number++
            } else {
              component = <Advert key={i}/>
            }
            return component;
          })
        }
      </div>
    );
  }
}

export default App;