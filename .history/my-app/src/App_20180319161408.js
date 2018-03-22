import React, { Component } from 'react';
import has from 'lodash';
import logo from './logo.svg';
import styles from './App.scss';

class Card extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h2>Congrats, you now have Sass & CSS Modules in your React project! <span role="img" aria-label="emoji">😎</span></h2>
        </div>
      </div>
    )
  }
}

Card.list = has.range(1, 10);

class App extends Component {
  render() {
    return (
      <div>
      {Card.list.map(function(i){
        return i%3 ? <img src={logo} className={styles.logo} alt="logo" /> : <Card />})} 
      </div>
    );
  }
}

export default App;