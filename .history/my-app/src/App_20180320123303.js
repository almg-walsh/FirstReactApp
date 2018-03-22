import React, { Component } from 'react';
import has from 'lodash';
import logo from './logo.svg';
import styles from './App.scss';

const Button = props => {
  return (
    <div className={styles.button}>
      <button>
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
      <p>I am card number {props.selectedCard}</p> 
    </div>
  );
}

const Card = props =>  {
  return (
    <div className={styles.app}>
      <Image />
      <Button />
      <Text />
    </div>
  )
}

Card.list = has.range(1, 16);

class App extends Component {
  state = {
    cardNumber: [],
  };

  selectedCard = () => {
    this.setState(prevState => ({
      cardNumber:null,
    }))
  };

  render() {
    const {
      selectedCard,
    } = this.state;
    return (
      <div>
        {Card.list.map(function(i){
          return i%3 ? 
            <Card key={i} selectedCard={selectedCard}/> : 
            <Advert key={i}/>
          })
        }
      </div>
    );
  }
}

export default App;