import React, { Component } from 'react';
import has from 'lodash';
import logo from './logo.svg';
import styles from './App.scss';

const Button = props => {
  return (
    <div className={styles.button}>
      <button onClick={props.displayText}>
        test
      </button>
    </div>
  );
}

const Advert = props => {
  return (
    <div className="col-2">
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
      <p>I am card number {props.cardNumber}</p> 
    </div>
  );
}

class Card extends Component {
  displayText = () => {
    console.log('test')
    this.setState({render: <Text />})
  }

  render() {
  return (
    <div className={styles.app}>
      <Image />
      <Button displayText={this.displayText}/>
    </div>
  )
}
}

Card.list = has.range(1, 15);
let number = 1;
let component;
class App extends Component {
  state = {
    cardNumber: [],
  };

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

      </div>
    );
  }
}

export default App;