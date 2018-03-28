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
  
      this.setState(({ isChecked }) => (
        {
          isChecked: !isChecked,
        }
      ));
  
      handleCheckboxChange(label, isChecked);
    }
  
    render() {
      const { label, isChecked} = this.props;

      
      return (
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={label}
              isChecked={isChecked}
              onChange={this.toggleCheckboxChange}
            />
            {label}
          </label>
        </div>
      );
    }
  }

  export default Checkbox;