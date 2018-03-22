import React, { Component } from 'react';
import has from 'lodash';
import logo from './logo.svg';
import styles from './App.scss';

const Button = props => {
  return (
    <div className="col-2">
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

const Card = props =>  {
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <h2>Congrats, you now have Sass & CSS Modules in your React project! <span role="img" aria-label="emoji">😎</span></h2>
      </div>
    </div>
  )
}

Card.list = has.range(1, 16);

class App extends Component {
  render() {
    return (
      <div>
        <Button />
      {Card.list.map(function(i){
        return i%3 ? <Card key={i}/> : <Advert key={i}/>})} 
      </div>
    );
  }
}

export default App;