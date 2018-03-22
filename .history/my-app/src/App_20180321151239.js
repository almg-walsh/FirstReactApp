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
    <div className={styles.text}>
      <p>I clicked the card number {props.cardNumber}</p> 
    </div>
  );
}

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTextComponent: false,
      cardNumber: this.props.cardNumber,
    }
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
                 />
        <Text cardNumber={cardNumber} />
      </div>
    )
  }  
}

Card.list = has.range(1, 15);
let number = 1;
let component;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTextComponent: false,
    }
    this.renderText = this.renderText.bind(this);
  }

  renderText = () => {
    console.log('test';)
    this.setState(
      {
        showTextComponent : true,
      });
  }

  render() {
    return (
      <div>
        {Card.list.map(function(i){
           if (i%3) {
             component = <Card key={i} cardNumber={number}/> 
             number++
           } else {
             component = <Advert key={i}/>
           }
           return component;
          })
        }
        {this.state.showTextComponent ? <InjectedText cardNumber={number}/> : null} 
      </div>
    );
  }
}

export default App;