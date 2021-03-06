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
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const {
      handleCheckboxChange, 
      label
    } = this.props;
  
    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));

    handleCheckboxChange(label);
  }

  render() {
    const {label, style} = this.props;
    const {isChecked} = this.state;

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={label}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
            style={style}
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
      classNames: new Set([styles.app])
    }
    this.selectedCheckboxes = new Set();
    this.foo = new Set();
  }
  
  
  toggleCheckbox = checkbox => {
    var listClassNames = this.state.classNames;

    this.selectedCheckboxes.has(checkbox) ? 
      this.selectedCheckboxes.delete(checkbox) : 
      this.selectedCheckboxes.add(checkbox)
    
  //   switch (this.selectedCheckboxes.length) {
  //   case 1:
  //     listClassNames.add(styles.border);
  //     this.setState({
  //       classNames: listClassNames
  //     })
  //     break;
  //   case 2:
  //     break;
  //   case 3:
  //     break;
  //   default:
  //     break;
  // }
      if (this.selectedCheckboxes.size === 1){
        listClassNames.add(styles.border);
        this.setState({
          classNames: listClassNames
        })
      } else if (this.selectedCheckboxes.size === 2){
      listClassNames.add(styles.backgroundBorder);
        this.setState({
          classNames: listClassNames
        })
      }   
      this.updateStyles(listClassNames);
  }

  updateStyles = list => {
    
    for (const value of list){
        console.log(value);
        list.slice(-1,1);
    }
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
    const {
      classNames
    } = this.state;
    return (
      <div>
        {items.map(this.createCheckbox)}
        {
          Card.list.map(function(i){
            if (i%3) {
              component = <Card key={i} cardNumber={number} className={[...classNames].join(' ')}/> 
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