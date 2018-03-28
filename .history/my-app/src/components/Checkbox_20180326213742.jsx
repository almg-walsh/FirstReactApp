import React, { Component } from "react";

class Checkbox extends Component {
    constructor(props) {
      super(props);
      this.state = {
          isChecked: false
      }
      this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
    }
  
    toggleCheckboxChange = () => {
      const { toggleCheckboxChange, label, isChecked } = this.props;
  
      this.setState(({ isChecked }) => ({
        isChecked: !isChecked
      }));

      toggleCheckboxChange(label, isChecked)
    };
  
    render() {
      const { label } = this.props;
      const { isChecked } = this.state;
  
      return (
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={label}
              checked={isChecked}
              onChange={this.toggleCheckboxChange}
            />
            {label}
          </label>
        </div>
      );
    }
  }

  export default Checkbox;