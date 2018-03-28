import React, { Component } from "react";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
  }
  this.handleChange = this.handleChange.bind(this);
}

handleChange = () => {
  const { handleChange } = this.props;

  this.setState(({ isChecked }) => ({
    isChecked: !isChecked
  }));

  handleChange();
};

    render() {
      const { label } = this.props;
  
      return (
      <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={label}
              checked={this.props.isChecked}
              onChange={this.handleChange}
            />
            {label}
          </label>
        </div>
      );
    }
  }

  export default Checkbox;