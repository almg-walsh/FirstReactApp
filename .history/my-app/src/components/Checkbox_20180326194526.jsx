import React, { Component } from "react";

class Checkbox extends Component {
    constructor(props) {
      super(props);
      this.state = {
          isChecked: this.props.isChecked
      }
    }
  
    render() {
      const { toggleCheckboxChange, label } = this.props;
  
      return (
        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              value={label}
              onChange={toggleCheckboxChange}
            />
            {label}
          </label>
        </div>
      );
    }
  }

  export default Checkbox;