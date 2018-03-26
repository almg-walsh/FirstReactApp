import React, { Component } from "react";
import Image from "./Image";
import Button from "./Button";
import Text from "./Text";
import InjectedText from "./InjectedText";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTextComponent: false,
      cardNumber: this.props.cardNumber
    };
    this.renderText = this.renderText.bind(this);
  }

  renderText = () => {
    this.setState({
      showTextComponent: true
    });
  };

  render() {
    const { showTextComponent, cardNumber } = this.state;
    return (
      <div className={this.props.className}>
        <Image />
        <Button
          renderText={this.renderText}
          showTextComponent={showTextComponent}
          cardNumber={cardNumber}
        />
        <Text cardNumber={cardNumber} />
        {this.state.showTextComponent ? (
          <InjectedText cardNumber={this.state.cardNumber} />
        ) : null}
      </div>
    );
  }
}

export default Card;