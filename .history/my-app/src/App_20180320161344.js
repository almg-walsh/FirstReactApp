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
      <p>I am card number {props.cardNumber}</p> 
    </div>
  );
}

const Card = props =>  {
  return (
    <div className={styles.app}>
      <Image />
      <Button />
      <Text cardNumber={props.cardNumber}/>
    </div>
  )
}

Card.list = has.range(1, 10);

class App extends Component {
  state = {
    cardNumber: 1,
  };

  render() {
    
    return (
      <div>
        {/* {
          Card.list.forEach(function(i) {
            if(i%3){
              <Card key={i} cardNumber={i}/> 
            } else {
              <Advert key={i}/> 
              return i - 1;
            }
          })
        } */}
        {Card.list.map(function(i){
          return i%3 === 0 ? 
          <Card key={i} cardNumber={i}/> :
            <Advert key={i}/>
            {i} - 1
          })
        }
      </div>
    );
  }
}

export default App;