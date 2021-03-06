import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.scss';
console.log(styles);

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

class App extends Component {
  render() {
    return (
      <div>
        <Card />
      </div>
    );
  }
}

export default App;