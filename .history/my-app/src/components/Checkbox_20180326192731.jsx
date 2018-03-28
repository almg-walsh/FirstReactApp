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
      const { handleCheckboxChange, label, isChecked } = this.props;
  
      this.setState({
        isChecked: true
      });
  
      handleCheckboxChange(isChecked, label);
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
              onChange={this.toggleCheckboxChange}
            />
            {label}
          </label>
        </div>
      );
    }
  }

  export default Checkbox;